import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marina Santos",
      role: "Proprietária do Salon Bella",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b45c8e13?w=150&h=150&fit=crop&crop=face",
      content: "O Plannnie revolucionou meu salão! Reduziu em 70% os no-shows e aumentou nossa eficiência. A equipe adora a facilidade do sistema.",
      rating: 5
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Clínica Estética Renovar",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      content: "Impressionante como um sistema pode mudar tanto a gestão. Os relatórios me ajudam a tomar decisões muito mais assertivas para o negócio.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Studio de Beleza Ana Paula",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Meus clientes adoram agendar pelo app. É prático, rápido e nunca mais tive problemas de agenda dupla. Recomendo para todos os colegas!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050517] mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-[#5E5E4A] max-w-3xl mx-auto">
            Mais de 500 profissionais já transformaram seus negócios com o Plannnie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#F5F5EA] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF4E00] text-[#FF4E00]" />
                ))}
              </div>
              
              <blockquote className="text-[#5E5E4A] mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-[#050517]">{testimonial.name}</div>
                  <div className="text-sm text-[#A2A28C]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[#FF4E00] mb-2">500+</div>
            <div className="text-[#5E5E4A]">Clientes Satisfeitos</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#FF4E00] mb-2">50k+</div>
            <div className="text-[#5E5E4A]">Agendamentos/Mês</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#FF4E00] mb-2">98%</div>
            <div className="text-[#5E5E4A]">Taxa de Satisfação</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#FF4E00] mb-2">4.9★</div>
            <div className="text-[#5E5E4A]">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
}