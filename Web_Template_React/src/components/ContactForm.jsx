
export const ContactForm = () => {

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        

        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-center">A108 Adam Street, New York, NY 535022</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-center">+1 5589 55488 55</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-center">info@example.com</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 border rounded-md"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full p-3 border rounded-md"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

