import React from 'react';

const Header = ({ bg, title, subtitle, buttonText, onGetStartedClick }) => {
  return (
    <header
    //   className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    //   style={{
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
    >
      {/* Dark overlay for better text contrast */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div> */}

      {/* Content */}
      {/* <div className="relative z-20 p-4 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Hello</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">{subtitle}</p>
        <button
          onClick={onGetStartedClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div> */}
    </header>
  );
};

export default Header;
