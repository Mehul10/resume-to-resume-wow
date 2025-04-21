import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:manibhandari2011@gmail.com"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Mehul10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
