import { NextRequest, NextResponse } from "next/server";

const ASMX_URL =
  "https://shbcdc.in/HIS/API/MobileApplication.asmx/SavePatientFeedback";

const SECURITY_KEY = "XZY45ZTYLG19045GHTY";
const CLIENT_ID = "XZY45ZTBNG190489GHTY";

const extractAsmxString = (text: string) => {
  const stringMatch = text.match(/<string[^>]*>([\s\S]*?)<\/string>/i);
  if (stringMatch?.[1]) {
    return stringMatch[1].trim();
  }

  const soapMatch = text.match(
    /<SavePatientFeedbackResult[^>]*>([\s\S]*?)<\/SavePatientFeedbackResult>/i
  );
  if (soapMatch?.[1]) {
    return soapMatch[1].trim();
  }

  return text.trim();
};

const parseServiceResponse = (text: string) => {
  const content = extractAsmxString(text);

  try {
    const parsed = JSON.parse(content);
    return {
      ok: String(parsed?.status || "").toLowerCase() === "success",
      message: parsed?.message || "",
      data: parsed?.data,
      raw: content,
    };
  } catch {
    const normalized = content.toLowerCase();
    return {
      ok: normalized.includes("success") || normalized === "true",
      message: content,
      data: null,
      raw: content,
    };
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.PatientName?.trim() || !body.PatientID?.trim()) {
      return NextResponse.json(
        {
          Status: "Error",
          Message: "Patient name and UHID are required",
        },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      SecurityKey: SECURITY_KEY,
      ClientId: CLIENT_ID,
      PatientName: body.PatientName.trim(),
      MobileNo: body.MobileNo?.trim() || "NA",
      PatientID: body.PatientID.trim(),
      department: body.department || "OPD",
      VisitDate: body.VisitDate?.trim() || "",
      Doctor_explained_the_disease_clearly: String(
        body.Doctor_explained_the_disease_clearly || 0
      ),
      Doctor_listened_carefully: String(body.Doctor_listened_carefully || 0),
      Doctor_gave_enough_consultation_time: String(
        body.Doctor_gave_enough_consultation_time || 0
      ),
      Doctor_behaviour_and_professionalism: String(
        body.Doctor_behaviour_and_professionalism || 0
      ),
      Nursing_staff_responsiveness: String(
        body.Nursing_staff_responsiveness || 0
      ),
      Courtesy_of_nursing_staff: String(body.Courtesy_of_nursing_staff || 0),
      Attention_to_patient_needs: String(body.Attention_to_patient_needs || 0),
      Cleanliness_of_hospital: String(body.Cleanliness_of_hospital || 0),
      Waiting_time: String(body.Waiting_time || 0),
      Admission_process: String(body.Admission_process || 0),
      Discharge_process: String(body.Discharge_process || 0),
      Billing_clarity: String(body.Billing_clarity || 0),
      Diagnostic_services_efficiency: String(
        body.Diagnostic_services_efficiency || 0
      ),
      Lab_report_delivery_time: String(body.Lab_report_delivery_time || 0),
      Pharmacy_staff_behaviour: String(body.Pharmacy_staff_behaviour || 0),
      Medicine_availability: String(body.Medicine_availability || 0),
      Overall_satisfaction: String(body.Overall_satisfaction || 0),
      Comments: body.Comments?.trim() || "",
    });

    const response = await fetch(ASMX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    });

    const text = await response.text();
    const service = parseServiceResponse(text);

    if (!response.ok) {
      return NextResponse.json(
        {
          Status: "Error",
          Message: service.message || "Feedback service failed",
          Raw: service.raw,
        },
        { status: response.status }
      );
    }

    if (!service.ok) {
      return NextResponse.json(
        {
          Status: "Error",
          Message: service.message || "Feedback could not be submitted",
          Raw: service.raw,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      Status: "Success",
      Message: service.message || "Feedback submitted successfully",
      Data: service.data ?? null,
      Raw: service.raw,
    });
  } catch (error) {
    console.error("FEEDBACK ERROR:", error);

    return NextResponse.json(
      {
        Status: "Error",
        Message: "Server Error",
      },
      { status: 500 }
    );
  }
}
