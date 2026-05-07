export default function Home() {
  const faqs = [
    {
      q: "How does it analyze GitHub repos?",
      a: "We use the GitHub API to fetch public repositories and OpenAI to analyze code patterns, languages, and architecture — then generate tailored interview questions."
    },
    {
      q: "What kinds of questions does it generate?",
      a: "Technical deep-dives based on the candidate's actual code: design decisions, trade-offs, debugging scenarios, and follow-up probes specific to their stack."
    },
    {
      q: "Can I export the question sets?",
      a: "Yes. Every generated question set can be exported as a PDF or copied to your clipboard for use in your existing interview workflow."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Interview questions from{" "}
          <span className="text-[#58a6ff]">their actual code</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste a candidate's GitHub profile. Get sharp, contextual technical interview questions generated from their real repositories — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "Enter GitHub URL", desc: "Paste any public GitHub profile or repo link." },
            { step: "2", title: "AI Analyzes Code", desc: "We scan repos, languages, patterns, and architecture." },
            { step: "3", title: "Get Questions", desc: "Receive tailored questions with suggested follow-ups." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-bold text-lg mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited candidate analyses",
              "AI-generated interview questions",
              "Follow-up question suggestions",
              "PDF & clipboard export",
              "Candidate dashboard"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} GitHub Interview Prep. All rights reserved.
      </footer>
    </main>
  );
}
