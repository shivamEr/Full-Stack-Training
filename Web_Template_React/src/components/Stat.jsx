import { FaUserMd, FaFlask, FaAward } from 'react-icons/fa';
import { FaHospital } from 'react-icons/fa6';

export const Stat = () => {
  const stats = [
    { icon: <FaUserMd className="text-4xl text-blue-600" />, count: 25, label: 'Doctors' },
    { icon: <FaHospital className="text-4xl text-green-600" />, count: 15, label: 'Departments' },
    { icon: <FaFlask className="text-4xl text-purple-600" />, count: 8, label: 'Research Labs' },
    { icon: <FaAward className="text-4xl text-yellow-600" />, count: 150, label: 'Awards' },
  ];

  return (
    <section id="stats" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <span className="text-3xl font-bold text-gray-800">{item.count}</span>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

