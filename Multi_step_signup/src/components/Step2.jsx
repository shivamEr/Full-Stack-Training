
import { useState } from "react";
import { useMultiForm } from "../Context/MultiFormContext";

export const Step2 = () => {
  const { data, setData, next, prev } = useMultiForm();

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone must be 10 digits";
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
    <div className="rounded-2xl p-8">
      <h2 className="text-center text-3xl font-semibold mb-6 text-blue-600">
        Step 2: Address & Phone
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.address ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
            }`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 ring-red-300" : "focus:ring-blue-400"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={prev}
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-xl"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
