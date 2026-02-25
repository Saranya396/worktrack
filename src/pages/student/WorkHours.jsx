import StudentLayout from "./StudentLayout";

export default function WorkHours() {
  const workData = [
    { id: 1, jobTitle: "Library Assistant", date: "2026-02-17", hours: 3 },
    { id: 2, jobTitle: "Library Assistant", date: "2026-02-18", hours: 3 },
    { id: 3, jobTitle: "IT Support Technician", date: "2026-02-19", hours: 4 },
  ];

  const totalHours = workData.reduce((sum, item) => sum + item.hours, 0);
  const totalJobs = [...new Set(workData.map(item => item.jobTitle))].length;

  return (
    <StudentLayout>
      <h1 className="text-3xl font-bold mb-2">Work Hours</h1>
      <p className="text-gray-600 mb-8">
        Track your work hours
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">{totalHours}</h2>
          <p className="text-gray-500">Total Hours Worked</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">{totalJobs}</h2>
          <p className="text-gray-500">Total Jobs Working</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Job Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Hours Worked</th>
            </tr>
          </thead>
          <tbody>
            {workData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.jobTitle}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.hours} hrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StudentLayout>
  );
}