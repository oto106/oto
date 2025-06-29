import React from "react";

import image1 from "./../assets/anagi1.jpg"
import image2 from "./../assets/anagi2.jpg"
import image3 from "./../assets/anagi3.jpg"
import image4 from "./../assets/anagi4.jpg"

function AboutCompany() {
  return (
    <section className="section">
      <div className="about-card">
        <h2 className="about-title">ჩვენს შესახებ</h2>
        <img src="/images/about/main.jpg" alt="main" className="about-img" />
        <p className="about-text">
          ანაგი არის ერთ-ერთი წამყვანი სამშენებლო კომპანია საქართველოში, რომელსაც წლების განმავლობაში აქვს გამოცდილება დიდი ინფრასტრუქტურული პროექტების შესრულებაში.
        </p>
        <div className="about-gallery">
          {[image1, image2, image3, image4,].map((src, i) => (
            <img key={i} src={src} alt={`thumb${i + 1}`} className="about-img" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;