import { ArrowRightIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Project = ({ title, description, imageUrl, link, previewImage, passkey, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white overflow-hidden border border-amber-400 rounded-lg shadow-md w-full transition-all duration-500 hover:shadow-2xl"
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
            className={`object-cover ${width} h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
          />
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: isHovered ? '1' : '0' }}
      >
        <div className="p-4 w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-xl md:text-2xl font-light mb-2 text-amber-600">{title}</h3>
            <div className="overflow-y-auto scrollbar-hide mb-4 max-h-[60%]">
              <p className="text-white text-xs md:text-sm">{description}</p>
              {passkey && (
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 space-y-2 md:space-y-0">
                  <pre className="text-xs text-gray-400 break-all">{passkey}</pre>
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border-none text-amber-400 px-3 py-1 rounded text-xs hover:text-yellow-200 transition-colors duration-300 flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span className="underline">Discover More</span>
                    <ArrowRightIcon size={12} />
                  </a>
                </div>
              )}
              {!passkey && (
                <div className="flex justify-end mt-2">
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="border-none text-amber-400 px-3 py-1 rounded text-xs hover:text-yellow-200 transition-colors duration-300 flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span className="underline">Discover More</span>
                    <ArrowRightIcon size={12} />
                  </a>
                </div>
              )}
            </div>
            <div className="relative w-full h-16 md:h-24 flex items-end justify-between">
              <img 
                src={imageUrl} 
                alt={`${title} screenshot`} 
                className="object-contain w-3/4 h-full" 
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