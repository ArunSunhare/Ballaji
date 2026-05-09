"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doctorsData, doctorSpecialties, slugifySpecialty } from "@/app/data/doctors";
import { useLanguage } from "@/app/i18n/LanguageContext";

const facilityLinks = [
  { labelKey: "radiationTherapy", href: "/componets/facilites/pathology" },
  { labelKey: "radiology", href: "/componets/facilites/ct-scan" },
  { labelKey: "pathology", href: "/componets/facilites/x-ray" },
  { labelKey: "dialysis", href: "/componets/facilites/ultrasound" },
  { labelKey: "pharmacy", href: "/componets/facilites/pharmacy" },
  { labelKey: "fnb", href: "/componets/facilites/fnb" },
] as const;

export function MainNavbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isFindTestOpen, setIsFindTestOpen] = useState(false);
  const [isHealthPackagesOpen, setIsHealthPackagesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const [allTests, setAllTests] = useState<any[]>([]);
  const [testsLoading, setTestsLoading] = useState(false);
  const [testsError, setTestsError] = useState("");
  const [testsSearch, setTestsSearch] = useState("");
  const [testsLoaded, setTestsLoaded] = useState(false);

  const [healthPackages, setHealthPackages] = useState<any[]>([]);
  const [healthPackagesLoading, setHealthPackagesLoading] = useState(false);
  const [healthPackagesError, setHealthPackagesError] = useState("");
  const [healthPackagesSearch, setHealthPackagesSearch] = useState("");

  const handleMouseEnter = (setter: (value: boolean) => void, closeOthers?: () => void) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    // Close other dropdowns when opening a new one
    if (closeOthers) {
      closeOthers();
    }
    setter(true);
  };

  const handleMouseLeave = (setter: (value: boolean) => void) => {
    const timeout = setTimeout(() => {
      setter(false);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const slugify = (text: string) =>
    (text || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  useEffect(() => {
    const loadTests = async () => {
      if (!isFindTestOpen) return;
      if (testsLoading) return;
      if (testsLoaded) return;

      try {
        setTestsError("");
        setTestsLoading(true);

        const params = new URLSearchParams({
          page: "1",
          limit: "1000",
        });

        const res = await fetch(`/api/get-investigation?${params}`);
        const json = await res.json();

        if (!res.ok || json?.status !== "Success") {
          setTestsError(json?.message || t.common.noTestsFound);
          setAllTests([]);
          return;
        }

        setAllTests(Array.isArray(json.data) ? json.data : []);
      } catch {
        setTestsError(t.common.noTestsFound);
        setAllTests([]);
      } finally {
        setTestsLoaded(true);
        setTestsLoading(false);
      }
    };

    loadTests();
  }, [isFindTestOpen, testsLoaded, testsLoading, t.common.noTestsFound]);

  useEffect(() => {
    if (!isFindTestOpen) {
      setTestsSearch("");
    }
  }, [isFindTestOpen]);

  useEffect(() => {
    const loadHealthPackages = async () => {
      if (!isHealthPackagesOpen) return;
      if (healthPackagesLoading) return;
      if (healthPackages.length > 0) return;

      try {
        setHealthPackagesError("");
        setHealthPackagesLoading(true);

        const res = await fetch("/api/get-health-packages");
        const json = await res.json();

        if (!res.ok) {
          setHealthPackagesError(json?.message || t.common.noPackagesFound);
          setHealthPackages([]);
          return;
        }

        let parsed;
        if (json?.d) {
          parsed = typeof json.d === "string" ? JSON.parse(json.d) : json.d;
        } else if (json?.raw && typeof json.raw === "string") {
          parsed = JSON.parse(json.raw);
        } else {
          parsed = json;
        }

        const list =
          parsed?.status === "Success" && Array.isArray(parsed?.data)
            ? parsed.data
            : Array.isArray(parsed?.data)
              ? parsed.data
              : [];

        setHealthPackages(list);
      } catch {
        setHealthPackagesError(t.common.noPackagesFound);
        setHealthPackages([]);
      } finally {
        setHealthPackagesLoading(false);
      }
    };

    loadHealthPackages();
  }, [isHealthPackagesOpen, healthPackagesLoading, healthPackages.length]);

  useEffect(() => {
    if (!isHealthPackagesOpen) {
      setHealthPackagesSearch("");
    }
  }, [isHealthPackagesOpen]);

  const filteredTests = allTests.filter((item: any) => {
    const query = testsSearch.trim().toLowerCase();
    if (!query) return true;
    return (
      item.ItemName?.toLowerCase().includes(query) ||
      item.Item_ID?.toLowerCase().includes(query) ||
      item.ItemCode?.toLowerCase().includes(query)
    );
  });

  const filteredHealthPackages = healthPackages.filter((pkg: any) => {
    const query = healthPackagesSearch.trim().toLowerCase();
    if (!query) return true;
    return (
      pkg.ItemName?.toLowerCase().includes(query) ||
      pkg.itemID?.toLowerCase().includes(query)
    );
  });

  const getSpecialtyLabel = (specialty: string) => {
    const doctor = doctorsData.find((item) => item.specialization === specialty);
    return t.home.doctorCards.find((item) => item.id === doctor?.id)?.specialization ?? specialty;
  };

  return (
    <div className="bg-white hidden lg:block">
      <nav className="w-full px-3 sm:px-4 lg:px-6 min-[1207px]:px-10 h-12 flex items-center justify-around gap-3 min-[1207px]:gap-8 whitespace-nowrap text-[13px] min-[1207px]:text-base text-white font-medium">
        <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.home}</a>
        <a href="/about-us" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.about}</a>
        <a href="/our-founder" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.founder}</a>
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsDoctorsOpen, () => {
            setIsFacilitiesOpen(false);
            setIsFindTestOpen(false);
            setIsHealthPackagesOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsDoctorsOpen)}
        >
          <a
            href="/#doctors"
            className={`transition-colors ${
              isDoctorsOpen
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            {t.nav.doctors}
          </a>
          {isDoctorsOpen && (
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-52 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsDoctorsOpen)}
              onMouseLeave={() => handleMouseLeave(setIsDoctorsOpen)}
            >
              <div className="max-h-72 overflow-auto">
                {doctorSpecialties.map((specialty) => (
                  <button
                    key={specialty}
                    type="button"
                    onClick={() => {
                      setIsDoctorsOpen(false);
                      router.push(`/doctors/${slugifySpecialty(specialty)}`);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:text-orange-600 transition-colors whitespace-normal"
                  >
                    {getSpecialtyLabel(specialty)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsFacilitiesOpen, () => {
            setIsDoctorsOpen(false);
            setIsFindTestOpen(false);
            setIsHealthPackagesOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsFacilitiesOpen)}
        >
          <a 
            href="/#facilities" 
            className={`transition-colors ${
              isFacilitiesOpen 
                ? "text-orange-600" 
                : "text-gray-700 hover:text-orange-200"
            }`}
          >
            {t.nav.facilities}
          </a>
          {isFacilitiesOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-36 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsFacilitiesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsFacilitiesOpen)}
            >
              {facilityLinks.map((facility) => (
                <button
                  key={facility.href}
                  type="button"
                  onClick={() => {
                    setIsFacilitiesOpen(false);
                    router.push(facility.href);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:text-orange-600 transition-colors whitespace-normal pr-6">
                  {t.home[facility.labelKey]}
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.gallery}</a>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsFindTestOpen, () => {
            setIsDoctorsOpen(false);
            setIsFacilitiesOpen(false);
            setIsHealthPackagesOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsFindTestOpen)}
        >
          <a 
            href="/investigations" 
            className={`transition-colors ${
              isFindTestOpen 
                ? "text-orange-600" 
                : "text-gray-700 hover:text-orange-200"
            }`}
          >
            {t.nav.findTest}
          </a>
          {isFindTestOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-72 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsFindTestOpen)}
              onMouseLeave={() => handleMouseLeave(setIsFindTestOpen)}
            >
              {testsLoading ? (
                <div className="px-4 py-2 text-gray-500 text-sm">{t.common.loading}</div>
              ) : testsError ? (
                <div className="px-4 py-2 text-red-600 text-sm">{testsError}</div>
              ) : allTests.length === 0 ? (
                <div className="px-4 py-2 text-gray-500 text-sm">{t.common.noTestsFound}</div>
              ) : (
                <div className="px-3 pb-2">
                  <div className="mb-2">
                    <input
                      type="text"
                      value={testsSearch}
                      onChange={(e) => setTestsSearch(e.target.value)}
                      placeholder={t.nav.searchTests}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-auto">
                    {filteredTests.length === 0 ? (
                      <div className="px-2 py-2 text-gray-500 text-sm">{t.common.noMatchingTests}</div>
                    ) : (
                      filteredTests.map((item: any) => (
                        <button
                          key={item.Item_ID}
                          type="button"
                          onClick={() => {
                            setIsFindTestOpen(false);
                            router.push(`/tests/${slugify(item.ItemName)}?id=${encodeURIComponent(item.Item_ID || "")}`);
                          }}
                          className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm"
                          title={item.ItemName}
                        >
                          <span className="block truncate">{item.ItemName}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsHealthPackagesOpen, () => {
            setIsDoctorsOpen(false);
            setIsFacilitiesOpen(false);
            setIsFindTestOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsHealthPackagesOpen)}
        >
          <a 
            href="/health-packages" 
            className={`transition-colors ${
              isHealthPackagesOpen 
                ? "text-orange-600" 
                : "text-gray-700 hover:text-orange-200"
            }`}
          >
            {t.nav.healthPackages}
          </a>
          {isHealthPackagesOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-72 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsHealthPackagesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsHealthPackagesOpen)}
            >
              {healthPackagesLoading ? (
                <div className="px-4 py-2 text-gray-500 text-sm">{t.common.loading}</div>
              ) : healthPackagesError ? (
                <div className="px-4 py-2 text-red-600 text-sm">{healthPackagesError}</div>
              ) : healthPackages.length === 0 ? (
                <div className="px-4 py-2 text-gray-500 text-sm">{t.common.noPackagesFound}</div>
              ) : (
                <div className="px-3 pb-2">
                  <div className="mb-2">
                    <input
                      type="text"
                      value={healthPackagesSearch}
                      onChange={(e) => setHealthPackagesSearch(e.target.value)}
                      placeholder={t.nav.searchPackages}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-auto">
                    {filteredHealthPackages.length === 0 ? (
                      <div className="px-2 py-2 text-gray-500 text-sm">{t.common.noMatchingPackages}</div>
                    ) : (
                      filteredHealthPackages.map((pkg: any) => (
                        <button
                          key={pkg.itemID || pkg.ItemName}
                          type="button"
                          onClick={() => {
                            setIsHealthPackagesOpen(false);
                            router.push(`/health-packages/${slugify(pkg.ItemName)}?id=${encodeURIComponent(pkg.itemID || "")}`);
                          }}
                          className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm"
                          title={pkg.ItemName}
                        >
                          <span className="block truncate">{pkg.ItemName}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <a href="/our_locations" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.location}</a>
        {/* <a href="/feedback" className="text-gray-700 hover:text-orange-600 transition-colors">last Feedback</a> */}
        <a href="/getfeedback" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.feedback}</a>
        <a href="/contact_us" className="text-gray-700 hover:text-orange-600 transition-colors">{t.nav.contact}</a>       
      </nav>
    </div>
  );
}
