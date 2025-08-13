import React, { useState } from 'react';

export default function ContactUs() {
  // State to hold the form data: name, email, and message.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage the loading status during form submission.
  const [loading, setLoading] = useState(false);

  // State to store any messages (success or error) to display to the user.
  const [statusMessage, setStatusMessage] = useState('');

  // Handles changes to the input fields, updating the state accordingly.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission. 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      // Simulate an API call with a 2-second delay.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log the form data to the console to show it was "sent".
      console.log('Form data submitted:', formData);

      // Set a success message and clear the form.
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // In a real app, you would handle network errors here.
      console.error('Submission failed:', error);
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      // Reset the loading state after the "API call" is complete.
      setLoading(false);
    }
  };

  return (
    // Main container .
    <div id='contact' className="flex items-center justify-center py-10 bg-[#01003C] p-4 scroll-mt-20">
      {/* Card container  */}
      <div className="w-full max-w-lg p-8  rounded-3xl border border-[#99CDFF] shadow-lg">
        {/* Title of the form. */}
        <h1 className="text-4xl font-bold text-center text-white mb-8 ">Contact Us</h1>

        {/* The form element itself. */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input group for Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full px-4 py-3 bg-[#11183c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input group for Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Mail ID"
              className="w-full px-4 py-3 bg-[#11183c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Textarea group for Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              rows="5"
              className="w-full px-4 py-3 bg-[#11183c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Conditional rendering for status message */}
          {statusMessage && (
            <p className="text-center text-sm font-medium text-green-400">
              {statusMessage}
            </p>
          )}

          {/* Submit button with loading state */}
          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-xl text-white font-semibold transition-all duration-300 ${
              loading
                ? 'bg-blue-600 cursor-not-allowed opacity-75'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  );
}
