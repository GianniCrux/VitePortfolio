import PropTypes from 'prop-types';

const Project = ({ title, description, imageUrl, link, previewImage, passkey }) => {
  return (
    <div className="relative bg-yellow-100 group overflow-hidden border border-amber-400 rounded-lg shadow-md w-full h-[250px] transition-all duration-300 hover:shadow-lg hover:border-amber-500">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 h-full">
        <h3 className="text-lg font-light mb-2 text-amber-600">{title}</h3>
        <div className="relative w-full h-24 mb-4">
          <img 
            src={previewImage} 
            alt={`${title} logo`} 
            className="object-contain w-full h-full" 
          />
        </div>
      </a>
      <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="overflow-y-auto scrollbar-hide mb-4 max-h-[60%]">
              <p className="text-white text-sm">{description}</p>
              {passkey && <pre className="text-xs text-gray-400 mt-2">{passkey}</pre>}
            </div>
            <div className="relative w-full h-24">           
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
  passkey: PropTypes.string,
};

export default Project;