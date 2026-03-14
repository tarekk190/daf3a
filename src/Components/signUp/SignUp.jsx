import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Link } from "react-router";
import { useTheme } from "../../Context/ThemeContext";
import { GiStairsGoal } from "react-icons/gi";


const SignUp = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        })
      );
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <section
      className="min-h-screen px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-8 flex items-center justify-center mt-10"
      style={{ backgroundColor: isDark ? "#0f172a" : "#ffffff" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <div className="logo flex items-center justify-center lg:justify-start">
            
            <GiStairsGoal className="text-6xl mb-3 text-[#2E7D6B]" />
            <h2
              className="ml-3 text-3xl font-bold transition-colors duration-300 sm:text-4xl lg:text-5xl"
              style={{ color: isDark ? "#f8fafc" : "#374151" }}
            >
              Df3a
            </h2>
          </div>

          <div className="mt-8 text-center lg:mt-12 lg:text-left">
            <h3
              className="mb-5 text-3xl font-bold transition-colors duration-300 sm:text-4xl"
              style={{ color: isDark ? "#f8fafc" : "#374151" }}
            >
              Unlock Your Potential
            </h3>

            <p
              className="mx-auto max-w-xl text-base leading-8 transition-colors duration-300 sm:text-lg lg:mx-0 lg:text-xl"
              style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
            >
              Join a thriving community of learners and experts. Find your
              mentor, accelerate your growth, and achieve your goals.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2">
          <div
            className="mx-auto w-full max-w-xl rounded-2xl p-5 text-center shadow-2xl transition-colors duration-300 sm:p-8"
            style={{
              backgroundColor: isDark ? "#1e293b" : "#FFFFFF",
              border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
            }}
          >
            <h3
              className="text-2xl font-bold transition-colors duration-300 sm:text-3xl"
              style={{ color: isDark ? "#f8fafc" : "#374151" }}
            >
              Create Your Account
            </h3>

            <h4
              className="my-4 text-center transition-colors duration-300"
              style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
            >
              Join via your social account
            </h4>

            <div className="btns flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full cursor-pointer items-center justify-center rounded border py-3 text-base font-bold transition hover:bg-[#2E7D6B] hover:text-white sm:w-40 sm:text-lg"
                style={{
                  color: isDark ? "#f8fafc" : "#374151",
                  borderColor: isDark ? "#475569" : "#d1d5db",
                }}
              >
                <FaGoogle className="mr-3 text-xl sm:text-2xl" />
                Google
              </button>

              <button
                className="flex w-full cursor-pointer items-center justify-center rounded border py-3 text-base font-bold transition hover:bg-[#2E7D6B] hover:text-white sm:w-40 sm:text-lg"
                style={{
                  color: isDark ? "#f8fafc" : "#374151",
                  borderColor: isDark ? "#475569" : "#d1d5db",
                }}
              >
                <FaGithub className="mr-3 text-xl sm:text-2xl" />
                GitHub
              </button>
            </div>

            <h4
              className="my-4 transition-colors duration-300"
              style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
            >
              Or with email
            </h4>

            <div className="form">
              <input
                placeholder="Enter Your Name"
                type="text"
                name="name"
                id="name"
                className="my-3 mt-2 w-full rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              />
            </div>

            <div className="form">
              <input
                placeholder="Enter Your Email"
                type="email"
                name="email"
                id="email"
                className="my-3 mt-2 w-full rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              />
            </div>

            <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
              <select
                className="my-3 mt-2 rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3 sm:w-35"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              >
                <option value="">EG +20</option>
                <option value="">SA +966</option>
                <option value="">AE +971</option>
                <option value="">JO +962</option>
                <option value="">KW +965</option>
              </select>

              <input
                placeholder="Enter Your Phone"
                type="tel"
                name="phone"
                id="phone"
                className="my-3 mt-2 w-full rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              />
            </div>

            <div className="form">
              <input
                placeholder="Enter Your Password"
                type="password"
                name="password"
                id="password"
                className="my-3 mt-2 w-full rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              />
            </div>

            <div className="form">
              <input
                placeholder="Your Password Again"
                type="password"
                name="repassword"
                id="repassword"
                className="my-3 mt-2 w-full rounded border p-3 focus:outline-[#2E7D6B] focus:outline-3"
                style={{
                  backgroundColor: isDark ? "#0f172a" : "#F1F3F5",
                  borderColor: isDark ? "#334155" : "#e5e7eb",
                  color: isDark ? "#f8fafc" : "#111827",
                }}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label
                className="has-checked:scale-[1.03] has-checked:shadow-sm flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-md border transition duration-200 sm:w-1/2"
                style={{
                  borderColor: isDark ? "#475569" : "#d1d5db",
                  backgroundColor: isDark ? "#0f172a" : "#ffffff",
                }}
              >
                <input
                  type="radio"
                  name="role"
                  value="student"
                  className="scale-125"
                />
                <span
                  className="text-base font-medium"
                  style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}
                >
                  Student
                </span>
              </label>

              <label
                className="has-checked:scale-[1.03] has-checked:shadow-sm flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-md border transition duration-200 sm:w-1/2"
                style={{
                  borderColor: isDark ? "#475569" : "#d1d5db",
                  backgroundColor: isDark ? "#0f172a" : "#ffffff",
                }}
              >
                <input
                  type="radio"
                  name="role"
                  value="mentor"
                  className="scale-125"
                />
                <span
                  className="text-base font-medium"
                  style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}
                >
                  Mentor
                </span>
              </label>
            </div>

            <button className="mt-4 w-full cursor-pointer rounded-md bg-[#2e7d6b] py-3 font-medium text-white transition hover:scale-105 hover:bg-[#246755]">
              Sign Up
            </button>

            <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
              <h4
                className="font-medium transition-colors duration-300"
                style={{ color: isDark ? "#94a3b8" : "#9ca3af" }}
              >
                Already have an account?
              </h4>

              <Link
                to={"/login"}
                className="underline"
                style={{ color: isDark ? "#f8fafc" : "#111827" }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;