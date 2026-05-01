"use client";

import Image from "next/image";
import { Navigation } from "../componets/navbar";
import { Footer } from "../componets/footer";
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 py-12 md:py-16">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/hero.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white md:mb-4 md:text-5xl">
              About Us
            </h1>
            <p className="text-base text-white/90 md:text-xl">
              Shri Hanuman Balaji Charitable Diagnostic Centre – A beacon of hope and selfless service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:py-16">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="space-y-8 p-5 text-base leading-7 text-gray-800 md:space-y-10 md:p-12 md:text-lg md:leading-relaxed lg:p-16">
            {/* Opening Blessing Paragraph */}
            <p className="text-left md:text-justify">
              Under the auspicious aegis and with the kind blessings of the revered great Lord Shri Hanuman Bala ji, the most sacred, pious, selfless server not only of the great Lord Ram ji but also of the entire mankind as per the kind directions of the great Goddess Mata Sita ji and also with the kind forever blessings of the great philanthropist honourable Mahashya Dharam Pal Gulati ji of MDH group, <strong>Shri Hanuman Balaji Mandir Vivek Vihar New Delhi 110095</strong> and <strong>Abhinandan Jan Kalyan Society</strong> has opened and is running a state-of-the-art charitable diagnostic and dialysis centre under the name and style of{" "}
              <strong>Shri Hanuman Balaji Charitable Diagnostic Centre</strong> in its{" "}
              <strong>Yugpurush Mahashia Dharam Pal MDH Charitable Diagnostic Bhawan</strong> at{" "}
              <strong>X-24, Karkardooma Institutional Area, New Delhi 110092</strong>.
            </p>

            {/* Primary Focus */}
            <div className="rounded-r-xl border-l-4 border-orange-600 bg-orange-50 p-5 md:p-8">
              <p className="text-center text-lg font-semibold italic text-orange-800 md:text-xl">
                Our primary focus remains on extending unwavering support to the economically disadvantaged sections of society.
              </p>
            </div>

            {/* Services & Commitment */}
            <p className="text-left md:text-justify">
              At <strong>Shri Hanuman Balaji Charitable Diagnostic Centre</strong>, we take pride in offering a spectrum of high-quality services, each equipped with the latest and most advanced technology. As we progress, our aspiration is to ensure these services are accessible around the clock, 365 days a year.
            </p>

            <p className="text-left md:text-justify">
              Our dedication to delivering subsidized services at direct cost underscores our identity as a <strong>“Real Charitable Centre,”</strong> rooted in a genuine spirit of service rather than mere profit.
            </p>

            {/* Closing Statement */}
            <div className="mt-10 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50 p-6 text-center md:mt-12 md:p-10">
              <p className="text-xl font-bold leading-tight text-orange-700 md:text-2xl">
                Serving Humanity with Devotion, Compassion and Excellence
              </p>
              <p className="mt-3 text-sm text-gray-700 md:mt-4 md:text-base">
                Inspired by Lord Hanuman ji’s selfless seva and the philanthropic vision of Mahashya Dharam Pal Gulati ji
              </p>
            </div>

            {/* Address Card */}
            <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-8">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6 md:col-span-2">
              <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
                Centre Location
              </h3>
              <p className="text-sm leading-7 text-gray-700 md:text-base">
                Plot No. X-24, Karkardooma Institutional Area,<br />
                Near Karkardooma Court Metro Station,<br />
                New Delhi-110092 
              </p>
            </div>
          {/* </div> */}
              {/* <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 md:p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">Managed By</h3>
                <p className="text-sm leading-7 text-gray-700 md:text-base">
                  Shri Hanuman Balaji Mandir Vivek Vihar<br />
                  New Delhi 110095<br />
                  &<br />
                  Abhinandan Jan Kalyan Society
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
