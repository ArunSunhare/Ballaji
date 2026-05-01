"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { TestTube, ArrowLeft, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { Footer } from "@/app/componets/footer";
import { TestBookingCard } from "@/app/componets/TestBookingCard";
import { MainNavbar } from "@/app/componets/MainNavbar";
import { TopNavbar } from "@/app/componets/TopNavbar";
import { TopHeader } from "@/app/componets/top_header";

const STATIC_CENTRES = ["Karkardooma Institutional Area"];

const DUMMY_SPECIALITY_TESTS = [
  {
    Item_ID: "DUMMY-RADIATION-001",
    ItemName: "Radiation Therapy Planning",
    categoryid: "RADIATION",
    Rate: 1500,
    LabType: "RADIATION",
    TAT: "24-48 Hours*",
    TestPreparation: "Please carry previous reports and imaging records.",
    observationName: "Clinical Review,Treatment Planning,Dose Assessment",
    description: "Radiation Therapy Planning helps assess treatment requirements before radiotherapy.",
  },
  {
    Item_ID: "DUMMY-RADIATION-002",
    ItemName: "Radiation Oncology Consultation",
    categoryid: "RADIATION",
    Rate: 1000,
    LabType: "RADIATION",
    TAT: "Same Day*",
    TestPreparation: "Please carry previous biopsy, scan, and treatment reports.",
    observationName: "Oncology Review,Treatment Advice",
    description: "Radiation Oncology Consultation is used for specialist review and treatment guidance.",
  },
  {
    Item_ID: "DUMMY-DIALYSIS-001",
    ItemName: "Hemodialysis Session",
    categoryid: "DIALYSIS",
    Rate: 1800,
    LabType: "DIALYSIS",
    TAT: "As scheduled",
    TestPreparation: "Please follow the dialysis team's instructions before visit.",
    observationName: "Vitals Check,Dialysis Session,Post Session Review",
    description: "Hemodialysis Session supports kidney function through scheduled dialysis care.",
  },
  {
    Item_ID: "DUMMY-DIALYSIS-002",
    ItemName: "Dialysis Pre Assessment",
    categoryid: "DIALYSIS",
    Rate: 800,
    LabType: "DIALYSIS",
    TAT: "Same Day*",
    TestPreparation: "Please carry recent kidney function and prescription records.",
    observationName: "Clinical Assessment,Vascular Access Review",
    description: "Dialysis Pre Assessment helps review readiness before a dialysis session.",
  },
];

export default function TestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showParams, setShowParams] = useState(false);
  const [dynamicTest, setDynamicTest] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug) || "";

  // ✅ FIX 1: Decode the itemId (was encoded with encodeURIComponent in list page)
  const itemId = decodeURIComponent(searchParams.get("id") || "");

  const slugify = (text: string) =>
    (text || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  const findMatch = (data: any[]) => {
    // ✅ FIX 2: Try matching by Item_ID first (most reliable)
    if (itemId) {
      const byId = data.find(
        (item: any) =>
          String(item?.Item_ID || "").trim() === String(itemId).trim()
      );
      if (byId) return byId;
    }
    // Fallback: match by slug
    const targetSlug = slugify(slug);
    return data.find((item: any) => slugify(item?.ItemName) === targetSlug) || null;
  };

  useEffect(() => {
    if (!slug) return;

    const fetchTest = async () => {
      setLoading(true);
      setError("");

      try {
        const dummyMatch =
          DUMMY_SPECIALITY_TESTS.find((item) => String(item.Item_ID) === itemId) ||
          DUMMY_SPECIALITY_TESTS.find((item) => slugify(item.ItemName) === slugify(slug));

        if (dummyMatch) {
          setDynamicTest(mapTest(dummyMatch));
          setLoading(false);
          return;
        }
        // ✅ FIX 3: If we have itemId, search by it directly first
        if (itemId) {
          const res = await fetch(
            `/api/get-investigation?search=${encodeURIComponent(itemId)}&limit=50`
          );
          const json = await res.json();

          if (json.status === "Success" && Array.isArray(json.data)) {
            const match = findMatch(json.data);
            if (match) {
              setDynamicTest(mapTest(match));
              setLoading(false);
              return;
            }
          }
        }

        // Try search by name
        const searchTerm = slug.replace(/-/g, " ");
        const res = await fetch(
          `/api/get-investigation?search=${encodeURIComponent(searchTerm)}&limit=100`
        );
        const json = await res.json();

        if (json.status === "Success" && Array.isArray(json.data)) {
          const match = findMatch(json.data);
          if (match) {
            setDynamicTest(mapTest(match));
            setLoading(false);
            return;
          }
        }

        // ✅ FIX 4: Last resort — fetch all without search filter
        const fallbackRes = await fetch(`/api/get-investigation?limit=5000`);
        const fallbackJson = await fallbackRes.json();

        if (fallbackJson.status === "Success" && Array.isArray(fallbackJson.data)) {
          const match = findMatch(fallbackJson.data);
          if (match) {
            setDynamicTest(mapTest(match));
            setLoading(false);
            return;
          }
        }

        setError("Test not found");
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setError("Failed to load test details");
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [slug, itemId]);

  const mapTest = (match: any) => {
    const observationList = match.observationName
      ? match.observationName.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [];

    return {
      slug,
      name: match.ItemName,
      subtitle: match.LabType === "LAB" ? "Laboratory Test" : "Diagnostic Test",
      price: `₹${match.Rate}`,
      originalPrice: `₹${Math.round(match.Rate * 1.2)}`,
      parameters: observationList.length || 1,
      reportTat: match.TAT || "24-48 Hours*",
      description: match.description || match.ItemName,
      alsoKnownAs: [match.ItemName],
      specialization: "General Pathology",
      testPreparation: match.TestPreparation || "No special preparation required.",
      observationName: match.observationName || "",
      Item_ID: match.Item_ID || "",
      SubCategoryID: match.SubCategoryID || match.SubcategoryID || "",
      CategoryID: match.categoryid || match.CategoryID || "",
      LabType: match.LabType || "",
      Sample: match.Sample || "",
      centres: STATIC_CENTRES,
      Rate: match.Rate || 0,
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-500" />
      </div>
    );
  }

  if (error || !dynamicTest) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <TopHeader />
        <TopNavbar />
        <MainNavbar />
        <div className="flex-grow flex flex-col items-center justify-center py-24 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Not Found</h2>
          <p className="text-gray-500 mb-8">
            We couldn't find the test you're looking for.
          </p>
          <button
            onClick={() => router.push("/investigations")}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Browse All Tests
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const test = dynamicTest;

  return (
    <>
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      <section className="bg-gray-100 py-4 sm:py-6 min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 min-w-0">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 mb-6 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 min-w-0">
              {/* Header */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 min-w-0 overflow-hidden">
                <h1 className="text-xl sm:text-3xl font-bold leading-tight text-blue-900 mb-1 break-words">{test.name}</h1>
                <p className="text-gray-600 text-sm mb-4">{test.subtitle}</p>

                <div className="lg:hidden mb-4">
                  <span className="text-gray-400 line-through text-sm mr-2">
                    {test.originalPrice}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600">{test.price}</span>
                </div>

                {test.alsoKnownAs?.length > 0 && (
                  <div className="mb-4 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Also Known As:</h3>
                    <div className="flex max-w-full flex-wrap gap-2">
                      {test.alsoKnownAs.map((item: string, idx: number) => (
                        <span
                          key={idx}
                          className="inline-flex max-w-full px-3 py-1.5 text-xs sm:text-sm leading-snug border border-orange-500 text-orange-600 rounded-md break-words whitespace-normal"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-left sm:text-justify break-words">{test.description}</p>
              </div>

              {/* Parameters */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 min-w-0">
                <h2 className="font-bold text-sm md:text-lg text-black md:mb-4 mb-2">
                  Includes <span className="text-[#c74115]">{test.parameters}</span> Test Parameters
                </h2>
                <button
                  onClick={() => setShowParams(!showParams)}
                  className="w-full min-w-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-3 sm:px-4 py-3 text-left hover:bg-gray-200 transition cursor-pointer rounded-md bg-gray-100 font-bold text-gray-900"
                >
                  <span className="min-w-0 w-full sm:w-auto text-sm sm:text-base leading-snug break-words sm:truncate">{test.name}</span>
                  <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end md:gap-4 gap-2 flex-shrink-0">
                    <span className="text-orange-600 text-sm font-medium whitespace-nowrap">
                      {test.parameters} Parameter{test.parameters !== 1 ? "s" : ""}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-600 transform transition-transform duration-200 ${
                        showParams ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {showParams && (
                  <div className="mt-4">
                    {test.observationName &&
                    test.observationName.split(",").filter((s: string) => s.trim()).length > 0 ? (
                      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 max-h-[300px] overflow-y-auto pr-2">
                        {test.observationName.split(",").map((param: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"
                              />
                            </svg>
                            <p className="min-w-0 text-gray-700 text-[13px] leading-tight break-words">
                              {param.trim().replace(/\*/g, "").trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-2 bg-gray-50 rounded-lg min-w-0">
                        <div className="flex items-center gap-3 min-w-0">
                          <TestTube className="w-5 h-5 text-orange-600" />
                          <span className="min-w-0 text-gray-800 font-medium break-words">{test.name}</span>
                        </div>
                        <span className="text-orange-600 text-sm font-medium shrink-0">
                          {test.parameters} Parameter{test.parameters > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Test Preparation */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 min-w-0 overflow-hidden">
                <h3 className="font-bold text-gray-900 mb-3">Test Preparation:</h3>
                <p className="text-gray-700 leading-relaxed text-sm break-words">{test.testPreparation}</p>
              </div>

              {/* TAT */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 min-w-0 overflow-hidden">
                <h3 className="font-bold text-gray-900 mb-2">Reporting TAT:</h3>
                <p className="text-gray-700 break-words">{test.reportTat}</p>
              </div>

              {/* Specialization */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 min-w-0 overflow-hidden">
                <h3 className="font-bold text-gray-900 mb-3">Specializations:</h3>
                <span className="inline-block max-w-full bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm border border-orange-200 break-words">
                  {test.specialization}
                </span>
              </div>

              {/* FAQs */}
              {test.faqs?.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-blue-900 px-6 py-4">
                    <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                  </div>
                  <div className="divide-y">
                    {test.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="border-b last:border-b-0">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                              expandedFaq === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expandedFaq === idx && (
                          <div className="px-6 pb-4 text-gray-700 text-sm">{faq.answer}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT BOOKING CARD */}
            <div className="lg:col-span-1 min-w-0">
              <TestBookingCard test={test} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
