
import { useState } from "react";
import { useMultiForm } from "../Context/MultiFormContext";

export const Step1 = () => {
  const { data, setData, next } = useMultiForm();

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      next();
    }
  };

  return (
    <div className="rounded-2xl p-30">
      <h2 className="text-center text-3xl font-semibold mb-6 text-blue-600">
        Step 1: Name & Email
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};
