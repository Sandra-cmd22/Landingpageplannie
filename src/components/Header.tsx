import { Menu, X } from "lucide-react";
import { useState } from "react";
import svgPaths from "../imports/svg-zfejmw1j5";
import React from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 38 45"
              >
                <g>
                  <path
                    d={svgPaths.p202d4580}
                    fill="url(#paint0_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p329ddef0}
                    fill="url(#paint1_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p1fd71a30}
                    fill="url(#paint2_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p3a07b200}
                    fill="url(#paint3_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p1edb4ec0}
                    fill="url(#paint4_linear_3_72)"
                  />
                  <path d={svgPaths.pe683d00} fill="url(#paint5_linear_3_72)" />
                  <path
                    d={svgPaths.p318fa600}
                    fill="url(#paint6_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p3f4f4000}
                    fill="url(#paint7_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p37ed3000}
                    fill="url(#paint8_linear_3_72)"
                  />
                  <path
                    d={svgPaths.p24260200}
                    fill="url(#paint9_linear_3_72)"
                  />
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_3_72"
                    x1="24.8655"
                    x2="33.2799"
                    y1="6.22929"
                    y2="6.22929"
                  >
                    <stop stopColor="#FF002B" />
                    <stop offset="1" stopColor="#FF5500" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_3_72"
                    x1="8.33779"
                    x2="37.6249"
                    y1="31.6327"
                    y2="31.6327"
                  >
                    <stop stopColor="#FFD9D9" />
                    <stop offset="1" stopColor="#EFE0D9" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_3_72"
                    x1="0.000700304"
                    x2="37.5871"
                    y1="16.2534"
                    y2="16.2534"
                  >
                    <stop stopColor="#FF002B" />
                    <stop offset="1" stopColor="#FF5500" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_3_72"
                    x1="9.10964"
                    x2="7.0941"
                    y1="1.58199"
                    y2="29.0988"
                  >
                    <stop stopColor="#FF002B" />
                    <stop offset="1" stopColor="#92002B" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint4_linear_3_72"
                    x1="8.33779"
                    x2="29.6771"
                    y1="34.3908"
                    y2="34.3908"
                  >
                    <stop stopColor="#FFB8B8" />
                    <stop offset="1" stopColor="#FFD9D9" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint5_linear_3_72"
                    x1="21.1675"
                    x2="22.3457"
                    y1="36.8458"
                    y2="40.3526"
                  >
                    <stop stopColor="#FFA3A3" />
                    <stop offset="1" stopColor="#FFD9D9" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint6_linear_3_72"
                    x1="13.8465"
                    x2="15.2486"
                    y1="8.95103"
                    y2="2.7291"
                  >
                    <stop stopColor="#A10031" />
                    <stop offset="1" stopColor="#92002B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint7_linear_3_72"
                    x1="2.68264"
                    x2="2.75273"
                    y1="19.5913"
                    y2="19.5913"
                  >
                    <stop stopColor="#FF3600" />
                    <stop offset="1" stopColor="#FF002B" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint8_linear_3_72"
                    x1="0.210992"
                    x2="4.94355"
                    y1="17.6801"
                    y2="17.6801"
                  >
                    <stop stopColor="#A10031" />
                    <stop offset="1" stopColor="#92002B" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint9_linear_3_72"
                    x1="26.8223"
                    x2="30.5864"
                    y1="-2.96908"
                    y2="17.6085"
                  >
                    <stop stopColor="#EB7500" />
                    <stop offset="1" stopColor="#FF5500" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-[#FF4E00] text-xl font-bold">
              PLA<span className="text-[#050517]">NNIE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors"
            >
              Início
            </a>
            <a
              href="#funcionalidades"
              className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#planos"
              className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors"
            >
              Planos
            </a>
            <a
              href="#contato"
              className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#planos"
            className="hidden md:block bg-[#FF4E00] hover:bg-[#FF4E00]/90 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Assine agora
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#5E5E4A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#funcionalidades"
                className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a
                href="#planos"
                className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#contato"
                className="text-[#5E5E4A] hover:text-[#FF4E00] transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="px-4 pt-2">
                <a
                  href="#planos"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-[#FF4E00] hover:bg-[#FF4E00]/90 text-white rounded-lg py-2 transition-colors block text-center"
                >
                  Assine agora
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
