"use client";

const reasons = [
  "Blessings of our deity Hanuman Balaji",
  "Charitable Mission with Compassionate Care",
  "State-of-the-Art Medical Infrastructure",
  "Experienced & Multidisciplinary Medical Team",
  "Holistic Healing Environment",
];

export function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Choose SHB-MDH?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white px-6 py-7 md:px-10 md:py-9 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="space-y-3 text-center">
            {reasons.map((reason) => (
              <p
                key={reason}
                className="text-base md:text-lg font-medium leading-relaxed text-gray-800"
              >
                {reason}
              </p>
            ))}
          </div>

          <p className="mt-6 text-center text-sm md:text-base leading-7 text-gray-600 max-w-3xl mx-auto">
            Whether you're seeking a second opinion, diagnosis, or a complete treatment journey,
            <span className="font-semibold text-gray-900">
              {" "}SHB-MDH Cancer Care & Multispeciality Charitable Hospital
            </span>{" "}
            is here to stand by you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
