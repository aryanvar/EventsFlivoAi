import React, { useState, useEffect, useMemo, useCallback } from 'react';

// --- SVG Icon Components ---

const CreditCard = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>;
const Shield = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Clock = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Star = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Check = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const Users = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Calendar = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const Trophy = ({ className, size=24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V22h4v-7.34"/><path d="M8 16a6 6 0 0 0 8 0"/><path d="M12 2v4"/><path d="M8 2v2"/><path d="M16 2v2"/></svg>;



// --- Tickets Section Component ---
const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const [hoveredTicket, setHoveredTicket] = useState(null);

  const tickets = useMemo(() => [
    { id: 1, type: 'Basic', price: 49, originalPrice: 69, icon: Users, features: ['Standard Access', '1 Day Event', 'Welcome Kit', 'Digital Certificate'], popular: false, accentColor: 'text-cyan-600', borderAccent: 'border-cyan-200' },
    { id: 2, type: 'Premium', price: 99, originalPrice: 139, icon: Star, features: ['Premium Access', '2 Days Event', 'VIP Lounge', 'Networking Sessions', 'Premium Kit'], popular: true, accentColor: 'text-indigo-600', borderAccent: 'border-indigo-200' },
    { id: 3, type: 'VIP', price: 199, originalPrice: 279, icon: Trophy, features: ['VIP Access', '3 Days Event', 'Private Sessions', 'Exclusive Workshops', 'Premium Kit', '1-on-1 Mentoring'], popular: false, accentColor: 'text-amber-600', borderAccent: 'border-amber-200' },
    { id: 4, type: 'Enterprise', price: 399, originalPrice: 549, icon: Calendar, features: ['Full Access', 'Unlimited Days', 'Private Office', 'Custom Sessions', 'Team Building', 'Private Support', 'Premium Kit'], popular: false, accentColor: 'text-emerald-600', borderAccent: 'border-emerald-200' }
  ], []);

  useEffect(() => {
    // Animate number for each card on mount
    const intervals = [];
    tickets.forEach(ticket => {
      let start = 0;
      const end = ticket.price;
      const duration = 900;
      const steps = Math.round(duration / 16);
      const increment = end / steps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [ticket.id]: Math.floor(start) }));
      }, 16);
      intervals.push(timer);
    });
    return () => intervals.forEach(clearInterval);
  }, [tickets]);

  const handleCardClick = useCallback((id) => {
    if(selectedTicket === id) setSelectedTicket(null); // Deselect if you click again
    else setSelectedTicket(id);
    setShowSuccessMessage(false);
    setIsProcessing(false);
  }, [selectedTicket]);

  const handlePayment = useCallback(() => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setSelectedTicket(null);
      }, 3000);
    }, 2000);
  }, []);

  // Memoized style calculation
  const getCardStyles = useCallback((ticket, isSelected, isHovered) => ({
    boxShadow: isSelected
      ? '0 4px 32px 0 rgba(67,56,202,0.06)'
      : isHovered
      ? '0 4px 16px 0 rgba(67,56,202,0.08)'
      : '0 2px 8px 0 rgba(140,140,140,0.04)',
    borderColor: isSelected
      ? '#6366f1'
      : isHovered
      ? ticket.accentColor.replace('text-', '').replace('-600', '')
      : 'rgba(232,232,235,0.8)',
    transition: 'box-shadow .25s, border-color .25s'
  }), []);

  const handleMouseEnter = useCallback((ticketId) => {
    setHoveredTicket(ticketId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredTicket(null);
  }, []);

  // Subtle glass-morphism card background
  const cardBaseStyles = "relative group cursor-pointer transition-all duration-300";
  const cardBorder = "border-solid border-2";
  const cardBackground = "bg-white/75 dark:bg-gray-900/70 backdrop-blur-xl";
  const cardShadow = "shadow-md hover:shadow-lg";
  const cardSelected = "border-indigo-400 shadow-indigo-100";
  const cardHovered = "border-gray-300";
  const cardIdle = "border-gray-100 dark:border-gray-800";

  return (
    <div id="tickets-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-gray-100 via-gray-50 to-gray-200 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden min-h-screen">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900/90 via-cyan-800/80 to-indigo-700/80 dark:from-white dark:via-cyan-200 dark:to-indigo-200">
            Choose Your Event Experience
          </h1>
          <p className="text-gray-500 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">Unlock a world of opportunities with the perfect ticket for your needs.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tickets.map((ticket) => {
            const isSelected = selectedTicket === ticket.id;
            return (
              <div
                key={ticket.id}
                className={`${cardBaseStyles} ${cardBorder} ${cardBackground} ${cardShadow} ${isSelected ? cardSelected : hoveredTicket === ticket.id ? cardHovered : cardIdle} rounded-2xl p-6`}
                style={getCardStyles(ticket, isSelected, hoveredTicket === ticket.id)}
                onClick={() => handleCardClick(ticket.id)}
                onMouseEnter={() => handleMouseEnter(ticket.id)}
                onMouseLeave={handleMouseLeave}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(ticket.id);
                  }
                }}
                aria-label={`Select ${ticket.type} ticket for $${ticket.price}`}
              >
                {ticket.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-indigo-50 text-indigo-700 px-3 py-0.5 rounded-full text-xs font-semibold shadow">
                      Most Popular
                    </div>
                  </div>
                )}
                {isSelected && (
                  <div className="absolute top-4 left-4">
                    <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center ring-2 ring-indigo-300/60">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-tr ${isSelected ? "from-gray-900/10 to-white/10" : "from-white/30 via-gray-100/10 to-gray-300/5"} shadow`}>
                  <ticket.icon className={`${ticket.accentColor} transition-transform duration-200`} size={26} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white tracking-tight">{ticket.type}</h3>
                <div className="mb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">${animatedNumbers[ticket.id] || 0}</span>
                    <span className="text-gray-400 line-through text-base">${ticket.originalPrice}</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">per person</p>
                </div>
                <div className="space-y-2 mb-5">
                  {ticket.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={`inline-block w-2 h-2 rounded-full align-middle ${ticket.accentColor.replace('text-', 'bg-')}`}></span>
                      <span className="text-gray-700 dark:text-gray-200 text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-2 mt-2 rounded-xl font-semibold text-xs transition-all
                  duration-200 shadow-sm
                  ${isSelected
                    ? 'bg-indigo-600 text-white pointer-events-none'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                  tabIndex={-1}
                  type="button"
                >
                  {isSelected ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Payment Section */}
        {selectedTicket && (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-2xl">
              {showSuccessMessage ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 bg-emerald-300/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-emerald-200/70">
                    <Check size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h2>
                  <p className="text-gray-500 dark:text-gray-300">Your ticket is confirmed. We'll see you at the event!</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-8">
                    <CreditCard className="text-indigo-500" size={28} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Secure Payment</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456"
                        className="w-full bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Expiry Date</label>
                      <input type="text" placeholder="MM/YY"
                        className="w-full bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">CVC</label>
                      <input type="text" placeholder="123"
                        className="w-full bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-600 dark:text-gray-300 mb-1 font-medium">Cardholder Name</label>
                      <input type="text" placeholder="John Doe"
                        className="w-full bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mt-8 mb-6">
                    <div className="flex items-center space-x-1">
                      <Shield className="text-emerald-500" size={18} />
                      <span className="text-gray-500 dark:text-gray-300 text-sm">256-bit SSL Encryption</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="text-cyan-500" size={18} />
                      <span className="text-gray-500 dark:text-gray-300 text-sm">Instant Processing</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Total Amount</span>
                      <span className="text-3xl font-extrabold text-gray-900 dark:text-white">${tickets.find(t => t.id === selectedTicket)?.price}</span>
                    </div>
                    <button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${isProcessing ? 'bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md transform hover:scale-105'}`}
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        'Complete Payment'
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
