import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full p-3 shadow-sm"
      style={{
        backgroundColor: isDark ? "#0f172a" : "#ffffff",
        borderBottom: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GiStairsGoal className="mx-2 text-4xl text-[#2E7D6B]" />
            <h1
              className="text-2xl font-bold"
              style={{ color: isDark ? "#f8fafc" : "#374151" }}
            >
              Df3a
            </h1>
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            <Link to="/mentors">
              <li
                className="cursor-pointer capitalize font-medium transition hover:text-[#2E7D6B]"
                style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}
              >
                Find Mentors
              </li>
            </Link>
            <Link to="/workshops">
            <li
              className="cursor-pointer capitalize font-medium transition hover:text-[#2E7D6B]"
              style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}
            >
              Workshops
            </li>
            </Link>
          </ul>

          <div className="hidden items-center md:flex">
            <Link to="/login">
              <button
                className="mr-4 cursor-pointer text-lg font-medium transition hover:text-[#2E7D6B]"
                style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}
              >
                Log in
              </button>
            </Link>

            <Link to="/signup">
              <button className="cursor-pointer rounded-md bg-[#2E7D6B] px-6 py-2.5 font-medium text-white transition hover:scale-105 hover:bg-[#246755]">
                Sign up
              </button>
            </Link>

            <button onClick={toggleTheme} className="ml-3 cursor-pointer">
              {isDark ? (
                <FaSun className="text-2xl text-[#2E7D6B]" />
              ) : (
                <FaMoon className="text-2xl text-[#2E7D6B]" />
              )}
            </button>
          </div>

          <button
            className="text-2xl text-[#2E7D6B] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div
            className="mt-4 rounded-lg p-4 shadow md:hidden"
            style={{
              backgroundColor: isDark ? "#1e293b" : "#f9fafb",
              border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
            }}
          >
            <ul className="flex flex-col gap-4">
              <li
                className="cursor-pointer capitalize font-medium transition hover:text-[#2E7D6B]"
                style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}
              >
                Find Mentors
              </li>
              <li
                className="cursor-pointer capitalize font-medium transition hover:text-[#2E7D6B]"
                style={{ color: isDark ? "#cbd5e1" : "#4b5563" }}
              >
                Workshops
              </li>
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <Link to="/login">
                <button
                  className="w-full cursor-pointer rounded-md border py-2 text-lg font-medium transition hover:text-[#2E7D6B]"
                  style={{
                    color: isDark ? "#cbd5e1" : "#4b5563",
                    borderColor: isDark ? "#334155" : "#d1d5db",
                  }}
                >
                  Log in
                </button>
              </Link>

              <Link to="/signup">
                <button className="w-full cursor-pointer rounded-md bg-[#2E7D6B] py-2.5 font-medium text-white transition hover:bg-[#246755]">
                  Sign up
                </button>
              </Link>

              <div className="flex justify-center pt-2">
                <button onClick={toggleTheme} className="cursor-pointer">
                  {isDark ? (
                    <FaSun className="text-2xl text-[#2E7D6B]" />
                  ) : (
                    <FaMoon className="text-2xl text-[#2E7D6B]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;