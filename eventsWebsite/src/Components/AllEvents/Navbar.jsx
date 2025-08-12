import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    name: 'AI Software',
    href: 'https://flivo.ai/ai-software/',
    megaMenu: [
      { 
        title: 'Flivo AI Application', 
        description: 'Cutting-edge artificial intelligence to streamline preparation.', 
        href: 'https://flivo.ai/ai-software/', 
        imgSrc: 'https://flivo.ai/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-17-at-17.52.44.jpeg' 
      },
      { 
        title: 'Business Process', 
        description: 'Boosts efficiency, cuts costs, drives innovation.', 
        href: 'https://flivo.ai/ai-business-process/', 
        imgSrc: 'https://flivo.ai/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-17-at-17.52.44.jpeg' 
      },
      { 
        title: 'Enterprise System', 
        description: 'Scales operations, boosts efficiency, enables smart decisions.', 
        href: 'https://flivo.ai/ai-enterprise-system/', 
        imgSrc: 'https://flivo.ai/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-17-at-17.52.44.jpeg' 
      },
    ],
    callToAction: {
      title: 'Book A Demo',
      description: 'Schedule a personalized demo with our experts to see our technology in action',
      href: 'https://flivo.ai/contact/',
      linkText: 'Build AI →'
    }
  },
  {
    name: 'Industries',
    href: 'https://flivo.ai/industries/',
    megaMenu: [
      { title: 'Manufacturing', href: 'https://flivo.ai/industries-manufacturing/', imgSrc: 'https://flivo.ai/wp-content/uploads/2024/05/5-2.png' },
      { title: 'Healthcare', href: 'https://flivo.ai/industries-healthcare/', imgSrc: 'https://flivo.ai/wp-content/uploads/2024/05/4-2.png' },
      { title: 'Finance', href: 'https://flivo.ai/industries-finance/', imgSrc: 'https://flivo.ai/wp-content/uploads/2024/05/2-2.png' },
      { title: 'Government', href: 'https://flivo.ai/industries-government/', imgSrc: 'https://flivo.ai/wp-content/uploads/2024/05/1.png' },
      { title: 'Consumer Goods', href: 'https://flivo.ai/industries-consumer-goods/', imgSrc: 'https://via.placeholder.com/150x200/cccccc/333333?text=Consumer+Goods' },
      { title: 'Automotive', href: 'https://flivo.ai/industries-automotive/', imgSrc: 'https://via.placeholder.com/150x200/cccccc/333333?text=Automotive' },
    ]
  },
  { name: 'Customers', href: 'https://flivo.ai/customers/' },
  {
    name: 'Resources',
    href: 'https://flivo.ai/resources/',
    megaMenu: [
      { title: 'Careers', description: 'We are always looking for dynamic individuals eager to grow with us.', href: 'https://flivo.ai/careers/' },
      { title: 'Company', description: 'Meet our diverse team dedicated to pushing the boundaries of technology.', href: 'https://flivo.ai/company/' },
      { title: 'Market Place', description: 'Empower your projects with our curated selection of scalable API solutions.', href: 'https://marketplace.dev1.flivo.ai/' },
      { title: 'AI Community', description: 'Connect, collaborate, and innovate with cutting-edge AI insights.', href: '#' },
    ]
  },
  { name: 'KnowledgeBase', href: 'https://knowledgebase.dev1.flivo.ai/' },
  { name: 'Events', href: 'https://events.flivo.ai/' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Only hide if not hovered
      if (!isHovered) {
        setIsHidden(currentScrollY > lastScrollY.current && currentScrollY > 100);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (submenuName) => {
    setOpenMobileSubmenu(openMobileSubmenu === submenuName ? null : submenuName);
  };

  const getHeaderClasses = () => {
    let classes = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 ';
    
    if (isHovered) {
      classes += 'bg-white shadow-md translate-y-0 ';
    } else if (isScrolled) {
      classes += 'bg-white shadow-md ';
      classes += isHidden ? '-translate-y-full' : 'translate-y-0';
    } else {
      classes += 'bg-[#181818] ';
      classes += isHidden ? '-translate-y-full' : 'translate-y-0';
    }
    
    return classes;
  };

  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-300 font-medium text-base ';
    return baseClasses + (isScrolled || isHovered ? 'text-black' : 'text-white');
  };

  const getLogoClasses = () => {
    const baseClasses = 'h-10 w-auto transition-all duration-300 ';
    if (isScrolled || isHovered) {
      return baseClasses +'invert'; // Normal logo
    }
    return baseClasses ; // White logo on dark background
  };

  const getButtonClasses = () => {
    const baseClasses = 'text-base font-medium border px-4 py-2 rounded-md transition-all duration-300 ';
    if (isScrolled || isHovered) {
      return baseClasses + 'border-black text-black hover:bg-black hover:text-white';
    }
    return baseClasses + 'border-white text-white hover:bg-white hover:text-black';
  };

  return (
    <header 
      className={getHeaderClasses()}
      ref={headerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="https://flivo.ai/" className="flex-shrink-0">
          <img 
            src="https://flivo.ai/wp-content/uploads/2024/04/Orange-Minimalist-Initial-Letter-E-Logo-23-e1714132016406.png" 
            alt="FlivoAI Logo" 
            className={getLogoClasses()}
          />
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <a href={link.href} className={getLinkClasses()}>
                {link.name}
              </a>
              {link.megaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-7xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                  <div className="bg-white shadow-xl rounded-lg mx-auto ">
                    <div className={`flex p-8 gap-6 ${link.name === 'Industries' ? 'justify-center' : ''}`}>
                      {link.megaMenu.map((item) => (
                        <a 
                          key={item.title} 
                          href={item.href} 
                          className={`block group/item p-4 rounded-lg hover:bg-gray-50 transition-colors ${
                            link.name === 'Industries' ? 'flex-none w-40 text-center' : 'flex-1'
                          }`}
                        >
                          {item.imgSrc && (
                            <img 
                              src={item.imgSrc} 
                              alt={item.title} 
                              className={`rounded-md mb-4 object-cover ${
                                link.name === 'Industries' 
                                  ? 'h-24 w-full' 
                                  : 'h-20 w-16'
                              }`}
                              loading="lazy"
                            />
                          )}
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                          {item.description && (
                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                          )}
                        </a>
                      ))}
                      {link.callToAction && (
                        <div className="flex-1 p-6 bg-gray-100 rounded-lg ">
                          <h3 className="font-bold text-gray-900 text-lg mb-3">{link.callToAction.title}</h3>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{link.callToAction.description}</p>
                          <a 
                            href={link.callToAction.href} 
                            className="inline-block font-bold hover:text-blue-800 transition-colors"
                          >
                            {link.callToAction.linkText}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="https://flivo.ai/contact/" className={getButtonClasses()}>
            Contact Us
          </a>
        </nav>
        
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className={getLinkClasses()} 
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-5 flex justify-between items-center border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-gray-500 hover:text-gray-800 transition-colors" 
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-5 overflow-y-auto max-h-[calc(100vh-120px)] bg-white">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-gray-200 pb-2">
                  <div className="flex justify-between items-center">
                    <a href={link.href} className="text-gray-700 font-medium flex-grow py-2">
                      {link.name}
                    </a>
                    {link.megaMenu && (
                      <button 
                        onClick={() => toggleMobileSubmenu(link.name)} 
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-200 ${
                            openMobileSubmenu === link.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>
                  {link.megaMenu && (
                    <div className={`pl-4 pt-2 overflow-hidden transition-all duration-300 ${
                      openMobileSubmenu === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <ul className="space-y-2">
                        {link.megaMenu.map(item => (
                          <li key={item.title}>
                            <a 
                              href={item.href} 
                              className="block text-gray-600 hover:text-blue-600 py-1 transition-colors"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                        {link.callToAction && (
                          <li>
                            <a 
                              href={link.callToAction.href} 
                              className="block text-blue-600 hover:text-blue-800 py-1 font-medium transition-colors"
                            >
                              {link.callToAction.title}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <a 
              href="https://flivo.ai/contact/" 
              className="block w-full text-center mt-6 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;