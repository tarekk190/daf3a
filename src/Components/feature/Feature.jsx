import { IoIosPeople } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";


const Feature = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section>
      <div
        className="my-10 grid grid-cols-3 py-10 transition-colors duration-300"
        style={{ backgroundColor: isDark ? "#0f172a" : "#FAFBFC" }}
      >
        <div className="m-auto text-center">
          <IoIosPeople
            className="m-auto rounded-full p-3 text-7xl"
            style={{
              color: "#2E7D6B",
              backgroundColor: isDark ? "#1e293b" : "#E6EEED",
            }}
          />
          <h3
            className="mt-5 text-xl font-medium transition-colors duration-300"
            style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
          >
            Expert Mentorship
          </h3>
          <h4
            className="text-lg font-medium transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
          >
            One-on-one guidance from industry professionals
          </h4>
        </div>

        <div className="m-auto text-center">
          <FaChartLine
            className="m-auto rounded-full p-3 text-7xl"
            style={{
              color: "#2E7D6B",
              backgroundColor: isDark ? "#1e293b" : "#E6EEED",
            }}
          />
          <h3
            className="mt-5 text-xl font-medium transition-colors duration-300"
            style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
          >
            Skill Development
          </h3>
          <h4
            className="text-lg font-medium transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
          >
            Interactive workshops and career-building tools
          </h4>
        </div>

        <div className="m-auto text-center">
          <GoShieldCheck
            className="m-auto rounded-full p-3 text-7xl"
            style={{
              color: "#2E7D6B",
              backgroundColor: isDark ? "#1e293b" : "#E6EEED",
            }}
          />
          <h3
            className="mt-5 text-xl font-medium transition-colors duration-300"
            style={{ color: isDark ? "#e2e8f0" : "#1f2937" }}
          >
            Verified Network
          </h3>
          <h4
            className="text-lg font-medium transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
          >
            Trusted community of mentors and ambitious students
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Feature;