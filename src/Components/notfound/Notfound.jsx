import { MdDoNotDisturbOn } from "react-icons/md";
import { Link } from "react-router";


const Notfound = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gray-100 flex-col">
        <MdDoNotDisturbOn className="text-9xl text-[#2E7D6B]"/>
        <h3 className="my-5 text-6xl font-bold text-gray-700">404</h3>
        <h4 className="my-3 text-3xl text-gray-700 font-medium">Page Not Found</h4>
        <p className="text-center font-medium text-gray-500 text-lg">Sorry, the page you are looking for does not exist or has <br /> been moved. <br />
Please check the URL or return to the homepage.</p>
<Link to="/">
  <button className="bg-[#2E7D6B] text-white mt-5 font-bold text-xl py-3 px-6 rounded-md cursor-pointer transition hover:bg-[#246755] hover:scale-105">Go Home</button>

</Link>
    </section>
  )
}

export default Notfound