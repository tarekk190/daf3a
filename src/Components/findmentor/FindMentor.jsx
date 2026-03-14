import { CiLock } from "react-icons/ci";
import { Link } from "react-router";

const FindMentor = ({paragraph}) => {
  return (
    <section className="flex h-screen w-full justify-center items-center flex-col ">
      <CiLock className="text-6xl text-[#2E7D6B]" />
      <h3 className="text-2xl text-gray-700 font-bold ">
        You must be signed in
      </h3>
      <p className="   text-gray-500 mt-3">
       {paragraph}
      </p>
      <div className="mt-8  rounded-lg flex flex-col items-center gap-6">
        <div className="flex items-center">
          <Link to={"/login"}>
            <button className="bg-[#2E7D6B] text-white font-bold text-xl py-3 px-6 rounded-md cursor-pointer transition hover:bg-[#246755] hover:scale-105">
              Sign In
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className=" bg-white  ml-10 text-gray-700 border-gray-300 border font-bold text-xl py-3 px-7 rounded-md cursor-pointer transition hover:bg-[#246755] hover:scale-105 hover:text-white">
              Create Account
            </button>
          </Link>
        </div>
        <p className="text-gray-400">
          Join thousands of professionals already connected on our platform
        </p>
        <div className="flex">
          <h5 className="text-gray-400 text-sm">✓ Expert mentors</h5>
          <h5 className="text-gray-400 text-sm mx-7">
            ✓ Personalized matching
          </h5>
          <h5 className="text-gray-400 text-sm">✓ Secure platform</h5>
        </div>
      </div>
    </section>
  );
};

export default FindMentor;
