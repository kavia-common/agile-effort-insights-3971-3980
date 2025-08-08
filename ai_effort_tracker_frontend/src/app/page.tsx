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
      <section className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-12 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-primary">
            AI-Powered Effort Tracker
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-secondary max-w-2xl mx-auto font-light">
            Upload sprint data. Ask questions. Get instant analytics and interactive reports powered by AI and CrewAI agents.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-2">
            <Link
              href="/dashboard"
              className="bg-primary text-white rounded-lg font-semibold px-8 py-3 transition-colors hover:bg-accent"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/chat"
              className="bg-accent text-black rounded-lg font-semibold px-8 py-3 transition-colors hover:bg-primary"
            >
              Try AI Chat
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-2">{f.icon}</div>
            <span className="font-bold text-lg mb-1 text-primary">
              {f.title}
            </span>
            <span className="text-secondary text-xs text-center">{f.desc}</span>
          </div>
        ))}
      </section>
      {/* SIGN IN CTA */}
      <section className="flex justify-center w-full py-8 bg-gradient-to-t from-blue-50 to-white mt-2">
        <div className="text-center">
          <span className="text-lg text-primary font-semibold mr-3">
            Ready to analyze your sprint?
          </span>
          <Link
            href="/auth"
            className="bg-accent text-black px-8 py-3 rounded-lg font-semibold inline-block transition-colors hover:bg-primary hover:text-white"
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
