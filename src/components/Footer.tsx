import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import svgPaths from "../imports/svg-zfejmw1j5";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#050517] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 45">
                  <g>
                    <path d={svgPaths.p202d4580} fill="url(#paint0_linear_footer)" />
                    <path d={svgPaths.p329ddef0} fill="url(#paint1_linear_footer)" />
                    <path d={svgPaths.p1fd71a30} fill="url(#paint2_linear_footer)" />
                    <path d={svgPaths.p3a07b200} fill="url(#paint3_linear_footer)" />
                    <path d={svgPaths.p1edb4ec0} fill="url(#paint4_linear_footer)" />
                    <path d={svgPaths.pe683d00} fill="url(#paint5_linear_footer)" />
                    <path d={svgPaths.p318fa600} fill="url(#paint6_linear_footer)" />
                    <path d={svgPaths.p3f4f4000} fill="url(#paint7_linear_footer)" />
                    <path d={svgPaths.p37ed3000} fill="url(#paint8_linear_footer)" />
                    <path d={svgPaths.p24260200} fill="url(#paint9_linear_footer)" />
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer" x1="24.8655" x2="33.2799" y1="6.22929" y2="6.22929">
                      <stop stopColor="#FF002B" />
                      <stop offset="1" stopColor="#FF5500" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer" x1="8.33779" x2="37.6249" y1="31.6327" y2="31.6327">
                      <stop stopColor="#FFD9D9" />
                      <stop offset="1" stopColor="#EFE0D9" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_footer" x1="0.000700304" x2="37.5871" y1="16.2534" y2="16.2534">
                      <stop stopColor="#FF002B" />
                      <stop offset="1" stopColor="#FF5500" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_footer" x1="9.10964" x2="7.0941" y1="1.58199" y2="29.0988">
                      <stop stopColor="#FF002B" />
                      <stop offset="1" stopColor="#92002B" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_footer" x1="8.33779" x2="29.6771" y1="34.3908" y2="34.3908">
                      <stop stopColor="#FFB8B8" />
                      <stop offset="1" stopColor="#FFD9D9" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_footer" x1="21.1675" x2="22.3457" y1="36.8458" y2="40.3526">
                      <stop stopColor="#FFA3A3" />
                      <stop offset="1" stopColor="#FFD9D9" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_footer" x1="13.8465" x2="15.2486" y1="8.95103" y2="2.7291">
                      <stop stopColor="#A10031" />
                      <stop offset="1" stopColor="#92002B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_footer" x1="2.68264" x2="2.75273" y1="19.5913" y2="19.5913">
                      <stop stopColor="#FF3600" />
                      <stop offset="1" stopColor="#FF002B" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_footer" x1="0.210992" x2="4.94355" y1="17.6801" y2="17.6801">
                      <stop stopColor="#A10031" />
                      <stop offset="1" stopColor="#92002B" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_footer" x1="26.8223" x2="30.5864" y1="-2.96908" y2="17.6085">
                      <stop stopColor="#EB7500" />
                      <stop offset="1" stopColor="#FF5500" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[#FF4E00] text-xl font-bold">
                PLA<span className="text-white">NNIE</span>
              </span>
            </div>
            
            <p className="text-[#CAC9B7] mb-6 leading-relaxed">
              Sistema completo de agendamento para salões, clínicas e prestadores de serviços profissionais.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#FF4E00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4E00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF4E00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4E00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF4E00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4E00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF4E00]/20 rounded-lg flex items-center justify-center hover:bg-[#FF4E00] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#planos" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CAC9B7] hover:text-[#FF4E00] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF4E00]" />
                <span className="text-[#CAC9B7]">contato@plannnie.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF4E00]" />
                <span className="text-[#CAC9B7]">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF4E00]" />
                <span className="text-[#CAC9B7]">São Paulo, SP</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Horário de Atendimento</h4>
              <div className="text-sm text-[#CAC9B7] space-y-1">
                <div>Segunda à Sexta: 9h às 18h</div>
                <div>Sábado: 9h às 12h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-[#A2A28C]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#CAC9B7] text-sm">
              © 2024 Plannnie. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-[#CAC9B7] text-sm">Feito com ❤️ no Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}