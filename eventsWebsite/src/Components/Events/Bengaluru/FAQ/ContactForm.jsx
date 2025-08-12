import React, { useState } from 'react';

// Mock imports for assets - replace with your actual paths
import Left from '../../../../assets/Backgrounds/FaqLeftCard.png';
import Right from '../../../../assets/Backgrounds/FaqRightCard.png';
import Background from '../../../../assets/Backgrounds/TorontoImages/TorontoRight.png';
/**
 * A reusable form field component with a floating label effect.
 */
const FormField = ({ id, label, type = 'text', value, onChange, isTextarea = false }) => {
  const InputComponent = isTextarea ? 'textarea' : 'input';
  
  return (
    <div className="relative">
      <InputComponent
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        rows={isTextarea ? 5 : undefined}
        // The placeholder is empty but required for the :placeholder-shown selector to work
        placeholder=" "
        className={`peer w-full rounded-lg border-2 border-slate-300 bg-slate-50 px-4 py-3 text-lg text-gray-800 outline-none transition-all duration-200 focus:border-blue-500 ${isTextarea ? 'resize-none' : ''}`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 origin-[0] -translate-y-6 scale-75 transform bg-slate-50 px-2 text-base text-gray-500 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
};

/**
 * A fully responsive contact form section.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // To test the error state, you can uncomment the line below:
      // throw new Error("Simulated API Error");
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form on success
    } catch (error) {
      setSubmitStatus( error);
    } finally {
      setIsSubmitting(false);
      // Hide the status message after 4 seconds
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black p-4 font-sans sm:p-6 lg:p-8" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"
        aria-hidden="true"
      />

      {/* Decorative Images - Positioned absolutely for desktop */}
      <img 
        src={Left} 
        alt="" 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] xl:w-[500px] opacity-60 hidden lg:block z-10" 
      />
      <img 
        src={Right} 
        alt="" 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] xl:w-[500px] opacity-60 hidden lg:block z-10" 
      />

      {/* Main content container */}
      <div className="relative mx-auto max-w-7xl rounded-2xl border border-slate-50/50 bg-black/50 backdrop-blur-sm p-4 sm:p-8 lg:p-12 z-20">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-50 md:text-5xl">
          Contact Us
        </h1>

        {/* Responsive two-column grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column: Form */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
            <FormField id="name" label="Your Name" value={formData.name} onChange={handleInputChange} />
            <FormField id="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} />
            <FormField id="subject" label="Subject" value={formData.subject} onChange={handleInputChange} />
            <FormField id="message" label="Message" value={formData.message} onChange={handleInputChange} isTextarea />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full transform rounded-md bg-gradient-to-r from-blue-500 to-blue-800 px-8 py-4 text-2xl font-bold text-slate-50 shadow-lg transition-transform duration-300 hover:scale-105 active:scale-100 disabled:cursor-not-allowed disabled:opacity-70 md:text-3xl"
              style={{ boxShadow: '0px 0px 24px 0px rgba(0, 114, 255, 0.56)' }}
            >
              {isSubmitting ? 'Connecting...' : "Let's Connect"}
            </button>
          </form>

          {/* Right Column: Title Text (visible on desktop) */}
          <div className="hidden lg:flex relative h-full items-center justify-center">
             <div className="text-center text-white z-30 relative">
                <h2 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium !leading-tight">
                    Enterprise AI Summit 2025
                </h2>
             </div>
          </div>

        </div>
      </div>

      {/* Submission Status Toast Notification */}
      {submitStatus && (
        <div className={`fixed bottom-4 right-4 z-50 rounded-lg px-6 py-3 font-semibold text-white shadow-2xl transition-all duration-300 sm:bottom-6 sm:right-6 ${
          submitStatus === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {submitStatus === 'success' ? '✓ Message sent successfully!' : '✗ Failed to send message.'}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
