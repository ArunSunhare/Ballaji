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
        `${baseUrl}/GetPatientByUHID?SecurityKey=${SecurityKey}&ClientId=${ClientId}&PatientID=${uhid}`,
      {
        method: "GET",
        cache: "no-store",
      }
      //http://shbcdc.in/HIS/API/MobileApplication.asmx/GetPatientByUHID?SecurityKey=XZY45ZTYLG19045GHTY&ClientId=XZY45ZTBNG190489GHTY&PatientID=MR/26/005552
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();
    // console.log(" RAW PATIENT RESPONSE:", text);

    let jsonString = text;

    // Handle XML-wrapped response
    if (text.includes("<?xml")) {
      const match = text.match(/<string[^>]*>([\s\S]*?)<\/string>/);
      if (match && match[1]) {
        jsonString = match[1];
      }
    }

    const parsed = JSON.parse(jsonString);
    // console.log("PARSED PATIENT DATA:", parsed);

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
    const patientRaw = parsed.data?.[0];

    const patient = {
      id: patientRaw?.MRNo || "",
      name: patientRaw?.PName || "",
      age: patientRaw?.Age || "",
      gender: patientRaw?.Gender || "",
      phone: patientRaw?.ContactNo || "",
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