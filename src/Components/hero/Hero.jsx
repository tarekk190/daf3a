import heroImg from "../../../public/img/Hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          Accelerate Your Career Journey
        </h1>

        <h2 className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl">
          Connect with industry experts, build your professional profile, and
          unlock opportunities through personalized mentorship.
        </h2>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto cursor-pointer text-white py-3 px-6 font-medium text-base sm:text-lg rounded-lg transition bg-[#2E7D6B] hover:bg-[#246755] hover:scale-105">
            Start Your Journey
          </button>

          <button className="w-full sm:w-auto px-6 py-3 cursor-pointer text-white text-base sm:text-[17px] font-bold rounded-xl border border-white/60 bg-white/15 backdrop-blur-sm shadow-md transition duration-300 hover:bg-white/20">
            Explore Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;