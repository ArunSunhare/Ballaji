"use client";

import React, { useState, useEffect } from 'react';
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";
import { Footer } from "@/app/componets/footer";

// ─── FOUNDER DATA ────────────────────────────────────────────────────────────
const CHAIRMAN = {
  name: "Shri Vinod Kumar Bindal Ji",
//  title: "Chairman",
  image: "assets/IMG-20260219-WA0008.jpg.jpeg",
  tagline: "Words are not enough to write about Shri Vinod Kumar Bindal ji",
  bio1: "Shri Vinod Kumar Bindal is a true philanthropist and a successful practicing Chartered Accountant qualified in the year 1978 and practicing for the last 4 decades. He was a merit rank holder in the graduation and chartered accountancy examinations besides holding one of the 2 top positions in his class examinations in his entire schooling.",
  bio2: "He is an optimistic, nature lover, having strong belief in the Almighty God. He really takes care of trees, plants and green cover around. He believes in taking every step to conserve the natural resources. He has been taking every possible step to assist to generate green electricity from Solar energy. He is a social worker who always helps the needy and poor people.",
  bio3: "He has done many efforts to serve the society by initiating building 'Shri Hanuman Balaji Mandir' at Vivek Vihar, New Delhi in the year 1996. He also laid the foundation of 'Shri Ram Bhakht Sewa Nyas Dharamshala' at Mehndipur Balaji, Rajasthan in the year 2003. He was a Treasurer of Shyam Lal College Shahdra Delhi for many years, and a trustee of Geeta Bal Bharti School, also serving as Vice Chairman of its managing committee.",
  awards: [
    { label: "PAUL HARRIS FELLOW", body: "Rotary Foundation of Rotary International" },
    { label: "Governor's Gratitude", body: "Token of Recognition 2014-15, Rotary Club" },
    { label: "President's Diamond Award", body: "Rotary Club – Silver Jubilee Year 2012-13" },
    { label: "Certificate of Honor", body: "Akal Vidhya Abhiyan by Bharat Lok Shiksha Parishad" },
    { label: "Certificate of Honor", body: "Chitra Aggarwal Dharmarth Aarogyta Shodh Sansthan, 10/11/2004" },
    { label: "Samman from CM Delhi", body: "As Trustee of Agarsen Bhawan Trust, honored by Ms Sheila Dixit on 14/06/2003" },
  ],
  memberships: [
    "Shri Krishna Janmasthan Seva Sansthan, Mathura",
    "Shri Ram Mandir, Vivek Vihar, New Delhi",
    "Agrasen Bhawan Trust, Vivek Vihar, New Delhi",
  ],
  bloodDonation: "Organizing regular blood donation camps at Shri Hanuman Balaji Mandir, Vivek Vihar, New Delhi since 2001.",
};

// ─── AWARD BADGE ──────────────────────────────────────────────────────────────
function AwardBadge({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100 hover:shadow-md transition-shadow">
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div>
        <div className="font-semibold text-gray-800 text-base leading-snug">{label}</div>
        <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function OurFounder() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <TopNavbar />
      <MainNavbar />

      {/* ── BANNER IMAGE ── */}
      <section className="relative w-full overflow-hidden" style={{ height: "580px" }}>
        <img
          src={imgError
            ? "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&h=600&fit=crop&crop=top"
            : CHAIRMAN.image}
          alt={CHAIRMAN.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

        {/* top badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <span className="inline-block text-xs tracking-[0.25em] uppercase bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-full px-5 py-1.5">
            Leadership &amp; Vision
          </span>
        </div>

        {/* bottom name overlay */}
        <div className="absolute bottom-0 inset-x-0 px-8 md:px-16 pb-10">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block bg-orange-600 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full px-5 py-1.5 mb-4 shadow-lg">
              Chairman
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
              {CHAIRMAN.name}
            </h1>
            <p className="text-orange-300 text-lg md:text-xl font-semibold mt-2 drop-shadow">
              {/* {CHAIRMAN.title} */}
            </p>
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ── */}
      <div className="bg-orange-600 py-5 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-lg md:text-xl italic font-medium">
            "{CHAIRMAN.tagline}"
          </p>
        </div>
      </div>

      {/* ── BIO + SIDEBAR ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* LEFT — Bio + Awards */}
            <div className="w-full lg:w-[58%] space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-orange-500 pl-4">
                About the Chairman
              </h2>
              <p className="text-gray-700 leading-relaxed text-[17px]">{CHAIRMAN.bio1}</p>
              <p className="text-gray-700 leading-relaxed text-[17px]">{CHAIRMAN.bio2}</p>
              <p className="text-gray-700 leading-relaxed text-[17px]">{CHAIRMAN.bio3}</p>

              {/* Awards */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
                  <span className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  Awards &amp; Recognitions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CHAIRMAN.awards.map((a, i) => (
                    <AwardBadge key={i} label={a.label} body={a.body} />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="w-full lg:w-[42%] space-y-6">

              {/* Memberships */}
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <h4 className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-4">
                  Memberships
                </h4>
                <ul className="space-y-3">
                  {CHAIRMAN.memberships.map((m, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                      <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blood Donation */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-500 text-xl">🩸</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-red-600">
                    Blood Donation Initiative
                  </span>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">{CHAIRMAN.bloodDonation}</p>
              </div>

              {/* Highlight card */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-6 text-white">
                <div className="text-5xl font-extrabold mb-1">4+</div>
                <div className="text-orange-100 text-sm tracking-widest uppercase mb-3">Decades of Service</div>
                <div className="h-px bg-white/20 mb-3" />
                <p className="text-sm text-orange-100 leading-relaxed">
                  A practicing Chartered Accountant since 1978 — combining professional excellence with a lifetime of social service and community building.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}