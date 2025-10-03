import React, { useState } from "react";

export default function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to submissions
    setSubmissions([...submissions, formData]);
    // Reset form
    setFormData({name: "", email: "", course: ""});
  };

  return (
    <div className="max-w-xl mx-auto p-4 my-10">
      <form onSubmit={handleSubmit} className="mb-6 bg-gray-200 shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Course Registration</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block mb-1 font-semibold">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            className="w-full border bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.course}
            onChange={handleChange}
            required
            />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submissions.length > 0 && (
        <div className="overflow-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Course</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="border-b even:bg-gray-100">
                  <td className="py-2 px-4">{submission.name}</td>
                  <td className="py-2 px-4">{submission.email}</td>
                  <td className="py-2 px-4">{submission.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
