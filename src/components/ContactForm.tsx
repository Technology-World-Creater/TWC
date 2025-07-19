'use client';
import React, { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useEmailJS } from '../hooks/useEmailJS';
import { emailJSConfig } from '../config/emailjs';
interface ContactFormProps {
  title?: string;
  className?: string;
}

export default function ContactForm({ title = "LET'S CONNECT", className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const { sendEmail, isLoading, error, success } = useEmailJS(emailJSConfig);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    const emailData = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      to_name: 'TWC Team',
    };

    try {
      await sendEmail(emailData);
    } catch {
      // handle error if needed
    }
  };

  return (
    <div className={`w-full md:w-1/2 ${className}`}>
      <h3 className="text-2xl font-section-heading text-[#F6E7B7] mb-6">{title}</h3>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-3">
          <CheckCircle className="text-green-400" size={24} />
          <span className="text-green-400 font-semibold">
            Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
          </span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center gap-3">
          <AlertCircle className="text-red-400" size={24} />
          <span className="text-red-400 font-semibold">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name *"
            required
            className="flex-1 px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name *"
            required
            className="flex-1 px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email *"
          required
          className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 w-full"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 w-full"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message *"
          rows={4}
          required
          className="px-4 py-2 rounded bg-black/70 border border-gray-700 text-white font-body focus:outline-none focus:border-yellow-300 resize-none w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#F6E7B7] text-black font-semibold py-3 rounded mt-2 hover:bg-yellow-300 transition w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}
