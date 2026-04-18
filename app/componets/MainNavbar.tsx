"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const facilityLinks = [
  { name: "Radiation Therapy", href: "/componets/facilites/pathology" },
  { name: "Radiology", href: "/componets/facilites/ct-scan" },
  { name: "Pathology", href: "/componets/facilites/x-ray" },
  { name: "Dialysis", href: "/componets/facilites/ultrasound" },
  { name: "Pharmacy", href: "/componets/facilites/pharmacy" },
  { name: "F&B", href: "/componets/facilites/fnb" },
];

export function MainNavbar() {
  const router = useRouter();
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isFindTestOpen, setIsFindTestOpen] = useState(false);
  const [isHealthPackagesOpen, setIsHealthPackagesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const [popularTests, setPopularTests] = useState<any[]>([]);
  const [popularLoading, setPopularLoading] = useState(false);
  const [popularError, setPopularError] = useState("");
  const [popularSearch, setPopularSearch] = useState("");

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
    const loadPopular = async () => {
      if (!isFindTestOpen) return;
      if (popularLoading) return;
      if (popularTests.length > 0) return;

      try {
        setPopularError("");
        setPopularLoading(true);

        const res = await fetch("/api/popular-investigation");
        const json = await res.json();

        if (!res.ok || !json?.success) {
          setPopularError(json?.message || "Failed to load tests");
          setPopularTests([]);
          return;
        }

        let parsed = json?.data;
        if (typeof parsed === "string") {
          parsed = JSON.parse(parsed);
        }

        const list = Array.isArray(parsed?.data) ? parsed.data : [];
        setPopularTests(list);
      } catch {
        setPopularError("Failed to load tests");
        setPopularTests([]);
      } finally {
        setPopularLoading(false);
      }
    };

    loadPopular();
  }, [isFindTestOpen, popularLoading, popularTests.length]);

  useEffect(() => {
    if (!isFindTestOpen) {
      setPopularSearch("");
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
          setHealthPackagesError(json?.message || "Failed to load packages");
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
        setHealthPackagesError("Failed to load packages");
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

  const filteredPopularTests = popularTests.filter((item: any) => {
    const query = popularSearch.trim().toLowerCase();
    if (!query) return true;
    return (
      item.ItemName?.toLowerCase().includes(query) ||
      item.Item_ID?.toLowerCase().includes(query)
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

  return (
    <div className="bg-white hidden lg:block">
      <nav className="w-full px-3 sm:px-4 lg:px-10 h-12 flex items-center justify-center gap-8 text-white font-medium">
        <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
        <a href="/about-us" className="text-gray-700 hover:text-orange-600 transition-colors">About Us</a>
        <a href="/our-founder" className="text-gray-700 hover:text-orange-600 transition-colors">Our Founder</a>
        <a href="/#doctors" className="text-gray-700 hover:text-orange-600 transition-colors">Doctors</a>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsFacilitiesOpen, () => {
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
            Facilities
          </a>
          {isFacilitiesOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-36 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsFacilitiesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsFacilitiesOpen)}
            >
              {facilityLinks.map((facility) => (
                <button
                  key={facility.name}
                  type="button"
                  onClick={() => {
                    setIsFacilitiesOpen(false);
                    router.push(facility.href);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {facility.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">Gallery</a>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsFindTestOpen, () => {
            setIsFacilitiesOpen(false);
            setIsHealthPackagesOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsFindTestOpen)}
        >
          <a 
            href="#find-test" 
            className={`transition-colors ${
              isFindTestOpen 
                ? "text-orange-600" 
                : "text-gray-700 hover:text-orange-200"
            }`}
          >
            Find A Test
          </a>
          {isFindTestOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-72 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsFindTestOpen)}
              onMouseLeave={() => handleMouseLeave(setIsFindTestOpen)}
            >
              {popularLoading ? (
                <div className="px-4 py-2 text-gray-500 text-sm">Loading...</div>
              ) : popularError ? (
                <div className="px-4 py-2 text-red-600 text-sm">{popularError}</div>
              ) : popularTests.length === 0 ? (
                <div className="px-4 py-2 text-gray-500 text-sm">No tests found</div>
              ) : (
                <div className="px-3 pb-2">
                  <div className="mb-2">
                    <input
                      type="text"
                      value={popularSearch}
                      onChange={(e) => setPopularSearch(e.target.value)}
                      placeholder="Search tests..."
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-auto">
                    {filteredPopularTests.length === 0 ? (
                      <div className="px-2 py-2 text-gray-500 text-sm">No matching tests found</div>
                    ) : (
                      filteredPopularTests.slice(0, 10).map((item: any) => (
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
            setIsFacilitiesOpen(false);
            setIsFindTestOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsHealthPackagesOpen)}
        >
          <a 
            href="#health-packages" 
            className={`transition-colors ${
              isHealthPackagesOpen 
                ? "text-orange-600" 
                : "text-gray-700 hover:text-orange-200"
            }`}
          >
            Health Packages
          </a>
          {isHealthPackagesOpen && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-72 z-50 mt-0"
              onMouseEnter={() => handleMouseEnter(setIsHealthPackagesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsHealthPackagesOpen)}
            >
              {healthPackagesLoading ? (
                <div className="px-4 py-2 text-gray-500 text-sm">Loading...</div>
              ) : healthPackagesError ? (
                <div className="px-4 py-2 text-red-600 text-sm">{healthPackagesError}</div>
              ) : healthPackages.length === 0 ? (
                <div className="px-4 py-2 text-gray-500 text-sm">No packages found</div>
              ) : (
                <div className="px-3 pb-2">
                  <div className="mb-2">
                    <input
                      type="text"
                      value={healthPackagesSearch}
                      onChange={(e) => setHealthPackagesSearch(e.target.value)}
                      placeholder="Search packages..."
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="max-h-64 overflow-auto">
                    {filteredHealthPackages.length === 0 ? (
                      <div className="px-2 py-2 text-gray-500 text-sm">No matching packages found</div>
                    ) : (
                      filteredHealthPackages.slice(0, 10).map((pkg: any) => (
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
        <a href="/our_locations" className="text-gray-700 hover:text-orange-600 transition-colors">Our Location</a>
        {/* <a href="/feedback" className="text-gray-700 hover:text-orange-600 transition-colors">last Feedback</a> */}
        <a href="/getfeedback" className="text-gray-700 hover:text-orange-600 transition-colors">Feedback</a>
        <a href="/contact_us" className="text-gray-700 hover:text-orange-600 transition-colors">Contact Us</a>       
      </nav>
    </div>
  );
}
