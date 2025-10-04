import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 89",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Até 100 agendamentos/mês",
        "1 profissional",
        "Painel básico",
        "Suporte por email",
        "App mobile"
      ],
      buttonText: "Começar teste grátis",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 159",
      period: "/mês",
      description: "Ideal para negócios em crescimento",
      features: [
        "Agendamentos ilimitados",
        "Até 5 profissionais",
        "Relatórios avançados",
        "Suporte prioritário",
        "App mobile",
        "Integração WhatsApp",
        "Pagamentos online",
        "Backup automático"
      ],
      buttonText: "Assinar agora",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Premium",
      price: "R$ 259",
      period: "/mês",
      description: "Para empresas estabelecidas",
      features: [
        "Tudo do Profissional",
        "Profissionais ilimitados",
        "Multi-estabelecimentos",
        "API personalizada",
        "Suporte 24/7",
        "Treinamento dedicado",
        "Personalização avançada",
        "Gerente de conta"
      ],
      buttonText: "Falar com vendas",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-[#F5F5EA] to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050517] mb-6">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-[#5E5E4A] max-w-3xl mx-auto">
            Planos flexíveis que crescem junto com seu negócio. Teste grátis por 14 dias, sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-[#FF4E00] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF4E00] text-white px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-[#050517] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#5E5E4A] mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#050517]">{plan.price}</span>
                  <span className="text-[#5E5E4A] ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-[#A2A28C] mt-2">*cobrado mensalmente</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#D3F26A] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#050517]" />
                    </div>
                    <span className="text-[#5E5E4A]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 rounded-lg ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-[#FF4E00] hover:bg-[#FF4E00]/90 text-white' 
                    : 'bg-transparent border-2 border-[#FF4E00] text-[#FF4E00] hover:bg-[#FF4E00] hover:text-white'
                }`}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#5E5E4A] mb-4">
            Precisa de algo personalizado? 
            <a href="#contato" className="text-[#FF4E00] hover:underline ml-1">
              Entre em contato
            </a>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#A2A28C]">
            <span>✓ Cancelamento a qualquer momento</span>
            <span>✓ Suporte incluído</span>
            <span>✓ Migração gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
}