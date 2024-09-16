import { ArrowRightIcon } from 'lucide-react';
import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, link, previewImage, passkey, width }) => {
  return (
    <div className="relative bg-white group overflow-hidden border border-amber-400 rounded-lg shadow-md w-full h-[250px] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:h-[300px] hover:w-[105%] hover:translate-y-[-10px] hover:z-10">
      <div className="block h-full">
        <div className="relative flex justify-center items-center w-full h-full">
          <img 
            src={previewImage} 
            alt={`${title} logo`} 
            className={`object-cover ${width} h-full transition-opacity duration-300 group-hover:opacity-0`} 
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-2xl font-light mb-2 text-amber-600">{title}</h3>
            <div className="overflow-y-auto scrollbar-hide mb-4 max-h-[60%]">
              <p className="text-white text-sm">{description}</p>
              {passkey && (
                <div className="flex justify-between items-center mt-2">
                  <pre className="text-xs text-gray-400">{passkey}</pre>
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
            <div className="relative w-full h-24 flex items-end justify-between">
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