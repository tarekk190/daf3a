import { useTheme } from "../../Context/ThemeContext";

useTheme
const TestimonialCard = ({ image, name, role, quote }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="rounded-2xl p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
      }}
    >
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
        />

        <div>
          <h3
            className="text-xl font-bold sm:text-2xl transition-colors duration-300"
            style={{ color: isDark ? "#f8fafc" : "#1F3B57" }}
          >
            {name}
          </h3>

          <p
            className="mt-1 text-sm leading-relaxed sm:text-base transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#6b7280" }}
          >
            {role}
          </p>
        </div>
      </div>

      <p
        className="mt-6 text-lg italic leading-relaxed sm:text-xl transition-colors duration-300"
        style={{ color: isDark ? "#e2e8f0" : "#1F3B57" }}
      >
        {quote}
      </p>
    </div>
  );
};

export default TestimonialCard;