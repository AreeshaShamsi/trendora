import React from 'react';

const featuredItems = [
  {
    title: "Smart Formal Edition",
    subtitle: "Cool Forward Edition",
    price: "120.25 USD",
    image: "https://m.media-amazon.com/images/I/61VMgfdesAL._AC_SX569_.jpg"
  },
  {
    title: "Slim Fit Polos",
    subtitle: "Summer Staples",
    price: "45.00 USD",
    image: "https://m.media-amazon.com/images/I/61XEysZ0IeL._AC_SX569_.jpg"
  },
  {
    title: "Chic Office Wear",
    subtitle: "Classic Fit",
    price: "85.75 USD",
    image: "https://m.media-amazon.com/images/I/61Ic7lcw7NL._AC_SY550_.jpg"
  },
  {
    title: "Elegant Suit",
    subtitle: "Tailored Look",
    price: "190.00 USD",
    image: "https://m.media-amazon.com/images/I/51SmPVDwMGL._AC_SX569_.jpg"
  },
  {
    title: "Modern Casual",
    subtitle: "Weekender",
    price: "59.00 USD",
    image: "https://m.media-amazon.com/images/I/81vsb0X3zNL._AC_SX569_.jpg"
  },
  {
  title: "Oversized Casual",
    subtitle: "Weekender",
    price: "59.00 USD",
    image: "https://m.media-amazon.com/images/I/6157bX78HeL._AC_SY550_.jpg"
  }
];

const FeaturedCollection = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto ">
      <h2 className="text-4xl md:text-3xl font-semibold text-center mb-6">FEATURED COLLECTION</h2>
      
      <div className="overflow-x-auto ">
        <div className="flex space-x-4 snap-x snap-mandatory px-4 md:px-10">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[240px] sm:w-[280px] md:w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded-full shadow">
                NEW
              </div>
              <div className="absolute bottom-4 left-4 text-left text-white drop-shadow">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm">{item.subtitle}</p>
                <p className="text-sm mt-1">From {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
