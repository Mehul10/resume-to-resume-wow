
const Experience = () => {
  const experiences = [
    {
      company: "Mercedes Benz Trucks (Daimler Truck Innovation Center India)",
      role: "Software Engineer",
      period: "August, 2023 - Present",
      location: "Bangalore, Karnataka",
      highlights: [
        "Developed backend services for optimizing vehicle routing of electric trucks using Java (Spring Boot)",
        "Optimized time taken for asynchronous GraphQL requests by 80%",
        "Implemented admin dashboards to support debugging and improve collaboration",
        "Tech Stack: Java, Spring Boot, Hibernate, GraphQL, Azure, PostgreSQL"
      ]
    },
    {
      company: "YugabyteDB",
      role: "Software Development Engineer Intern",
      period: "Jan, 2023 - July, 2023",
      location: "Bangalore, Karnataka",
      highlights: [
        "Automated UI tests using Cypress and TypeScript",
        "Developed integration tests for YugabyteDB and Yugabyte Anywhere Platform",
        "Increased UI test automation coverage by 5%",
        "Tech Stack: TypeScript, Cypress, Jenkins, Git, Python, JIRA"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
              <p className="text-secondary font-medium mt-1">{exp.role}</p>
              <p className="text-gray-500 text-sm mt-1">{exp.period} | {exp.location}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-600">• {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
