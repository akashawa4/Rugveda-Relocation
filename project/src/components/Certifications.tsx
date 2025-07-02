import React from "react";

const certifications = [
  {
    img: "/iso.png",
    alt: "ISO 9001:2015 Certified",
    title: "ISO 9001:2015",
    description: (
      <>
        Certificate No: <b>2713SAFV2021</b>, for Courier Services, Packers & Movers, Transportation and Storage of Goods.
      </>
    ),
  },
  {
    img: "/5star.png",
    alt: "5 Star Ratings",
    title: "5 Star Ratings",
    description: (
      <>
        We have been rated <b>5 stars</b> by our valuable clients in multiple platforms like Google, Facebook etc.
      </>
    ),
  },
  {
    img: "/trusted.png",
    alt: "10+ Years of Trust",
    title: "10+ Years of Trust",
    description: (
      <>
        Since 2007, we are at your service expanding all over the country to be one of the best Packers and Movers company.
      </>
    ),
  },
];

const Certifications = () => (
  <div className="flex flex-wrap justify-center gap-8 py-8">
    {certifications.map((cert, idx) => (
      <div key={idx} className="flex flex-col items-center max-w-xs text-center group">
        <img 
          src={cert.img} 
          alt={cert.alt} 
          className="h-40 w-40 mb-4 transition-transform duration-700 ease-in-out group-hover:rotate-y-360 group-hover:scale-105 cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
        <p className="text-gray-700">{cert.description}</p>
      </div>
    ))}
  </div>
);

export default Certifications; 