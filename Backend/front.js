import React from "react";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Complaints",
    value: 128,
    icon: <AlertTriangle size={28} />,
  },
  {
    title: "Resolved",
    value: 92,
    icon: <CheckCircle size={28} />,
  },
  {
    title: "Pending",
    value: 21,
    icon: <Clock size={28} />,
  },
  {
    title: "Technicians",
    value: 15,
    icon: <Users size={28} />,
  },
];

const recentComplaints = [
  {
    id: 1,
    title: "Water Leakage",
    room: "A-203",
    status: "Pending",
    category: "Plumbing",
  },
  {
    id: 2,
    title: "WiFi Not Working",
    room: "B-112",
    status: "In Progress",
    category: "Internet",
  },
  {
    id: 3,
    title: "Fan Repair",
    room: "C-305",
    status: "Resolved",
    category: "Electrical",
  },
  {
    id: 4,
    title: "Broken Chair",
    room: "D-108",
    status: "Pending",
    category: "Furniture",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar + Main */}
      <div className="flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-blue-900 text-white p-6">
          <h1 className="text-2xl font-bold mb-8">
            Hostel Admin
          </h1>

          <nav className="space-y-4">
            <button className="w-full text-left hover:bg-blue-700 p-3 rounded-lg">
              Dashboard
            </button>

            <button className="w-full text-left hover:bg-blue-700 p-3 rounded-lg">
              Complaints
            </button>

            <button className="w-full text-left hover:bg-blue-700 p-3 rounded-lg">
              Technicians
            </button>

            <button className="w-full text-left hover:bg-blue-700 p-3 rounded-lg">
              Analytics
            </button>

            <button className="w-full text-left hover:bg-blue-700 p-3 rounded-lg">
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Complaint Analytics Dashboard
              </h2>

              <p className="text-gray-500 mt-1">
                Monitor hostel maintenance issues and resolutions
              </p>
            </div>

            <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-md">
              Generate Report
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-gray-500 text-sm">
                      {item.title}
                    </h3>

                    <p className="text-3xl font-bold mt-2 text-gray-800">
                      {item.value}
                    </p>
                  </div>

                  <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complaint Table */}
          <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Recent Complaints
              </h3>

              <input
                type="text"
                placeholder="Search complaints..."
                className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Title</th>
                  <th className="py-3">Room</th>
                  <th className="py-3">Category</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentComplaints.map((complaint) => (
                  <tr
                    key={complaint.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-4">
                      {complaint.title}
                    </td>

                    <td className="py-4">
                      {complaint.room}
                    </td>

                    <td className="py-4">
                      {complaint.category}
                    </td>

                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          complaint.status === "Resolved"
                            ? "bg-green-100 text-green-700"
                            : complaint.status === "Pending"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            
            {/* Complaint Categories */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">
                Complaint Categories
              </h3>

              <div className="space-y-5">
                {[
                  { label: "Electrical", value: "70%" },
                  { label: "Plumbing", value: "55%" },
                  { label: "Internet", value: "40%" },
                  { label: "Furniture", value: "25%" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolution Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6">
                Resolution Summary
              </h3>

              <div className="flex flex-col gap-5">
                <div className="bg-green-100 p-5 rounded-xl">
                  <p className="text-green-700 text-sm">
                    Resolved Complaints
                  </p>

                  <h2 className="text-3xl font-bold text-green-800 mt-2">
                    92
                  </h2>
                </div>

                <div className="bg-yellow-100 p-5 rounded-xl">
                  <p className="text-yellow-700 text-sm">
                    In Progress
                  </p>

                  <h2 className="text-3xl font-bold text-yellow-800 mt-2">
                    15
                  </h2>
                </div>

                <div className="bg-red-100 p-5 rounded-xl">
                  <p className="text-red-700 text-sm">
                    Pending Complaints
                  </p>

                  <h2 className="text-3xl font-bold text-red-800 mt-2">
                    21
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;