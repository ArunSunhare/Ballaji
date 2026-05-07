"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, FileText, Menu, X, ChevronRight, User, LogOut, Download } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo_main.png";
import personLeft from "@/public/assets/person-left.png";
import personRight from "@/public/assets/person-right.png";
import { useCart } from "@/app/context/CartContext";
import { LoginModal } from "./LoginModal";
import { Search_Bar } from "./search_bar";
import { motion, AnimatePresence } from "framer-motion"; 
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/app/i18n/LanguageContext";

type UserType = {
  name: string;
  mobile: string;
};

export function TopNavbar() {
  const { t } = useLanguage();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const { items, openCart } = useCart();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const getInitial = (name: string) => name?.charAt(0).toUpperCase() || "U";

  const getDisplayName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return "";
    const first = trimmed.split(/\s+/)[0];
    return first || trimmed;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsMenuOpen(false);
    router.push("/");
  };

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about-us" },
    { name: t.nav.founder, href: "/our-founder" },
    { name: t.nav.doctors, href: "/#doctors" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.findTest, href: "/investigations" },
    { name: t.nav.facilities, href: "/#facilities" },
    { name: t.nav.healthPackages, href: "/health-packages" }, 
    { name: t.nav.location, href: "/our_locations" },
    { name: t.nav.feedback, href: "/feedback" },
    { name: t.nav.contact, href: "/contact_us" }
  ];

  // Animation Variants for Links
  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* --- MAIN NAVBAR (CSS Unchanged) --- */}
      <div className="bg-white border-b sticky top-0 z-50 w-full overflow-x-hidden shadow-sm">
        <div className="w-full px-3 sm:px-4 lg:px-10 h-20 flex items-center justify-between gap-3">
          <a href="/" className="flex w-full items-center justify-between gap-2 md:w-auto md:flex-shrink-0 md:justify-start">
           <Image src={logo} alt="Logo" className="h-12 sm:h-15 w-auto" priority />
            
          <div className="flex items-center gap-2">
           <Image src={personLeft} alt="Person Left" className="h-12 w-12 sm:h-18 sm:w-18 rounded-full border border-gray-100" priority />
            <span className="text-center text-[8px] sm:text-xs font-bold leading-tight text-orange-600 whitespace-normal break-words max-w-[140px] sm:max-w-none md:text-left">
              {t.nav.inspirer}<br />
              {t.nav.inspirerName} <br />
              {t.nav.inspirerLast}
            </span>
            </div>
            <Image src={personRight} alt="Person Right" className="h-12 w-12 sm:h-18 sm:w-18 rounded-full border border-gray-100" priority />
          </a>

          <div className="hidden lg:block flex-1 max-w-lg">
            <Search_Bar />
          </div>

          <div className="hidden min-[481px]:flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0">
            <LanguageToggle />

            <a
              href="https://shbcdc.in/online_his/design/online_lab/default.aspx"
              target="_blank"
              className="hidden lg:flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm font-semibold">{t.nav.downloadReports}</span>
            </a>

            <button onClick={openCart} className="relative p-1.5 sm:p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </button>

            <div className="hidden lg:block">
              {user ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => router.push("/patient_profile")} className="w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">
                    {getInitial(user.name)}
                  </button>
                  <span className="hidden lg:block text-sm font-semibold text-gray-700 max-w-[100px] truncate">{getDisplayName(user.name)}</span>
                </div>
              ) : (
                <button onClick={() => setShowLoginModal(true)} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-all">
                  {t.nav.login}
                </button>
              )}
            </div>

            <button className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden max-[480px]:block bg-white border-b sticky top-20 z-40 w-full px-3 py-2.5">
        <div className="flex items-center justify-end gap-3">
          <LanguageToggle />

          <button onClick={openCart} className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {items.length}
              </span>
            )}
          </button>

          <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* --- ANIMATED MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Smooth Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-[340px] bg-white shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <Image src={logo} alt="Logo" className="h-10 w-auto" />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <X className="w-7 h-7 text-gray-600" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-8">
                {/* Nav Links with Stagger Animation */}
                <nav className="space-y-1">
                  <p className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t.nav.mainMenu}</p>
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.name}
                      custom={i}
                      initial="closed"
                      animate="open"
                      variants={linkVariants as any}
                      onClick={() => { router.push(item.href); setIsMenuOpen(false); }}
                      className="flex items-center justify-between w-full p-4 text-gray-800 font-bold hover:bg-orange-50 rounded-2xl group"
                    >
                      {item.name}
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </nav>

                {/* Patient Portal Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-100"
                >
                  <p className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">{t.nav.patientPortal}</p>
                  <div className="grid gap-4">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://shbcdc.in/online_his/design/online_lab/default.aspx"
                      target="_blank"
                      className="flex items-center gap-4 w-full p-4 bg-orange-50 text-orange-700 rounded-3xl font-bold shadow-sm border border-orange-100"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
                        <FileText className="w-7 h-7 text-orange-600" />
                      </div>
                      <span className="text-lg">{t.nav.viewReports}</span>
                    </motion.a>

                    {user ? (
                      <div className="space-y-4">
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { router.push("/patient_profile"); setIsMenuOpen(false); }}
                          className="flex items-center gap-4 w-full p-4 bg-gray-50 rounded-3xl font-bold border border-gray-100 shadow-sm"
                        >
                          <div className="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-orange-200">
                            {getInitial(user.name)}
                          </div>
                          <div className="text-left">
                            <p className="text-xs text-gray-400 font-medium tracking-tight">{t.nav.loggedInAs}</p>
                            <p className="text-gray-800 truncate max-w-[150px]">{user.name}</p>
                          </div>
                        </motion.button>
                        <button onClick={logout} className="w-full py-4 text-red-500 font-bold flex items-center justify-center gap-2 hover:bg-red-50 rounded-2xl transition-all">
                          <LogOut className="w-5 h-5" /> {t.nav.logout}
                        </button>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { setIsMenuOpen(false); setShowLoginModal(true); }}
                        className="flex items-center gap-4 w-full p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl font-bold shadow-xl shadow-orange-200"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner">
                          <User className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-lg">{t.nav.loginSignup}</span>
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          const storedUser = localStorage.getItem("user");
          if (storedUser) setUser(JSON.parse(storedUser));
          setShowLoginModal(false);
        }}
      />
    </>
  );
}
