import { NextRequest, NextResponse } from "next/server";

const baseUrl = "https://shbcdc.in/HIS/API/MobileApplication.asmx";
const SecurityKey = "XZY45ZTYLG19045GHTY";
const ClientId = "XZY45ZTBNG190489GHTY";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const uhid = searchParams.get("uhid");

  // validation
  if (!uhid) {
    return NextResponse.json(
      { Status: "Error", Message: "UHID required", Data: null },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
        `${baseUrl}/GetPatientDetails?SecurityKey=${SecurityKey}&ClientId=${ClientId}&UHID=${uhid}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();
    console.log(" RAW PATIENT RESPONSE:", text);

    let jsonString = text;

    // Handle XML-wrapped response
    if (text.includes("<?xml")) {
      const match = text.match(/<string[^>]*>([\s\S]*?)<\/string>/);
      if (match && match[1]) {
        jsonString = match[1];
      }
    }

    const parsed = JSON.parse(jsonString);
    console.log("PARSED PATIENT DATA:", parsed);

    if (parsed.status === "Failure") {
      return NextResponse.json(
        {
          Status: "Error",
          Message: parsed.message,
          Data: null,
        },
        { status: 400 }
      );
    }

    // Format patient data (adjust fields as per API response)
    const patient = {
      id: parsed.data?.UHID || "",
      name: parsed.data?.PatientName || "",
      age: parsed.data?.Age || "",
      gender: parsed.data?.Gender || "",
      phone: parsed.data?.MobileNo || "",
    };

    // console.log("formatted patient data:", patient);

    return NextResponse.json({
      Status: "Success",
      Message: parsed.message || "",
      Data: patient,
    });

  } catch (error: any) {
    console.error("err:", error);

    return NextResponse.json(
      {
        Status: "Error",
        Message: error.message || "Failed to fetch patient",
        Data: null,
      },
      { status: 500 }
    );
  }
}