import TestimonialCard from "./TesmonialCard";


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at Company X",
      text: "This service has transformed the way we do business. Highly recommend it to everyone!",
      image: "/path-to-image.jpg", // Provide the image path
    },
    {
      name: "Jane Smith",
      role: "Lead Developer at Company Y",
      text: "An amazing product with excellent support. Our team has been using it daily.",
      image: "/path-to-image-2.jpg",
    },
    {
      name: "Sam Wilson",
      role: "Designer at Company Z",
      text: "The user interface is super clean, and it's incredibly easy to integrate. Worth every penny!",
      image: "/path-to-image-3.jpg",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
