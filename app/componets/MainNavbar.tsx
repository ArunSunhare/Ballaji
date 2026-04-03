"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function MainNavbar() {
  const router = useRouter();
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isFindTestOpen, setIsFindTestOpen] = useState(false);
  const [isHealthPackagesOpen, setIsHealthPackagesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const [popularTests, setPopularTests] = useState<any[]>([]);
  const [popularLoading, setPopularLoading] = useState(false);
  const [popularError, setPopularError] = useState("");

  const [healthPackages, setHealthPackages] = useState<any[]>([]);
  const [healthPackagesLoading, setHealthPackagesLoading] = useState(false);
  const [healthPackagesError, setHealthPackagesError] = useState("");

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

  return (
    <div className="bg-white hidden lg:block">
      <nav className="w-full px-3 sm:px-4 lg:px-10 h-12 flex items-center justify-center gap-8 text-white font-medium">
        <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
        <a href="/about-us" className="text-gray-700 hover:text-orange-600 transition-colors">About Us</a>
        <a href="/our-founder" className="text-gray-700 hover:text-orange-600 transition-colors">Our Founder</a>
        <a href="#doctors" className="text-gray-700 hover:text-orange-600 transition-colors">Doctors</a>
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter(setIsFacilitiesOpen, () => {
            setIsFindTestOpen(false);
            setIsHealthPackagesOpen(false);
          })}
          onMouseLeave={() => handleMouseLeave(setIsFacilitiesOpen)}
        >
          <a 
            href="#facilities" 
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
              <a href="#pathology" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Radiation Therapy
</a>
              <a href="#mri" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Radiology</a>
              <a href="#pet-ct" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Pathology</a>
              <a href="#ct-scan" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Dialysis</a>
              <a href="#x-ray" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">Pharmacy</a>
              <a href="#ultrasound" className="block px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors">F &B
</a>
             
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
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-36 z-50 mt-0"
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
                <div className="max-h-64 overflow-auto">
                  {popularTests.slice(0, 10).map((item: any) => (
                    <button
                      key={item.Item_ID}
                      type="button"
                      onClick={() => {
                        setIsFindTestOpen(false);
                        router.push(`/tests/${slugify(item.ItemName)}?id=${encodeURIComponent(item.Item_ID || "")}`);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm"
                      title={item.ItemName}
                    >
                      <span className="block truncate">{item.ItemName}</span>
                    </button>
                  ))}
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
              className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-2 w-36 z-50 mt-0"
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
                <div className="max-h-64 overflow-auto">
                  {healthPackages.slice(0, 10).map((pkg: any) => (
                    <button
                      key={pkg.itemID || pkg.ItemName}
                      type="button"
                      onClick={() => {
                        setIsHealthPackagesOpen(false);
                        router.push(`/health-packages/${slugify(pkg.ItemName)}?id=${encodeURIComponent(pkg.itemID || "")}`);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors text-sm"
                      title={pkg.ItemName}
                    >
                      <span className="block truncate">{pkg.ItemName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <a href="/our_locations" className="text-gray-700 hover:text-orange-600 transition-colors">Our Location</a>
        <a href="/feedback" className="text-gray-700 hover:text-orange-600 transition-colors">Feedback</a>
        <a href="/contact_us" className="text-gray-700 hover:text-orange-600 transition-colors">Contact Us</a>
       

      </nav>
    </div>
  );
}
