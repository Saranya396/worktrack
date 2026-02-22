import Sidebar from "../components/Sidebar";

export default function StudentLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="student" />
      <div className="flex-1 p-8 bg-gray-50">{children}</div>
    </div>
  );
}