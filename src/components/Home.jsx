import React, { useState } from "react";



const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Slider */}
      <section className="relative bg-gray-100 rounded-lg p-8 mb-10">
        <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
        <p className="text-gray-700 mb-4">{slides[currentSlide].desc}</p>
        <div className="flex justify-between max-w-xs mx-auto">
          <button onClick={prevSlide} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">უკან</button>
          <button onClick={nextSlide} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">წინ</button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {infoCards.map((card) => (
          <div key={card.id} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Google Map */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">ჩვენი ლოკაცია</h2>
        <div style={{ width: "100%", height: "400px" }}>
          <iframe
            title="Anagi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.918252350976!2d44.78295031585738!3d41.70709197923339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044728c774e5f7f%3A0x70c7b5a32b0c6d1c!2sAnagi%20Construction%20Company!5e0!3m2!1ska!2sge!4v1687974651234!5m2!1ska!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2025 ანაგი სამშენებლო კომპანია. ყველა უფლება დაცულია.</p>
      </footer>
    </div>
  );
};

export default Home