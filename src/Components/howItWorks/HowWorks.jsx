import { useTheme } from "../../Context/ThemeContext";

const HowWorks = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0f172a" : "#FAFBFC" }}
    >
      <div className="p-10">
        <div className="text-center">
          <h2
            className="text-4xl font-bold transition-colors duration-300"
            style={{ color: isDark ? "#f8fafc" : "#374151" }}
          >
            How It Works
          </h2>

          <h3
            className="mt-3 text-lg font-medium transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
          >
            A simple process to connect you with your perfect mentor.
          </h3>
        </div>

        <div className="my-10 flex items-center justify-between">
          <div className="mt-5 flex w-[33%] flex-col items-center justify-center text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 text-3xl font-bold text-[#2E7D6B]"
              style={{
                borderColor: isDark ? "#34d399" : "#2E7D6B",
                color: isDark ? "#34d399" : "#2E7D6B",
                backgroundColor: isDark ? "#1e293b" : "transparent",
              }}
            >
              <span>1</span>
            </div>

            <div className="mt-5">
              <h3
                className="text-xl font-medium transition-colors duration-300"
                style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
              >
                Create Profile
              </h3>

              <h4
                className="mt-3 transition-colors duration-300"
                style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
              >
                Quick onboarding process
              </h4>
            </div>
          </div>

          <div className="mt-5 flex w-[33%] flex-col items-center justify-center text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 text-3xl font-bold text-[#2E7D6B]"
              style={{
                borderColor: isDark ? "#34d399" : "#2E7D6B",
                color: isDark ? "#34d399" : "#2E7D6B",
                backgroundColor: isDark ? "#1e293b" : "transparent",
              }}
            >
              <span>2</span>
            </div>

            <div className="mt-5">
              <h3
                className="text-xl font-medium transition-colors duration-300"
                style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
              >
                Find Your Mentor
              </h3>

              <h4
                className="mt-3 transition-colors duration-300"
                style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
              >
                Browse and connect with experts
              </h4>
            </div>
          </div>

          <div className="mt-5 flex w-[33%] flex-col items-center justify-center text-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 text-3xl font-bold text-[#2E7D6B]"
              style={{
                borderColor: isDark ? "#34d399" : "#2E7D6B",
                color: isDark ? "#34d399" : "#2E7D6B",
                backgroundColor: isDark ? "#1e293b" : "transparent",
              }}
            >
              <span>3</span>
            </div>

            <div className="mt-5">
              <h3
                className="text-xl font-medium transition-colors duration-300"
                style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
              >
                Grow Together
              </h3>

              <h4
                className="mt-3 transition-colors duration-300"
                style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
              >
                Quick onboarding process
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;