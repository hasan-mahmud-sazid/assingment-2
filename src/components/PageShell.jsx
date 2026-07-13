import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDumbbell } from "react-icons/fa";

function PageShell({ heroContent, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);

    setTimeout(() => {
      if (sectionId) {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `#${sectionId}`);
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }, 120);
  };

  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.25),_transparent_30%),linear-gradient(135deg,#020617_0%,#111827_60%,#030712_100%)] text-white">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-3xl font-black italic text-orange-500"
            onClick={() => handleNavClick("")}
          >
            <FaDumbbell className="text-2xl" />
            Fitness
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={`absolute right-4 top-20 z-20 flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur md:static md:flex md:flex-row md:items-center md:rounded-full md:border-white/10 md:bg-transparent md:p-1 md:shadow-none ${menuOpen ? "flex" : "hidden md:flex"}`}
          >
            <li>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-orange-500/20"
                onClick={() => handleNavClick("")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-orange-500/20"
                onClick={() => handleNavClick("services-section")}
              >
                Service
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-orange-500/20"
                onClick={() => handleNavClick("contact-section")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-orange-500/20"
                onClick={() => handleNavClick("about-section")}
              >
                About
              </button>
            </li>
          </ul>
        </nav>

        {heroContent}
      </section>

      <main className="bg-black text-white">{children}</main>

      <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 flex items-center gap-2 text-3xl font-black italic text-orange-500">
              <FaDumbbell /> Fitness
            </h2>
            <p className="text-sm leading-7 text-slate-400">
              Stay connected with us for expert fitness tips, personalized
              workout plans, and the latest health trends—join our community
              today!
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row">
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="mb-2 text-lg font-semibold text-white">
                Get Started
              </li>
              <li>Service</li>
              <li>Contact Us</li>
              <li>Affiliate Program</li>
              <li>About Us</li>
            </ul>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="mb-2 text-lg font-semibold text-white">Explore</li>
              <li>Fitness</li>
              <li>Platform</li>
              <li>Workout Library</li>
              <li>App Design</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-center text-sm text-slate-500">
          All right reserved @Fitness 2024
        </div>
      </footer>
    </>
  );
}

export default PageShell;
