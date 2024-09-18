import React from "react";

const FlipCard = ({ icon, title, imageUrl, link }) => {
  return (
    <div className="relative sm:w-64 sm:h-64 mb-6">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full w-full"
      >
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="flex items-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg h-full">
            <div className="text-white">
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlipCard;
