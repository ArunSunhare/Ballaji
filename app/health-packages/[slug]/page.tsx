"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Activity, ArrowLeft, Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { Navigation } from "@/app/componets/navbar";
import { Footer } from "@/app/componets/footer";
import { TopNavbar } from "@/app/componets/TopNavbar";
import { TopHeader } from "@/app/componets/top_header";
import { MainNavbar } from "@/app/componets/MainNavbar";

const STATIC_CENTRES = ["Karkardooma Institutional Area"];

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showParams, setShowParams] = useState(false);
  const [selectedCentre, setSelectedCentre] = useState(STATIC_CENTRES[0] || "");
  const [bookingDropdown, setBookingDropdown] = useState<"centres" | "package" | null>(null);
  const bookingDropdownAreaRef = useRef<HTMLDivElement | null>(null);

  const [dynamicPackage, setDynamicPackage] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug) || "";
  const itemId = searchParams.get("id") || "";

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (!bookingDropdownAreaRef.current?.contains(event.target as Node)) {
        setBookingDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  const slugify = (text: string) => {
    return (text || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  useEffect(() => {
    const fetchFromApi = async () => {
      try {
        const searchTerm = slug.replace(/-/g, " ");
        // console.log("🔍 SEARCH TERM:", searchTerm);

        const res = await fetch("/api/get-health-packages");
        const json = await res.json();

        // Parse response
        let parsed;
        if (json?.d) {
          parsed = typeof json.d === "string" ? JSON.parse(json.d) : json.d;
        } else if (json?.status) {
          parsed = json;
        } else {
          parsed = json;
        }

        // console.log("✅ API RESPONSE:", parsed);

        if (parsed?.status !== "Success" || !parsed.data?.length) {
          setError("Package not found");
          return;
        }

        const targetSlug = slugify(slug);

        let match = null as any;
        if (itemId) {
          match = parsed.data.find((item: any) => String(item?.itemID || "") === String(itemId));
        }
        if (!match) {
          match = parsed.data.find((item: any) => slugify(item?.ItemName) === targetSlug);
        }

        // console.log("🎯 MATCHED PACKAGE:", match);

        if (!match) {
          setError("Package not found");
          return;
        }

        const packageItems = match.PackageItem
          ? match.PackageItem.split(",").map((s: string) => s.trim()).filter(Boolean)
          : [];

        const mappedPackage = {
          slug,
          name: match.ItemName,
          subtitle: "Health Package",
          price: `₹${match.Rate}`,
          originalPrice: `₹${Math.round(match.Rate * 1.2)}`,
          parameters: match.PackageCount || packageItems.length || 0,
          reportTat: "24-48 Hours*",
          description: `${match.ItemName} is a comprehensive health package that includes ${match.PackageCount} diagnostic tests to assess your overall health.`,
          packageItems: packageItems,
          packageItemString: match.PackageItem || "",
          packagitemID: match.PackagitemID || "",
          Item_ID: match.itemID || "",
          CategoryID: match.CategoryID || "",
          SubCategoryID: match.SubCategoryID || "",
          Rate: match.Rate || 0,
          centres: STATIC_CENTRES,
        };

        // console.log("🚀 FINAL PACKAGE OBJECT:", mappedPackage);

        setDynamicPackage(mappedPackage);
      } catch (err) {
        console.error("❌ FETCH ERROR:", err);
        setError("Failed to load package details");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchFromApi();
  }, [slug]);

  const handleBookNow = () => {
    if (!dynamicPackage) return;

    const priceNumber = Number(dynamicPackage.Rate) || 0;

    addToCart({
      id: dynamicPackage.Item_ID || dynamicPackage.slug || dynamicPackage.name,
      name: dynamicPackage.name,
      price: priceNumber,
      type: "package",
      reportTat: dynamicPackage.reportTat,
      Item_ID: dynamicPackage.Item_ID || "",
      CategoryID: dynamicPackage.CategoryID || "",
      SubCategoryID: dynamicPackage.SubCategoryID || "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (error || !dynamicPackage) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <TopHeader />
      <TopNavbar />
      <MainNavbar />
        <div className="flex-grow flex flex-col items-center justify-center py-24 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
          <p className="text-gray-500 mb-8">We couldn't find the package you're looking for.</p>
          <button
            onClick={() => router.push('/health-packages')}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Browse All Packages
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const pkg = dynamicPackage;

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
              {/* Package Header */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 min-w-0 overflow-hidden">
                <h1 className="text-xl sm:text-3xl font-bold leading-tight text-blue-900 mb-1 break-words">
                  {pkg.name}
                </h1>
                <p className="text-gray-600 text-sm mb-4">{pkg.subtitle}</p>

                <div className="lg:hidden mb-4">
                  <span className="text-gray-400 line-through text-sm mr-2">
                    {pkg.originalPrice}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-orange-600">
                    {pkg.price}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-left sm:text-justify break-words">
                  {pkg.description}
                </p>
              </div>

              {/* Package Includes */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4 min-w-0">
                <h2 className="font-bold text-sm md:text-lg text-black md:mb-4 mb-2">
                  Includes<span className="text-[#c74115]"> {pkg.parameters}</span> Tests
                </h2>
                <button
                  onClick={() => setShowParams(!showParams)}
                  className="w-full min-w-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-3 sm:px-4 py-3 text-left hover:bg-gray-200 transition cursor-pointer rounded-md bg-gray-100 font-bold text-gray-900"
                >
                  <span className="min-w-0 w-full sm:w-auto text-sm sm:text-base leading-snug break-words sm:truncate sm:pr-4">{pkg.name}</span>
                  <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end md:gap-4 gap-2 flex-shrink-0">
                    <span className="text-orange-600 text-sm font-medium whitespace-nowrap">
                      {pkg.parameters} Test{pkg.parameters !== 1 ? 's' : ''}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-600 transform transition-transform duration-200 ${showParams ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                </button>

                {showParams && pkg.packageItems && pkg.packageItems.length > 0 && (
                  <div className="mt-4">
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {pkg.packageItems.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100 min-w-0">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"></path>
                          </svg>
                          <p className="min-w-0 text-gray-700 font-[var(--font-roboto-serif)] text-[13px] leading-tight break-words">{item.trim().replace(/\*/g, '').trim()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reporting TAT */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Reporting TAT:
                </h3>
                <p className="text-gray-700">{pkg.reportTat}</p>
              </div>
            </div>

            {/* RIGHT BOOKING CARD */}
            <div className="lg:col-span-1 min-w-0">
              <div className="w-full max-w-full min-w-0 overflow-visible bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
                <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-4">
                  Visit Type
                </h3>

                <button className="w-full bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg mb-5 sm:mb-6 hover:bg-orange-700 transition-colors text-sm sm:text-base font-semibold">
                  Visit Centre
                </button>

                <div ref={bookingDropdownAreaRef}>
                  <div className="mb-6 w-full max-w-full min-w-0">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">
                      Centres
                    </h4>
                    <div className="relative w-full min-w-0">
                      <button
                        type="button"
                        onClick={() => setBookingDropdown(bookingDropdown === "centres" ? null : "centres")}
                        className="flex w-full min-w-0 items-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-left text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 sm:px-4 sm:py-3 sm:text-base"
                      >
                        <span className="min-w-0 flex-1 truncate">{selectedCentre || "Select centre"}</span>
                      </button>
                      <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-transform ${bookingDropdown === "centres" ? "rotate-180" : ""}`} />
                      {bookingDropdown === "centres" && (
                        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                          {pkg.centres && pkg.centres.map((centre: string, idx: number) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setSelectedCentre(centre);
                                setBookingDropdown(null);
                              }}
                              className="block w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-orange-50 break-words"
                            >
                              {centre}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6 w-full max-w-full min-w-0">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">
                      Package
                    </h4>
                    <div className="relative w-full min-w-0">
                      <button
                        type="button"
                        onClick={() => setBookingDropdown(bookingDropdown === "package" ? null : "package")}
                        className="flex w-full min-w-0 items-center rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-left text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500 sm:px-4 sm:py-3 sm:text-base"
                      >
                        <span className="min-w-0 flex-1 truncate" title={pkg.name}>
                          {pkg.name}
                        </span>
                      </button>
                      <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-transform ${bookingDropdown === "package" ? "rotate-180" : ""}`} />
                      {bookingDropdown === "package" && (
                        <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                          <button
                            type="button"
                            onClick={() => setBookingDropdown(null)}
                            className="block w-full px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-orange-50 break-words"
                          >
                            {pkg.name}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold leading-tight text-orange-600 break-words">
                    {pkg.price}
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-orange-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-orange-700 transition-colors mb-3 text-sm sm:text-base font-semibold"
                >
                  Book Now
                </button>

                <button className="w-full min-w-0 border-2 border-orange-600 text-orange-600 px-3 py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors text-sm sm:text-base font-semibold mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="min-w-0 break-words leading-snug">Call {selectedCentre}</span>
                </button>

                <button className="w-full border-2 border-orange-600 text-orange-600 px-3 py-2.5 sm:py-3 rounded-lg hover:bg-orange-50 transition-colors text-sm sm:text-base font-semibold">
                  Request A Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
