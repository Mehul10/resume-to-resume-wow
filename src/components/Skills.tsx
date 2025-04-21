const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: [
        "Java",
        "Spring Boot",
        "Python",
        "Django",
        "Django REST Framework",
        "TypeScript",
        "Node.js",
        "Express.js",
        "React"
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Azure",
        "Azure DevOps",
        "Kubernetes",
        "Docker",
        "Jenkins",
        "CI/CD"
      ]
    },
    {
      category: "Databases & Tools",
      skills: [
        "PostgreSQL",
        "MySQL",
        "GraphQL",
        "Git",
        "JIRA"
      ]
    },
    {
      category: "Testing",
      skills: [
        "Cypress",
        "Jest",
        "JUnit",
        "Integration Testing",
        "API Testing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
