import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, link, previewImage }) => {
  return (
    <div className="relative group overflow-hidden border border-blue-400 rounded-lg shadow-md w-full max-w-xs">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <div className="relative w-full aspect-video">
          <img 
            src={previewImage} 
            alt={`${title} logo`} 
            className="object-contain w-full h-full" 
          />
        </div>
      </a>
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 w-full h-full items-center justify-center">
          <div className="relative w-full h-full ">           
            <img 
              src={imageUrl} 
              alt={`${title} screenshot`} 
              className="object-contain w-full h-full" 
            />
          </div>
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired, // Required for hover effect
  link: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default Project;
