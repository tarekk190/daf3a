import TestimonialCard from "./TestimonialCard";
import img1 from "../../../public/img/3d-muslim-woman-avatar-free-png.png";
import img2 from "../../../public/img/cartoon-female-teacher-avatar-in-a-smart-outfit-with-glasses-ready-to-educate-students-with-enthusiasm-3d-cartoon-female-teacher-educator-avatar-isolated-on-transparent-background-free-png.png";
import img3 from "../../../public/img/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png";
import { useTheme } from "../../context/ThemeContext";

const testimonials = [
  {
    image: img1,
    name: "Fatima Al-Jamil",
    role: "From: Unemployed > New Role: Frontend Developer",
    quote:
      "“Daf3a was a game-changer! The personalized mentorship helped me land my first tech job. I'm forever grateful.”",
  },
  {
    image: img2,
    name: "Layla Hassan",
    role: "From: Junior Accountant > New Role: Data Analyst",
    quote:
      "“I was stuck in my career. With Daf3a, I learned new skills and transitioned into a data analyst role, doubling my salary!”",
  },
  {
    image: img3,
    name: "Ahmed Ehab",
    role: "From: Graphic Designer > New Role: UX/UI Designer",
    quote:
      "“The mentorship program was incredible. My mentor guided me through building a professional portfolio, which was key to getting my new role.”",
  },
];

const SuccessStories = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0f172a" : "#f8f8f8" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center lg:mb-16">
          <h2
            className="text-3xl font-bold sm:text-4xl lg:text-5xl transition-colors duration-300"
            style={{ color: isDark ? "#f8fafc" : "#1F3B57" }}
          >
            Student Success Stories
          </h2>

          <p
            className="mt-4 text-base sm:text-lg transition-colors duration-300"
            style={{ color: isDark ? "#94a3b8" : "#6b7280" }}
          >
            See how Df3a has changed the lives of our students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;