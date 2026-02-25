import { Briefcase, Search, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl text-white">
            <Briefcase size={20} />
          </div>
          <h1 className="text-2xl font-bold text-indigo-600">WorkTrack</h1>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/login" className="text-gray-700 font-medium hover:text-indigo-600">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-16">
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
          Campus Job Management Made Simple
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-indigo-600 leading-tight">
          Smart Campus Part-Time <br /> Job Management
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Connect students with campus opportunities. Streamline applications,
          track work hours, and manage your entire part-time job program in one
          platform.
        </p>

        <div className="mt-8">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl w-fit text-white">
            <Search />
          </div>
          <h3 className="mt-6 text-2xl font-bold">Easy Job Discovery</h3>
          <p className="mt-4 text-gray-600">
            Browse all available campus part-time jobs in one place. Filter by
            department, pay rate, and schedule to find the perfect fit.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl w-fit text-white">
            <Briefcase />
          </div>
          <h3 className="mt-6 text-2xl font-bold">One-Click Apply</h3>
          <p className="mt-4 text-gray-600">
            Apply to multiple positions with a single click. Track your
            application status in real-time with instant notifications.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl w-fit text-white">
            <TrendingUp />
          </div>
          <h3 className="mt-6 text-2xl font-bold">Work Progress Tracking</h3>
          <p className="mt-4 text-gray-600">
            Monitor your work hours, view performance feedback, and track your
            earnings all in one organized dashboard.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-8">
          <div>
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="mt-2 text-lg">Active Students</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="mt-2 text-lg">Job Opportunities</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">10k+</h2>
            <p className="mt-2 text-lg">Hours Logged</p>
          </div>
        </div>
      </section>
    </div>
  );
}