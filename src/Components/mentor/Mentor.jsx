import { useTheme } from "../../Context/ThemeContext";

const Mentor = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="h-100 py-20 text-center transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0f172a" : "#FFFFFF" }}
    >
      <div className="flex h-50 flex-col items-center justify-center">
        <h3
          className="text-4xl font-bold transition-colors duration-300"
          style={{ color: isDark ? "#f8fafc" : "#374151" }}
        >
          Meet Our Mentors
        </h3>

        <h4
          className="mt-3 text-lg font-medium transition-colors duration-300"
          style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
        >
          Get guidance from the best in the industry.
        </h4>
      </div>
    </section>
  );
};

export default Mentor;