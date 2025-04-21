const Projects = () => {
  const projects = [
    {
      title: "Real Time Chat Rooms",
      period: "April, 2022 - June, 2022",
      description: "A real-time chat application using Socket.io and Node.js",
      tech: ["Node.js", "Express.js", "Socket.io", "HTML", "EJS", "JavaScript", "CSS"],
      highlights: [
        "Implemented real-time connections using Socket.io",
        "Supports multiple chat rooms with isolated messaging",
        "Users can send and receive real-time messages"
      ]
    },
    {
      title: "Micro Blogging Website",
      period: "December, 2021 - March, 2022",
      description: "A platform for users to post microblogs",
      tech: ["Node.js", "MySQL", "Sequelize", "HTML", "Express.js", "JavaScript", "Bootstrap"],
      highlights: [
        "Built a platform for users to post microblogs",
        "Implemented API calls for frontend-backend communication",
        "Used Sequelize ORM for database management"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{project.period}</p>
              <p className="text-muted-foreground mt-3">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground text-sm">• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
