const testimonials = [
  {
    id: 1,
    image: "/clients/manoj.webp",
    name: "Manoj Jayant",
    role: "Sales Manager",
    testimonial: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations. Their attention to detail and creative solutions made all the difference."
  },
  {
    id: 2,
    image: "/clients/deepak.webp",
    name: "Deepak kathayat",
    role: "Sales Executive",
    testimonial: "The level of professionalism and technical expertise demonstrated throughout our project was impressive. They turned our vision into reality with remarkable efficiency."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    name: "Sumit Walia",
    role: "Motion & Graphics Designer",
    testimonial: "Their innovative approach to problem-solving and commitment to quality made them stand out. The end result was exactly what we needed for our business growth."
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center py-20">
      <div className="max-w-[1200px] w-full px-8">
        <h2 className="text-4xl font-light text-white mb-12">What Clients Say</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#161616] p-8 rounded-xl hover:bg-[#1c1c1c] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-100 font-medium">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
