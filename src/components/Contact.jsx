import React from "react";

function Contact() {
  return (
    <section className="section">
      <div className="contact-card">
        <h2 className="contact-title">დაგვიკავშირდით</h2>
        <div className="contact-info">მისამართი: თბილისი, Example ქუჩა 10</div>
        <div className="contact-info">ტელეფონი: 032 222 22 22</div>
        <iframe
          className="contact-map"
          src="https://maps.google.com/maps?q=Tbilisi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <a href="tel:0322222222" className="contact-link">დაგვირეკეთ</a>
      </div>
    </section>
  );
}

export default Contact;
