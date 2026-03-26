"use client";

import React, { useState, useEffect } from 'react';
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";
import { Footer } from "@/app/componets/footer";

// ─── FOUNDER DATA (from Content_Website.docx) ────────────────────────────────
const CHAIRMAN = {
  name: "Shri Vinod Kumar Bindal",
  title: "Chairman",
  // Replace with your actual image path: e.g. "/images/vinod-kumar-bindal.jpg"
  image: "assets/IMG-20260219-WA0008.jpg.jpeg",
  tagline: "Words are not enough to write about Shri Vinod Kumar Bindal ji",
  bio1:
    "Shri Vinod Kumar Bindal is a true philanthropist and a successful practicing Chartered Accountant qualified in the year 1978 and practicing for the last 4 decades. He was a merit rank holder in the graduation and chartered accountancy examinations besides holding one of the 2 top positions in his class examinations in his entire schooling.",
  bio2:
    "He is an optimistic, nature lover, having strong belief in the Almighty God. He really takes care of trees, plants and green cover around. He believes in taking every step to conserve the natural resources. He has been taking every possible step to assist to generate green electricity from Solar energy. He is a social worker who always helps the needy and poor people. A fair decision maker who always appreciate colleagues for their good work. A One man army making endless efforts to make his dreams for social causes come true.",
  bio3:
    "He has done many efforts to serve the society by initiating building 'Shri Hanuman Balaji Mandir' at Vivek Vihar, New Delhi in the year 1996. He also laid the foundation of 'Shri Ram Bhakht Sewa Nyas Dharamshala' at Mehndipur Balaji, Rajasthan in the year 2003. He was a Treasurer of Shyam Lal College Shahdra Delhi for many years, and a trustee of Geeta Bal Bharti School, also serving as Vice Chairman of its managing committee. He has been assisting various NGOs to carry on their charitable and social activities for development of needy and works with a sole motive of meeting the needs of poor and their upliftment.",
  awards: [
    { label: "PAUL HARRIS FELLOW", body: "Rotary Foundation of Rotary International" },
    { label: "Governor's Gratitude", body: "Token of Recognition 2014-15, Rotary Club" },
    { label: "President's Diamond Award", body: "Rotary Club – Silver Jubilee Year 2012-13" },
    { label: "Certificate of Honor", body: "Akal Vidhya Abhiyan by Bharat Lok Shiksha Parishad" },
    { label: "Certificate of Honor", body: "Chitra Aggarwal Dharmarth Aarogyta Shodh Sansthan, 10/11/2004" },
    {
      label: "Samman from CM Delhi",
      body: "As Trustee of Agarsen Bhawan Trust, honored by Ms Sheila Dixit on 14/06/2003",
    },
  ],
  memberships: [
    "Shri Krishna Janmasthan Seva Sansthan, Mathura",
    "Shri Ram Mandir, Vivek Vihar, New Delhi",
    "Agrasen Bhawan Trust, Vivek Vihar, New Delhi",
  ],
  bloodDonation:
    "Organizing regular blood donation camps at Shri Hanuman Balaji Mandir, Vivek Vihar, New Delhi since 2001.",
};

const RADIOLOGIST = {
  name: "Dr. Priyanka",
  title: "Consultant Radiologist",
  qualifications: "MBBS, DMRD, DNB",
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face",
  tagline: "A dynamic radiologist bridging expertise with compassion",
  bio1:
    "Dr. Priyanka is a dynamic young radiologist with a rich professional experience of more than 11 years in the field of ultrasound, CT and MRI. She serves as a Senior Consultant and Head of Department of Radiology at Shri Hanuman Balaji Charitable Diagnostic Centre.",
  bio2:
    "She excels in routine diagnostic as well as musculoskeletal cross-sectional studies with special Obstetric and color doppler and breast ultrasound scans. She is skilled in USG guided procedures and biopsies. Her key areas of interest are Neuroradiology and ultrasound and MR Elastography for liver, breast, thyroid, pregnant cervix and musculoskeletal diseases.",
  expertise: [
    "Ultrasound & Doppler",
    "CT & MRI Diagnostics",
    "Neuroradiology",
    "Musculoskeletal Studies",
    "MR Elastography",
    "USG Guided Procedures",
  ],
  prevExperience: [
    "Bara Hindu Rao Hospital – Largest Municipal Hospital, New Delhi",
    "Guru Teg Bahadur Hospital",
    "Deepak Memorial Kailash Hospital",
    "Mata Chanan Devi Hospital",
    "SRL Diagnostics",
    "FOCUS Diagnostics",
  ],
};

// ─── STAT COUNTER ─────────────────────────────────────────────────────────────
function StatCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-orange-100 mt-1 text-sm tracking-widest uppercase">{label}</div>
    </div>
  );
}

// ─── AWARD BADGE ──────────────────────────────────────────────────────────────
function AwardBadge({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-4 border border-orange-100 hover:shadow-md transition-shadow">
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div>
        <div className="font-semibold text-gray-800 text-sm">{label}</div>
        <div className="text-gray-500 text-xs mt-0.5">{body}</div>
      </div>
    </div>
  );
}

// ─── SECTION DIVIDER ──────────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      <div className="w-3 h-3 rounded-full bg-orange-500" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
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

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-orange-500 text-white overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-10 -right-10 w-56 h-16 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative container mx-auto px-4 py-14 md:py-16 text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-4">
            Leadership &amp; Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Our Founders
          </h1>
          <p className="text-base md:text-lg text-orange-100 max-w-xl mx-auto">
            The driving forces behind Shri Hanuman Balaji Charitable Diagnostic Centre — united by
            a mission to provide affordable, world-class healthcare to every patient.
          </p>
        </div>
      </section>

      {/* ── CHAIRMAN SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* top badge */}
          <div className="flex justify-center mb-10">
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold tracking-widest uppercase rounded-full px-5 py-2">
              Chairman &amp; Founding Philanthropist
            </span>
          </div>

          {/* photo + name card */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* LEFT – Photo */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-xs">
                {/* orange accent blob */}
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-lg" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100">
                  <img
                    src={imgError ? "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&crop=face" : CHAIRMAN.image}
                    alt={CHAIRMAN.name}
                    onError={() => setImgError(true)}
                    className="w-full object-cover object-top"
                    style={{ maxHeight: 420 }}
                  />
                  {/* name overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <h2 className="text-white text-xl font-bold leading-tight">{CHAIRMAN.name}</h2>
                    <p className="text-orange-300 text-sm">{CHAIRMAN.title}</p>
                  </div>
                </div>
              </div>

              {/* memberships */}
              <div className="mt-8 w-full max-w-xs">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Memberships
                </h4>
                <ul className="space-y-2">
                  {CHAIRMAN.memberships.map((m, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* blood donation highlight */}
              <div className="mt-6 max-w-xs bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-red-500 text-lg">🩸</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Blood Donation
                  </span>
                </div>
                <p className="text-xs text-gray-600">{CHAIRMAN.bloodDonation}</p>
              </div>
            </div>

            {/* RIGHT – Bio & Awards */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <blockquote className="text-lg italic text-orange-700 font-medium border-l-4 border-orange-500 pl-4 mb-5">
                  "{CHAIRMAN.tagline}"
                </blockquote>
                <p className="text-gray-700 leading-relaxed mb-4">{CHAIRMAN.bio1}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{CHAIRMAN.bio2}</p>
                <p className="text-gray-700 leading-relaxed">{CHAIRMAN.bio3}</p>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  Awards &amp; Recognitions
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {CHAIRMAN.awards.map((a, i) => (
                    <AwardBadge key={i} label={a.label} body={a.body} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── RADIOLOGIST SECTION ── */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center mb-10">
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold tracking-widest uppercase rounded-full px-5 py-2">
              Senior Consultant &amp; Head of Radiology
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* LEFT – Bio */}
            <div className="lg:col-span-3 space-y-8 lg:order-1">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
                  {RADIOLOGIST.name}
                </h2>
                <p className="text-orange-600 font-semibold mb-1">{RADIOLOGIST.title}</p>
                <p className="text-gray-400 text-sm mb-5">{RADIOLOGIST.qualifications}</p>
                <blockquote className="text-lg italic text-orange-700 font-medium border-l-4 border-orange-500 pl-4 mb-5">
                  "{RADIOLOGIST.tagline}"
                </blockquote>
                <p className="text-gray-700 leading-relaxed mb-4">{RADIOLOGIST.bio1}</p>
                <p className="text-gray-700 leading-relaxed">{RADIOLOGIST.bio2}</p>
              </div>

              {/* Expertise tags */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {RADIOLOGIST.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Previous experience */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Previous Experience
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {RADIOLOGIST.prevExperience.map((exp, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-4 py-2.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT – Photo */}
            <div className="lg:col-span-2 flex flex-col items-center lg:order-2">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-lg" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-100">
                  <img
                    src={RADIOLOGIST.image}
                    alt={RADIOLOGIST.name}
                    className="w-full h-96 object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <h2 className="text-white text-xl font-bold">{RADIOLOGIST.name}</h2>
                    <p className="text-orange-300 text-sm">{RADIOLOGIST.title}</p>
                    <p className="text-orange-200 text-xs">{RADIOLOGIST.qualifications}</p>
                  </div>
                </div>
              </div>

              {/* 11+ years highlight */}
              <div className="mt-8 w-full max-w-xs bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 shadow-xl text-center">
                <div className="text-5xl font-extrabold mb-1">11+</div>
                <div className="text-orange-100 text-sm tracking-widest uppercase">Years of Experience</div>
                <div className="mt-3 h-px bg-white/20 w-1/2 mx-auto" />
                <p className="mt-3 text-xs text-orange-100 leading-relaxed">
                  USG · CT · MRI &amp; advanced imaging across leading hospitals &amp; diagnostic labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter end={4} suffix="+" label="Decades of Service" />
            <StatCounter end={11} suffix="+" label="Years Radiology" />
            <StatCounter end={8} suffix="" label="Dialysis Beds" />
            <StatCounter end={32} suffix="" label="Dialysis / Day" />
          </div>
        </div>
      </section>

      {/* ── VISION QUOTE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Serving the Community with Heart
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Shri Hanuman Balaji Charitable Diagnostic Centre was founded on the belief that
            world-class diagnostics should be accessible to every patient — regardless of their
            financial background. From free prasad for patients to subsidized OPD consultations,
            every service reflects our commitment to compassionate, affordable healthcare.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}