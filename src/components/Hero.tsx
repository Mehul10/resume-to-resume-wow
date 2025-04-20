import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
              Mehul Bhandari
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6 animate-fade-in">
              Software Engineer at Mercedes Benz Trucks
            </h2>
            <p className="text-gray-600 mb-8 animate-fade-in">
              Specialized in backend development with Java Spring Boot and cloud technologies. Currently optimizing electric truck routing systems and building scalable solutions.
            </p>
            <div className="flex space-x-4 animate-fade-in">
              <a href="https://github.com/Mehul10" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:manibhandari2011@gmail.com" 
                 className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mehhul/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="tel:+919910513568" 
                 className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:mb-40">
            <img 
              src="/lovable-uploads/9f30336a-c68d-4316-8062-292b9259a508.png"
              alt="Mehul Bhandari"
              className="rounded-full w-48 h-48 object-cover shadow-lg animate-fade-in md:mb-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
