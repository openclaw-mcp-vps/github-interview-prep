import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Interview Prep – Generate Interview Questions from Candidate's GitHub",
  description: "Analyze candidate GitHub repos and generate contextual technical interview questions based on their actual code. Built for engineering managers, recruiters, and founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="38aaa5f2-0c6f-4fb3-8ace-5de124419f0a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
