import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center text-white h-[600px] flex flex-col justify-end items-start px-8"
        style={{ backgroundImage: 'url("/data-image.jpg")' }}
      >
        {/* Use the alternative class to enforce white text */}
        <h1 className="hero-heading text-5xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          I am so happy that you are here to see my work. Feel free to explore and learn more about what I do.
        </p>
      </section>

      {/* About Me Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a passionate developer with a love for creating innovative solutions. With a background in various technologies, I strive to build applications that make a difference. My journey in the tech world has been fueled by curiosity and a desire to continuously learn and grow.
        </p>
      </section>
    </div>
  );
};

export default HomePage;


