import { Calendar, BarChart3, Settings, Headphones } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "Sistema completo de agendamento com disponibilidade em tempo real, notificações automáticas e integração com calendários."
    },
    {
      icon: BarChart3,
      title: "Relatórios e Estatísticas",
      description: "Dashboards intuitivos com métricas detalhadas sobre faturamento, clientes mais frequentes e performance do negócio."
    },
    {
      icon: Settings,
      title: "Painel Administrativo",
      description: "Interface simples e poderosa para gerenciar serviços, profissionais, horários e todas as configurações do seu negócio."
    },
    {
      icon: Headphones,
      title: "Suporte Rápido",
      description: "Equipe especializada disponível para ajudar você a aproveitar ao máximo todas as funcionalidades do sistema."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050517] mb-6">
            Funcionalidades que fazem a diferença
          </h2>
          <p className="text-lg text-[#5E5E4A] max-w-3xl mx-auto">
            Desenvolvemos cada funcionalidade pensando na praticidade do seu dia a dia e na satisfação dos seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-[#F5F5EA] to-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4E00] rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-[#050517] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[#5E5E4A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#FF4E00]/10 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">Integração Completa</h4>
              <p className="text-[#5E5E4A] text-sm">WhatsApp, Google Calendar, e principais ferramentas do mercado.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#D3F26A]/20 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">Pagamentos Online</h4>
              <p className="text-[#5E5E4A] text-sm">Aceite pagamentos antecipados e reduza o no-show.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#9F8CE8]/20 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">Multi-usuário</h4>
              <p className="text-[#5E5E4A] text-sm">Gerencie múltiplos profissionais e estabelecimentos.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#FF4E00]/10 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">App Mobile</h4>
              <p className="text-[#5E5E4A] text-sm">Aplicativo nativo para iOS e Android.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#D3F26A]/20 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">Backup Automático</h4>
              <p className="text-[#5E5E4A] text-sm">Seus dados sempre seguros na nuvem.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#9F8CE8]/20 to-transparent p-6 rounded-xl">
              <h4 className="font-bold text-[#050517] mb-2">Personalização</h4>
              <p className="text-[#5E5E4A] text-sm">Adapte o sistema às necessidades do seu negócio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}