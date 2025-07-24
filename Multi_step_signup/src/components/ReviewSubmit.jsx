
import { useMultiForm } from "../Context/MultiFormContext";

export const ReviewSubmit = () => {
  const { data, prev } = useMultiForm();

  const handleSubmit = () => {
    alert("Form Submitted:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="rounded-2xl p-8">
      <h2 className="text-center text-3xl font-semibold mb-6 text-blue-600">
        Step 3: Review & Submit
      </h2>

      <div className="space-y-4 text-gray-700 text-lg">
        <div>
          <strong>Name:</strong> <span>{data.name}</span>
        </div>
        <div>
          <strong>Email:</strong> <span>{data.email}</span>
        </div>
        <div>
          <strong>Address:</strong> <span>{data.address}</span>
        </div>
        <div>
          <strong>Phone:</strong> <span>{data.phone}</span>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-xl"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
