import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Basic email validation
        if (email && /\S+@\S+\.\S+/.test(email)) {
            setFeedback({ message: 'Thank you for subscribing!', type: 'success' });
            // Here you would typically handle the form submission to a service like Mailchimp
            // For this example, we'll just show a success message.
            setEmail('');
            setTimeout(() => setFeedback({ message: '', type: '' }), 3000);
        } else {
            setFeedback({ message: 'Please enter a valid email address.', type: 'error' });
        }
    };

    return (
        <footer className="bg-gradient-to-r from-black to-[#0f0f0f] text-slate-300 py-10 px-6  border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* --- Desktop Layout --- */}
                <div className="hidden md:flex justify-around flex-wrap gap-8 mb-8">
                    {/* Social Links */}
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Social Links</h4>
                        <a href="https://linkedin.com/company/flivoai" aria-label="LinkedIn" className="text-blue-400 text-4xl transition-all duration-300 hover:text-blue-300 hover:scale-125 inline-block">
                            <Linkedin />
                        </a>
                    </div>

                    {/* Legal */}
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="/privacy" className="text-blue-400 font-medium hover:text-blue-300 hover:underline">Privacy Policy</a></li>
                            <li><a href="/terms" className="text-blue-400 font-medium hover:text-blue-300 hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Newsletter Signup</h4>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-wrap gap-2 items-center w-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 py-2 px-4 border border-gray-600 rounded-md bg-[#0f0f0f] text-slate-200 text-base focus:border-blue-400 focus:outline-none transition"
                                required
                            />
                            <button type="submit" className="py-2 px-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-md font-semibold transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </form>
                        {feedback.message && (
                            <p className={`mt-3 text-sm text-left ${feedback.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {feedback.message}
                            </p>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
                        <p>Email: connect@flivo.ai</p>
                        <p>Phone: +1 (703) 543-995</p>
                    </div>
                </div>

                {/* --- Mobile Layout --- */}
                <div className="md:hidden text-center">
                    {/* Mobile Newsletter */}
                    <div className="mb-10">
                        <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Newsletter Signup</h4>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 items-stretch max-w-xs mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Signup:"
                                className="w-full h-11 text-center py-2 px-4 border border-gray-600 rounded-lg bg-[#0f0f0f] text-slate-200 text-base focus:border-blue-400 focus:outline-none"
                                required
                            />
                            <button type="submit" className="w-full h-11 py-2 px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-semibold text-base">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Mobile Legal & Contact */}
                    <div className="flex justify-around gap-4 mb-10">
                        <div>
                            <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Legal</h4>
                            <div className="flex flex-col items-center space-y-1">
                                <a href="#" className="text-blue-400 font-medium text-base hover:text-blue-300 hover:underline">Privacy Policy</a>
                                <a href="#" className="text-blue-400 font-medium text-base hover:text-blue-300 hover:underline">Terms of Service</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Contact</h4>
                            <div className="text-base space-y-2 opacity-90">
                                <p>connect@flivo.ai</p>
                                <p>+1 (703) 543-095</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Social */}
                    <div className="mb-8">
                        <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider">Social Links</h4>
                        <div className="flex justify-center">
                             <a href="https://linkedin.com/company/flivoai" aria-label="LinkedIn" className="text-blue-400 text-4xl transition-all duration-300 hover:text-blue-300 hover:scale-125">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 mt-4 border-t border-gray-800 text-center">
                    <p className="text-sm">&copy; 2025 FilvoAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;