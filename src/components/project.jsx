import PropTypes from 'prop-types';

const Project = ({ title, description, link, previewImage }) => {
  return (
    <div className="p-4">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-black text-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img src={previewImage} alt={`${title} preview`} className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-white">{description}</p>
        </div>
      </a>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default Project;
