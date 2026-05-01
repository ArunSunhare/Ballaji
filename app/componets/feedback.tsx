"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code"; 

export default function GetFeedback() {
  const [feedbackUrl, setFeedbackUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFeedbackUrl(`${window.location.origin}/feedback`);
    }
  }, []);

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl border border-orange-200 bg-white p-6 shadow-sm md:flex-row md:justify-between md:p-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <div className="flex min-h-[260px] items-center justify-center rounded-3xl bg-orange-50 p-6 text-center md:text-left">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Scan the QR for feedback
              </h1>
              <p className="mt-4 text-base text-slate-600">
                Scan the QR code to open the feedback page.
              </p>

              <Link
                href="/feedback"
                className="mt-6 inline-flex rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Go to Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-1 justify-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            
            {feedbackUrl && (
              <QRCode
                value={feedbackUrl}   // ✅ dynamic URL
                size={240}
              />
            )}

          </div>
        </div>
      </div>
    </section>
  );
}