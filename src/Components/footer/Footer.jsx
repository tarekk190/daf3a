import { GiStairsGoal } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-slate-900" : "bg-[#f8fafc]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <GiStairsGoal className="text-4xl text-[#2E7D6B]" />
              <h2
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-[#1F3B57]"
                }`}
              >
                Daf3a
              </h2>
            </div>

            <p
              className={`mt-5 max-w-md text-lg leading-8 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Your launchpad to a successful career through expert mentorship
              and skill development.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3
              className={`mb-5 text-xl font-bold ${
                isDark ? "text-white" : "text-[#1F3B57]"
              }`}
            >
              Platform
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                to="/mentors"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Find a Mentor
              </Link>
              <Link
                to="/workshops"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Workshops
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3
              className={`mb-5 text-xl font-bold ${
                isDark ? "text-white" : "text-[#1F3B57]"
              }`}
            >
              Resources
            </h3>

            <div className="flex flex-col gap-4">
              <Link
                to="/blog"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/success-stories"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Success Stories
              </Link>
              <Link
                to="/guides"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Guides
              </Link>
              <Link
                to="/faq"
                className={`text-lg transition duration-300 hover:text-yellow-400 ${
                  isDark ? "text-slate-300" : "text-slate-500"
                }`}
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Company + Support */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10">
            <div>
              <h3
                className={`mb-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-[#1F3B57]"
                }`}
              >
                Company
              </h3>

              <div className="flex flex-col gap-4">
                <Link
                  to="/about"
                  className={`text-lg transition duration-300 hover:text-yellow-400 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/top-mentors"
                  className={`text-lg transition duration-300 hover:text-yellow-400 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  Our Top Mentors
                </Link>
              </div>
            </div>

            <div>
              <h3
                className={`mb-5 text-xl font-bold ${
                  isDark ? "text-white" : "text-[#1F3B57]"
                }`}
              >
                Support
              </h3>

              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  className={`text-lg transition duration-300 hover:text-yellow-400 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  Contact Us
                </Link>
                <Link
                  to="/help-center"
                  className={`text-lg transition duration-300 hover:text-yellow-400 ${
                    isDark ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`mt-14 border-t lg:mt-16 ${
            isDark ? "border-slate-700" : "border-slate-200"
          }`}
        ></div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="space-y-5">
            <p
              className={`text-lg ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              © 2026 Df3a. All rights reserved.
            </p>

            <a
              href="mailto:Df3aa@gmail.com"
              className={`inline-block text-lg transition duration-300 hover:text-yellow-400 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Df3aa@gmail.com
            </a>
          </div>

          {/* Center */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/terms"
              className={`text-lg transition duration-300 hover:text-yellow-400 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className={`text-lg transition duration-300 hover:text-yellow-400 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Privacy
            </Link>
            <Link
              to="/cookie"
              className={`text-lg transition duration-300 hover:text-yellow-400 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Cookie
            </Link>
            <Link
              to="/data-protection"
              className={`text-lg transition duration-300 hover:text-yellow-400 ${
                isDark ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Data Protection
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className={`text-3xl transition duration-300 hover:scale-110 hover:text-yellow-400 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className={`text-3xl transition duration-300 hover:scale-110 hover:text-yellow-400 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className={`text-3xl transition duration-300 hover:scale-110 hover:text-yellow-400 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;