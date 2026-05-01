import { NextRequest, NextResponse } from "next/server";

/* ---------------- CONFIG ---------------- */

const baseUrl = "https://shbcdc.in/HIS/API/MobileApplication.asmx";
const SecurityKey = "XZY45ZTYLG19045GHTY";
const ClientId = "XZY45ZTBNG190489GHTY";

/* ---------------- UTILS ---------------- */

function decodeHtml(html: string) {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/* ---------------- IN-MEMORY CACHE ---------------- */
/* (Best possible optimization without Redis) */

let CACHE_DATA: any[] | null = null;
let CACHE_TIME = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/* ---------------- API HANDLER ---------------- */

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";
    const categoryId = searchParams.get("categoryid") || "";
    const limit = parseInt(searchParams.get("limit") || "10");

    const now = Date.now();

    /* ✅ Serve from cache if valid */
    if (CACHE_DATA && now - CACHE_TIME < CACHE_TTL) {
      // 🔍 Filter data based on search query
      // const categoryId = searchParams.get("categoryid") || "";
      let filteredData = CACHE_DATA;
      
      // if (searchQuery) {
      //   filteredData = CACHE_DATA.filter((item: any) => 
      //     item.ItemName?.toLowerCase().includes(searchQuery) ||
      //     item.categoryid?.toLowerCase().includes(searchQuery) ||
      //     item.ItemCode?.toLowerCase().includes(searchQuery)
      //   );
      // }
       if (categoryId) {
          filteredData = filteredData.filter(
            (item: any) => item.categoryid === categoryId
          );
        }

        // 🔹 Filter by search
        if (searchQuery) {
          filteredData = filteredData.filter((item: any) => 
            item.ItemName?.toLowerCase().includes(searchQuery) ||
            item.ItemCode?.toLowerCase().includes(searchQuery)
          );
        }

      // 📊 Apply limit
      const limitedData = filteredData.slice(0, limit);

      return NextResponse.json({
        status: "Success",
        message: searchQuery ? "Search results fetched" : "Data fetched from cache",
        data: limitedData,
        total: filteredData.length,
      });
    }

    /* 🔴 External SOAP API call (slow part) */
    const response = await fetch(
      `${baseUrl}/GetInvestigation?SecurityKey=${SecurityKey}&ClientId=${ClientId}`
    );

    if (!response.ok) {
      throw new Error("External API failed");
    }

    /* 🔴 SOAP XML → TEXT */
    const xmlText = await response.text();
    // console.log("SOAP Response:", xmlText);

    /* 🔴 Extract JSON string from XML */
    const match = xmlText.match(/<string[^>]*>([\s\S]*?)<\/string>/);
    if (!match || !match[1]) {
      throw new Error("Invalid SOAP response");
    }

    /* 🔴 Decode HTML entities */
    const decodedJson = decodeHtml(match[1]);

    /* 🔴 Parse JSON */
    const parsed = JSON.parse(decodedJson);

    const allData = Array.isArray(parsed?.data) ? parsed.data : [];

    /* ✅ Store FULL data in cache ONCE */
    CACHE_DATA = allData;
    CACHE_TIME = now;

   
    let filteredData = allData;

    // 🔹 Filter by categoryid
    if (categoryId) {
      filteredData = filteredData.filter(
        // (item: any) => item.categoryid === categoryId
        (item: any) =>item.categoryid?.toLowerCase() === categoryId.toLowerCase()
      );
    }

    // 🔹 Filter by search
    if (searchQuery) {
      filteredData = filteredData.filter((item: any) => 
        item.ItemName?.toLowerCase().includes(searchQuery) ||
        item.ItemCode?.toLowerCase().includes(searchQuery)
      );
    }

    //Apply limit
    const limitedData = filteredData.slice(0, limit);

    /* Return filtered results */
    return NextResponse.json({
      status: "Success",
      message: searchQuery ? "Search results fetched" : "Data fetched successfully",
      data: limitedData,
      total: filteredData.length,
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        status: "Error",
        message: error.message || "Failed to fetch investigations",
        data: [],
      },
      { status: 500 }
    );
  }
}
