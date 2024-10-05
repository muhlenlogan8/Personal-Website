import projectData from '../data/projects.json';

const Projects = () => {
  return (
    <>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-12">12 Projects in 12 Months</h2>
        <div className="timeline">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-left" : "timeline-right"
              }`}
            >
              <div className="timeline-content">
                <h3 className="text-2xl font-bold">
                  {project.month}: {project.projectTitle}
                </h3>
                <p className="text-md mt-2">{project.description}</p>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.projectTitle}
                    className="mt-4"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
