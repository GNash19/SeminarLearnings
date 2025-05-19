import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation: React.FC = () => {
  const [isSeminarDropdownOpen, setIsSeminarDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let closeTimer: NodeJS.Timeout;

  // Dummy seminar data
  const seminars = [
    { id: 1, title: "Navigating Software Development" }
  ];

  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    setIsSeminarDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Close after 300ms delay
    closeTimer = setTimeout(() => {
      setIsSeminarDropdownOpen(false);
    }, 300);
  };

  const cancelClose = () => {
    clearTimeout(closeTimer);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSeminarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black text-white p-6 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-light tracking-tight">
          SW<span className="font-medium">&T</span>
        </h1>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            Home
          </Link>
          
          {/* Seminars Dropdown */}
          <div 
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="flex items-center gap-1 text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsSeminarDropdownOpen(!isSeminarDropdownOpen)}
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

          <Link to="/documentation" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            Documentation
          </Link>
          <Link to="/about" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;