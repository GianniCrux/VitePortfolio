import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, link, previewImage }) => {
  return (
    <div className="relative group overflow-hidden border border-blue-400 rounded-lg shadow-md w-full max-w-xs h-[300px] sm:h-[350px] md:h-[400px]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 h-full">
        <h3 className="text-lg font-bold mb-2 text-blue-600">{title}</h3>
        <div className="relative w-full aspect-video mb-4">
          <img 
            src={previewImage} 
            alt={`${title} logo`} 
            className="object-contain w-full h-full" 
          />
        </div>
      </a>
      <div className="absolute inset-0 bg-black bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="overflow-y-auto scrollbar-hide mb-4 max-h-[40%]">
              <p className="text-blue-600">{description}</p>
            </div>
            <div className="relative w-full flex-grow">           
              <img 
                src={imageUrl} 
                alt={`${title} screenshot`} 
                className="object-contain w-full h-full" 
              />
            </div>
          </div>
        </a>
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
};

export default Project;