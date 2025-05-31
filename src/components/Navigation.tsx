import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isSeminarDropdownOpen, setIsSeminarDropdownOpen] = useState(false);
  const [isMobileSeminarDropdownOpen, setIsMobileSeminarDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  let closeTimer: NodeJS.Timeout;

  const seminars = [
    { id: 1, title: "Navigating Software Development" },
    { id: 2, title: "Enhancing Audio Processing" },
    { id: 3, title: "Research Techniques" },
    { id: 4, title: "TherapEase: A Healthcare App" },
    { id: 5, title: "Ins and Outs of Research Project" },
    { id: 6, title: "Academia and Innovation" },
    { id: 7, title: "Prompt Engineering" }
  ];

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSeminarDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileSeminarDropdownOpen(false);
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    setIsSeminarDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setIsSeminarDropdownOpen(false);
    }, 300);
  };

  const cancelClose = () => {
    clearTimeout(closeTimer);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      bg-black text-white border-b border-gray-200
      transition-all duration-500 ease-in-out p-6
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      ${isScrolled ? 'py-3 shadow-lg' : 'py-6'}
    `}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-light tracking-tight">
          SW<span className="font-medium">&T</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            Home
          </Link>
          
          <div 
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsSeminarDropdownOpen(!isSeminarDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isSeminarDropdownOpen}
            >
              Seminars
              <ChevronDown className={`w-4 h-4 transition-transform ${isSeminarDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSeminarDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                onMouseEnter={cancelClose}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-1">
                  {seminars.map((seminar) => (
                    <Link
                      key={seminar.id}
                      to={`/seminars/${seminar.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsSeminarDropdownOpen(false)}
                    >
                      Seminar {seminar.id}: {seminar.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/tour" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            Tour
          </Link>

          <Link to="/documentation" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            Documentation
          </Link>
          <Link to="/about" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`
          md:hidden bg-black absolute top-full left-0 right-0
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}
        `}
      >
        <div className="container mx-auto px-4 space-y-4">
          <Link 
            to="/" 
            className="block text-sm uppercase tracking-wider hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="relative">
            <button 
              className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-gray-300 transition-colors py-2 w-full text-left"
              onClick={() => setIsMobileSeminarDropdownOpen(!isMobileSeminarDropdownOpen)}
            >
              Seminars
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSeminarDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMobileSeminarDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {seminars.map((seminar) => (
                  <Link
                    key={seminar.id}
                    to={`/seminars/${seminar.id}`}
                    className="block text-sm uppercase tracking-wider hover:text-gray-300 transition-colors py-2"
                    onClick={() => {
                      setIsMobileSeminarDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Seminar {seminar.id}: {seminar.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/documentation" 
            className="block text-sm uppercase tracking-wider hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link 
            to="/about" 
            className="block text-sm uppercase tracking-wider hover:text-gray-300 transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;