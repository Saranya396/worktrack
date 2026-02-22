import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Smart Work-Study Management
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          WorkTrack simplifies student work-study programs with streamlined job management and performance tracking.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {[
          "Easy Job Management",
          "Seamless Applications",
          "Performance Tracking",
        ].map((title, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">
              Professional and minimal interface for smooth workflow.
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}