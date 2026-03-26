"use client";
import { useState } from "react";
import { TopHeader } from "../componets/top_header";
import { TopNavbar } from "../componets/TopNavbar";
import { MainNavbar } from "../componets/MainNavbar";
import { Footer } from "../componets/footer";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
type Feedback = {
  id: number;
  name: string;
  uhid: string;
  department: string;
  dateOfVisit: string;
  doctorRatings: Record<string, number>;
  nursingRatings: Record<string, number>;
  hospitalRatings: Record<string, number>;
  diagRatings: Record<string, number>;
  overallSatisfaction: number;
  suggestions: string;
  date: string;
  avatar: string;
};

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
const DEPARTMENTS = ["OPD", "IPD", "Diagnostics", "Pharmacy", "Emergency"];

const DOCTOR_CRITERIA = [
  "Doctor explained the disease clearly",
  "Doctor listened carefully",
  "Doctor gave enough consultation time",
  "Doctor behaviour and professionalism",
];

const NURSING_CRITERIA = [
  "Nursing staff responsiveness",
  "Courtesy of nursing staff",
  "Attention to patient needs",
];

const HOSPITAL_CRITERIA = [
  "Cleanliness of hospital",
  "Waiting time",
  "Admission process",
  "Discharge process",
  "Billing clarity",
];

const DIAG_CRITERIA = [
  "Diagnostic services efficiency",
  "Lab report delivery time",
  "Pharmacy staff behaviour",
  "Medicine availability",
];

const SATISFACTION_LABELS: Record<number, { label: string; color: string }> = {
  1: { label: "Very Dissatisfied", color: "text-red-500" },
  2: { label: "Dissatisfied", color: "text-orange-400" },
  3: { label: "Neutral", color: "text-yellow-500" },
  4: { label: "Satisfied", color: "text-lime-500" },
  5: { label: "Very Satisfied", color: "text-emerald-500" },
};

const INITIAL_FEEDBACKS: Feedback[] = [
  {
    id: 1,
    name: "Priya Sharma",
    uhid: "SHB-00123",
    department: "OPD",
    dateOfVisit: "2026-03-14",
    doctorRatings: {
      "Doctor explained the disease clearly": 5,
      "Doctor listened carefully": 5,
      "Doctor gave enough consultation time": 4,
      "Doctor behaviour and professionalism": 5,
    },
    nursingRatings: {
      "Nursing staff responsiveness": 5,
      "Courtesy of nursing staff": 4,
      "Attention to patient needs": 5,
    },
    hospitalRatings: {
      "Cleanliness of hospital": 5,
      "Waiting time": 4,
      "Admission process": 5,
      "Discharge process": 5,
      "Billing clarity": 4,
    },
    diagRatings: {
      "Diagnostic services efficiency": 4,
      "Lab report delivery time": 4,
      "Pharmacy staff behaviour": 5,
      "Medicine availability": 5,
    },
    overallSatisfaction: 5,
    suggestions: "Excellent overall. The cardiologist was very thorough and kind.",
    date: "15 Mar 2026",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    uhid: "SHB-00456",
    department: "Emergency",
    dateOfVisit: "2026-03-11",
    doctorRatings: {
      "Doctor explained the disease clearly": 4,
      "Doctor listened carefully": 4,
      "Doctor gave enough consultation time": 3,
      "Doctor behaviour and professionalism": 4,
    },
    nursingRatings: {
      "Nursing staff responsiveness": 5,
      "Courtesy of nursing staff": 4,
      "Attention to patient needs": 4,
    },
    hospitalRatings: {
      "Cleanliness of hospital": 4,
      "Waiting time": 3,
      "Admission process": 4,
      "Discharge process": 4,
      "Billing clarity": 4,
    },
    diagRatings: {
      "Diagnostic services efficiency": 4,
      "Lab report delivery time": 3,
      "Pharmacy staff behaviour": 4,
      "Medicine availability": 4,
    },
    overallSatisfaction: 4,
    suggestions: "Quick response during emergency. Waiting time could be improved.",
    date: "12 Mar 2026",
    avatar: "AM",
  },
];

/* ─────────────────────────────────────────────
   STAR RATING COMPONENT
───────────────────────────────────────────── */
const StarRating = ({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}) => {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          className={`transition-all ${readonly ? "cursor-default" : "cursor-pointer hover:scale-125"} ${size === "sm" ? "text-lg" : "text-2xl"}`}
          aria-label={`${star} star`}
        >
          <span className={star <= active ? "text-amber-400 drop-shadow-sm" : "text-gray-200"}>
            ★
          </span>
        </button>
      ))}
      {!readonly && value > 0 && (
        <span className={`ml-2 text-xs font-bold ${SATISFACTION_LABELS[value]?.color}`}>
          {SATISFACTION_LABELS[value]?.label}
        </span>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   RATING GRID (matrix of criteria × stars)
───────────────────────────────────────────── */
const RatingGrid = ({
  criteria,
  values,
  onChange,
  readonly = false,
}: {
  criteria: string[];
  values: Record<string, number>;
  onChange?: (key: string, v: number) => void;
  readonly?: boolean;
}) => (
  <div className="overflow-x-auto rounded-xl border border-slate-100">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gradient-to-r from-orange-50 to-rose-50">
          <th className="text-left px-4 py-3 text-slate-600 font-semibold w-1/2">Criteria</th>
          {[1, 2, 3, 4, 5].map((n) => (
            <th key={n} className="text-center px-2 py-3 text-slate-500 font-medium">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs">{SATISFACTION_LABELS[n].label}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {criteria.map((c, i) => (
          <tr
            key={c}
            className={`border-t border-slate-100 transition-colors ${!readonly && "hover:bg-orange-50/40"} ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
          >
            <td className="px-4 py-3 text-slate-700 font-medium">{c}</td>
            {[1, 2, 3, 4, 5].map((rating) => (
              <td key={rating} className="text-center px-2 py-3">
                <button
                  type="button"
                  disabled={readonly}
                  onClick={() => onChange?.(c, rating)}
                  className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl border-2 transition-all mx-auto w-12 h-12 ${
                    values[c] === rating
                      ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-100"
                      : values[c] > 0 && rating <= values[c]
                      ? "border-orange-300 bg-orange-100"
                      : "border-slate-200 bg-white hover:border-orange-300"
                  } ${readonly ? "cursor-default" : "cursor-pointer hover:scale-105"}`}
                  aria-label={`${SATISFACTION_LABELS[rating].label} for ${c}`}
                >
                  <span className="text-xs font-bold">{rating}</span>
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ─────────────────────────────────────────────
   SECTION CARD
───────────────────────────────────────────── */
const SectionCard = ({
  icon,
  title,
  subtitle,
  children,
  accent = "orange",
}: {
  icon: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  accent?: string;
}) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
    <div className={`px-6 py-4 bg-gradient-to-r ${accent === "orange" ? "from-orange-500 to-rose-500" : accent === "blue" ? "from-blue-500 to-indigo-500" : accent === "teal" ? "from-teal-500 to-emerald-500" : "from-purple-500 to-pink-500"} flex items-center gap-3`}>
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="text-white font-bold text-base">{title}</h3>
        {subtitle && <p className="text-white/80 text-xs mt-0.5">{subtitle}</p>}
      </div>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

/* ─────────────────────────────────────────────
   OVERALL SATISFACTION SELECTOR
───────────────────────────────────────────── */
const SatisfactionSelector = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) => {
  const options = [
    { v: 1, label: "Very Dissatisfied" },
    { v: 2, label: "Dissatisfied" },
    { v: 3, label: "Neutral" },
    { v: 4, label: "Satisfied" },
    { v: 5, label: "Very Satisfied" },
  ];
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-2">
      {options.map((o) => (
        <button
          key={o.v}
          type="button"
          onClick={() => onChange(o.v)}
          className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border-2 transition-all hover:scale-105 ${
            value === o.v
              ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-100"
              : "border-slate-200 bg-white hover:border-orange-300"
          }`}
        >
          <span className="text-lg font-bold">{o.v}</span>
          <span className={`text-xs font-semibold ${value === o.v ? "text-orange-600" : "text-slate-500"}`}>
            {o.label}
          </span>
        </button>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────
   BADGE COMPONENT
───────────────────────────────────────────── */
const DeptBadge = ({ dept }: { dept: string }) => {
  const colors: Record<string, string> = {
    OPD: "bg-blue-50 text-blue-600 border-blue-100",
    IPD: "bg-purple-50 text-purple-600 border-purple-100",
    Emergency: "bg-red-50 text-red-600 border-red-100",
    Diagnostics: "bg-teal-50 text-teal-600 border-teal-100",
    Pharmacy: "bg-green-50 text-green-600 border-green-100",
  };
  return (
    <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-semibold border ${colors[dept] || "bg-gray-50 text-gray-600 border-gray-100"}`}>
      {dept}
    </span>
  );
};

/* ─────────────────────────────────────────────
   MINI RATING DISPLAY (for view tab)
───────────────────────────────────────────── */
const MiniRatingRow = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
    <span className="text-xs text-slate-600">{label}</span>
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-1">
        <span className={`text-sm font-bold ${SATISFACTION_LABELS[value]?.color}`}>
          {value}
        </span>
      </div>
      <span className={`text-xs font-bold ${SATISFACTION_LABELS[value]?.color}`}>
        {SATISFACTION_LABELS[value]?.label || "—"}
      </span>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const defaultRatings = (criteria: string[]) =>
  Object.fromEntries(criteria.map((c) => [c, 0]));

export default function HospitalFeedback() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(INITIAL_FEEDBACKS);
  const [tab, setTab] = useState<"submit" | "view">("submit");
  const [submitted, setSubmitted] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    uhid: "",
    department: "",
    dateOfVisit: "",
    doctorRatings: defaultRatings(DOCTOR_CRITERIA),
    nursingRatings: defaultRatings(NURSING_CRITERIA),
    hospitalRatings: defaultRatings(HOSPITAL_CRITERIA),
    diagRatings: defaultRatings(DIAG_CRITERIA),
    overallSatisfaction: 0,
    suggestions: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const setRating = (
    section: "doctorRatings" | "nursingRatings" | "hospitalRatings" | "diagRatings",
    key: string,
    val: number
  ) => {
    setForm((f) => ({ ...f, [section]: { ...f[section], [key]: val } }));
    setErrors((e) => ({ ...e, [section]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.department) e.department = "Please select a department";
    if (!form.dateOfVisit) e.dateOfVisit = "Please select date of visit";
    if (Object.values(form.doctorRatings).some((v) => v === 0))
      e.doctorRatings = "Please rate all Doctor Services criteria";
    if (Object.values(form.nursingRatings).some((v) => v === 0))
      e.nursingRatings = "Please rate all Nursing Care criteria";
    if (Object.values(form.hospitalRatings).some((v) => v === 0))
      e.hospitalRatings = "Please rate all Hospital Services criteria";
    if (Object.values(form.diagRatings).some((v) => v === 0))
      e.diagRatings = "Please rate all Diagnostics & Pharmacy criteria";
    if (!form.overallSatisfaction) e.overallSatisfaction = "Please select overall satisfaction";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    const initials = form.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newFeedback: Feedback = {
      id: Date.now(),
      name: form.name.trim(),
      uhid: form.uhid.trim() || "—",
      department: form.department,
      dateOfVisit: form.dateOfVisit,
      doctorRatings: { ...form.doctorRatings },
      nursingRatings: { ...form.nursingRatings },
      hospitalRatings: { ...form.hospitalRatings },
      diagRatings: { ...form.diagRatings },
      overallSatisfaction: form.overallSatisfaction,
      suggestions: form.suggestions.trim(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      avatar: initials,
    };

    setFeedbacks((prev) => [newFeedback, ...prev]);
    setSubmitted(true);
    setForm({
      name: "",
      uhid: "",
      department: "",
      dateOfVisit: "",
      doctorRatings: defaultRatings(DOCTOR_CRITERIA),
      nursingRatings: defaultRatings(NURSING_CRITERIA),
      hospitalRatings: defaultRatings(HOSPITAL_CRITERIA),
      diagRatings: defaultRatings(DIAG_CRITERIA),
      overallSatisfaction: 0,
      suggestions: "",
    });
    setErrors({});
  };

  const avgRating =
    feedbacks.length > 0
      ? feedbacks.reduce((s, f) => s + f.overallSatisfaction, 0) / feedbacks.length
      : 0;
  const satisfaction = feedbacks.length > 0
    ? Math.round((feedbacks.filter((f) => f.overallSatisfaction >= 4).length / feedbacks.length) * 100)
    : 0;

  return (
    <>
      <TopHeader />
      <TopNavbar />
      <MainNavbar />
      <div className="min-h-screen bg-white font-sans">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
      
        </header>

        <main className="max-w-5xl mx-auto px-6 py-8">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Reviews", value: feedbacks.length, icon: "💬", from: "from-blue-400", to: "to-blue-600" },
              { label: "Avg Satisfaction", value: avgRating.toFixed(1) + " / 5", icon: "⭐", from: "from-amber-400", to: "to-orange-500" },
              { label: "Patient Satisfaction", value: satisfaction + "%", icon: "✅", from: "from-emerald-400", to: "to-teal-500" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-13 h-13 w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.from} ${stat.to} flex items-center justify-center text-2xl shadow-md`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Toggle */}
          <div className="flex bg-white border border-slate-200 rounded-2xl p-1.5 mb-7 w-fit shadow-sm">
            {(["submit", "view"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setSubmitted(false); }}
                className={`px-7 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  tab === t
                    ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-200"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {t === "submit" ? "✍️  Submit Feedback" : "📋  View All Feedbacks"}
              </button>
            ))}
          </div>

          {/* ── SUBMIT TAB ── */}
          {tab === "submit" && (
            <>
              {submitted ? (
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-16 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl shadow-emerald-200">
                    🎉
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-500 mb-2">Your feedback has been submitted successfully.</p>
                  <p className="text-sm text-slate-400 mb-8">It will be used for patient satisfaction monitoring and NABH quality audit documentation.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-orange-200"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Patient Info */}
                  <SectionCard icon="👤" title="Patient Information" subtitle="Basic details for record" accent="orange">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Patient Name <span className="text-slate-400 font-normal">(Optional)</span></label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul Verma"
                          value={form.name}
                          onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                          className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">UHID / Registration Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                        <input
                          type="text"
                          placeholder="e.g. SHB-00123"
                          value={form.uhid}
                          onChange={(e) => setForm((f) => ({ ...f, uhid: e.target.value }))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department Visited <span className="text-red-500">*</span></label>
                        <div className="flex flex-wrap gap-2">
                          {DEPARTMENTS.map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => { setForm((f) => ({ ...f, department: d })); setErrors((er) => ({ ...er, department: "" })); }}
                              className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                                form.department === d
                                  ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-100"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-orange-300"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                        {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date of Visit <span className="text-red-500">*</span></label>
                        <input
                          type="date"
                          value={form.dateOfVisit}
                          onChange={(e) => { setForm((f) => ({ ...f, dateOfVisit: e.target.value })); setErrors((er) => ({ ...er, dateOfVisit: "" })); }}
                          className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${errors.dateOfVisit ? "border-red-400 bg-red-50" : "border-slate-200"}`}
                        />
                        {errors.dateOfVisit && <p className="text-red-500 text-xs mt-1">{errors.dateOfVisit}</p>}
                      </div>
                    </div>
                  </SectionCard>

                  {/* Doctor Services */}
                  <SectionCard icon="👨‍⚕️" title="Doctor Services" subtitle="Rate on a scale of 1 (Poor) to 5 (Excellent)" accent="blue">
                    <RatingGrid
                      criteria={DOCTOR_CRITERIA}
                      values={form.doctorRatings}
                      onChange={(k, v) => setRating("doctorRatings", k, v)}
                    />
                    {errors.doctorRatings && <p className="text-red-500 text-xs mt-2">{errors.doctorRatings}</p>}
                  </SectionCard>

                  {/* Nursing Care */}
                  <SectionCard icon="💉" title="Nursing Care" subtitle="Rate on a scale of 1 (Poor) to 5 (Excellent)" accent="teal">
                    <RatingGrid
                      criteria={NURSING_CRITERIA}
                      values={form.nursingRatings}
                      onChange={(k, v) => setRating("nursingRatings", k, v)}
                    />
                    {errors.nursingRatings && <p className="text-red-500 text-xs mt-2">{errors.nursingRatings}</p>}
                  </SectionCard>

                  {/* Hospital Services */}
                  <SectionCard icon="🏨" title="Hospital Services" subtitle="Rate on a scale of 1 (Poor) to 5 (Excellent)" accent="orange">
                    <RatingGrid
                      criteria={HOSPITAL_CRITERIA}
                      values={form.hospitalRatings}
                      onChange={(k, v) => setRating("hospitalRatings", k, v)}
                    />
                    {errors.hospitalRatings && <p className="text-red-500 text-xs mt-2">{errors.hospitalRatings}</p>}
                  </SectionCard>

                  {/* Diagnostics & Pharmacy */}
                  <SectionCard icon="🔬" title="Diagnostics & Pharmacy" subtitle="Rate on a scale of 1 (Poor) to 5 (Excellent)" accent="purple">
                    <RatingGrid
                      criteria={DIAG_CRITERIA}
                      values={form.diagRatings}
                      onChange={(k, v) => setRating("diagRatings", k, v)}
                    />
                    {errors.diagRatings && <p className="text-red-500 text-xs mt-2">{errors.diagRatings}</p>}
                  </SectionCard>

                  {/* Overall Satisfaction */}
                  <SectionCard icon="😊" title="Overall Satisfaction" subtitle="How satisfied are you with your overall experience?" accent="orange">
                    <SatisfactionSelector
                      value={form.overallSatisfaction}
                      onChange={(v) => { setForm((f) => ({ ...f, overallSatisfaction: v })); setErrors((e) => ({ ...e, overallSatisfaction: "" })); }}
                    />
                    {errors.overallSatisfaction && <p className="text-red-500 text-xs mt-3 text-center">{errors.overallSatisfaction}</p>}
                  </SectionCard>

                  {/* Suggestions */}
                  <SectionCard icon="💡" title="Suggestions / Comments" subtitle="Tell us how we can serve you better (Optional)" accent="teal">
                    <textarea
                      rows={4}
                      placeholder="Share your thoughts, suggestions, or any specific feedback about your experience..."
                      value={form.suggestions}
                      onChange={(e) => setForm((f) => ({ ...f, suggestions: e.target.value }))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                    />
                    <p className="text-xs text-slate-400 text-right mt-1">{form.suggestions.length} characters</p>
                  </SectionCard>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-extrabold rounded-2xl transition-all shadow-xl shadow-orange-200 text-base tracking-wide"
                  >
                    Submit Feedback →
                  </button>
                  <p className="text-center text-xs text-slate-400 -mt-4">
                    This feedback will be used for NABH quality audit and patient satisfaction monitoring.
                  </p>
                </div>
              )}
            </>
          )}

          {/* ── VIEW TAB ── */}
          {tab === "view" && (
            <div className="space-y-4">
              {feedbacks.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400">
                  No feedback yet. Be the first!
                </div>
              ) : (
                feedbacks.map((fb) => (
                  <div key={fb.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Card Header */}
                    <div className="flex items-start gap-4 p-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md shadow-orange-100">
                        {fb.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <p className="font-bold text-slate-800 text-base">{fb.name}</p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <DeptBadge dept={fb.department} />
                              {fb.uhid !== "—" && (
                                <span className="text-xs text-slate-400 font-mono">#{fb.uhid}</span>
                              )}
                              {fb.dateOfVisit && (
                                <span className="text-xs text-slate-400">
                                  Visit: {new Date(fb.dateOfVisit).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 justify-end">
                              <span className={`text-lg font-bold ${SATISFACTION_LABELS[fb.overallSatisfaction]?.color}`}>
                                {fb.overallSatisfaction}
                              </span>
                            </div>
                            <p className={`text-xs font-bold mt-0.5 ${SATISFACTION_LABELS[fb.overallSatisfaction]?.color}`}>
                              Overall: {SATISFACTION_LABELS[fb.overallSatisfaction]?.label}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{fb.date}</p>
                          </div>
                        </div>
                        {fb.suggestions && (
                          <p className="text-slate-600 text-sm mt-3 leading-relaxed bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                            💬 {fb.suggestions}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedId(expandedId === fb.id ? null : fb.id)}
                      className="w-full px-6 py-3 border-t border-slate-100 text-xs font-semibold text-orange-500 hover:bg-orange-50 transition flex items-center justify-center gap-1.5"
                    >
                      {expandedId === fb.id ? "▲ Hide detailed ratings" : "▼ View detailed ratings"}
                    </button>

                    {/* Expanded Ratings */}
                    {expandedId === fb.id && (
                      <div className="px-6 pb-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">👨‍⚕️ Doctor Services</p>
                          {Object.entries(fb.doctorRatings).map(([k, v]) => <MiniRatingRow key={k} label={k} value={v} />)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-2">💉 Nursing Care</p>
                          {Object.entries(fb.nursingRatings).map(([k, v]) => <MiniRatingRow key={k} label={k} value={v} />)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">🏨 Hospital Services</p>
                          {Object.entries(fb.hospitalRatings).map(([k, v]) => <MiniRatingRow key={k} label={k} value={v} />)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2">🔬 Diagnostics & Pharmacy</p>
                          {Object.entries(fb.diagRatings).map(([k, v]) => <MiniRatingRow key={k} label={k} value={v} />)}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}