import { ArrowRightIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Project = ({ title, description, imageUrl, link, previewImage, passkey, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white overflow-hidden border border-black rounded-lg shadow-md w-full transition-all duration-500 ease-in-out hover:shadow-2xl"
      style={{
        height: isHovered ? '300px' : '250px',
        transform: isHovered ? 'translateY(-10px)' : 'none',
        zIndex: isHovered ? '10' : 'auto'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block h-full">
        <div className="relative flex justify-center items-center w-full h-full">
          <img 
            src={previewImage} 
            alt={`${title} logo`} 
            className={`object-cover ${width} h-full transition-all duration-500 ease-in-out transform ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`} 
          />
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-yellow-100 bg-opacity-90 flex items-center justify-center transition-all duration-500 ease-in-out transform"
        style={{ 
          opacity: isHovered ? '1' : '0',
          transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        <div className="p-4 w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-semibold text-black w-2/3 transition-transform duration-500 ease-in-out transform"
                  style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                    opacity: isHovered ? '1' : '0'
                  }}
              >{title}</h3>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-none text-black px-2 py-1 rounded text-xs hover:text-gray-700 transition-all duration-300 flex items-center space-x-1"
                style={{
                  transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: isHovered ? '1' : '0',
                  transition: 'all 500ms ease-in-out 100ms'
                }}
              >
                <span className="underline text-medium">Discover More</span>
                <ArrowRightIcon size={12} />
              </a>
            </div>
            <div className="overflow-y-auto scrollbar-hide mb-4 max-h-[60%]">
              <p className="text-black text-xs font-medium md:text-sm transition-all duration-500 ease-in-out"
                 style={{
                   transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                   opacity: isHovered ? '1' : '0',
                   transition: 'all 500ms ease-in-out 200ms'
                 }}
              >{description}</p>
              {passkey && (
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 space-y-2 md:space-y-0 transition-all duration-500 ease-in-out"
                     style={{
                       transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                       opacity: isHovered ? '1' : '0',
                       transition: 'all 500ms ease-in-out 300ms'
                     }}
                >
                  <pre className="text-xs text-gray-800 break-all">{passkey}</pre>
                </div>
              )}
            </div>
            <div className="relative w-full h-16 md:h-24 flex items-end justify-between">
              <img 
                src={imageUrl} 
                alt={`${title} screenshot`} 
                className="object-contain w-3/4 h-full transition-all duration-500 ease-in-out transform"
                style={{
                  transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  opacity: isHovered ? '1' : '0',
                  transition: 'all 500ms ease-in-out 400ms'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  passkey: PropTypes.string,
  width: PropTypes.string.isRequired,
};

export default Project;