import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Industries', href: '/industries' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const servicesMenu = [
    { name: 'All Services', href: '/services' },
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app' },
    { name: 'Software Development', href: '/services/software' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' }
  ];

  const whatsappNumber = '+919848000876';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I would like to discuss a project`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_enterprise-tech-15/artifacts/n7fl5o8t_1.png" 
              alt="Deaxautt Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                        location.pathname.startsWith('/services') ? 'text-blue-600' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-background border rounded-lg shadow-lg py-2">
                        {servicesMenu.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-sm hover:bg-accent transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                      location.pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-transform hover:scale-110"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="outline" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;