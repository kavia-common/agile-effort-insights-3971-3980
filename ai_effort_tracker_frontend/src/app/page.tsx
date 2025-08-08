import Link from "next/link";

const FEATURES = [
  {
    title: "Excel Upload",
    desc: "Seamlessly upload sprint data for automated analysis.",
    icon: "📥",
  },
  {
    title: "Effort & Capacity Analytics",
    desc: "AI-powered insights, burndown and sprint capacity visualizations.",
    icon: "📊",
  },
  {
    title: "Intelligent Chat",
    desc: "Query effort analysis with natural language via chat.",
    icon: "🤖",
  },
  {
    title: "Responsive & Secure",
    desc: "Modern, minimal UI with authentication & secure API integration.",
    icon: "🛡️",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-16 md:pt-20 pb-8 md:pb-12 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight text-primary leading-tight">
            AI-Powered Effort Tracker
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 text-secondary max-w-2xl mx-auto font-light">
            Upload sprint data. Ask questions. Get instant analytics and interactive reports powered by AI and CrewAI agents.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center mb-2 w-full">
            <Link
              href="/dashboard"
              className="bg-primary text-white rounded-lg font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg transition-colors hover:bg-accent w-full sm:w-auto"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/chat"
              className="bg-accent text-black rounded-lg font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg transition-colors hover:bg-primary w-full sm:w-auto"
            >
              Try AI Chat
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-3 xs:px-4 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[144px]"
          >
            <div className="text-3xl sm:text-4xl mb-1.5 sm:mb-2">{f.icon}</div>
            <span className="font-bold text-base sm:text-lg mb-1 text-primary text-center">
              {f.title}
            </span>
            <span className="text-secondary text-xs sm:text-sm text-center">{f.desc}</span>
          </div>
        ))}
      </section>
      {/* SIGN IN CTA */}
      <section className="flex justify-center w-full py-6 sm:py-8 bg-gradient-to-t from-blue-50 to-white mt-2">
        <div className="text-center flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-base sm:text-lg text-primary font-semibold sm:mr-3">
            Ready to analyze your sprint?
          </span>
          <Link
            href="/auth"
            className="bg-accent text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold inline-block transition-colors hover:bg-primary hover:text-white text-base sm:text-lg"
          >
            Get Started / Login
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-3 flex justify-center text-xs text-secondary border-t bg-white">
        &copy; AI Effort Tracker {new Date().getFullYear()} | Modern minimal UI &bull; v1.0
      </footer>
    </main>
  );
}
