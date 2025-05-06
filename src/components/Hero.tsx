import { Github, Linkedin, Mail, Phone, FileText, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  
  const email = 'manibhandari2011@gmail.com';
  const phone = '+919910513568';
  
  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setEmailCopied(true);
        toast.success('Email copied to clipboard!', {
          position: 'bottom-left',
        });
        setTimeout(() => setEmailCopied(false), 2000);
      } else {
        setPhoneCopied(true);
        toast.success('Phone number copied to clipboard!', {
          position: 'bottom-left',
        });
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy to clipboard', {
        position: 'bottom-left',
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted/50">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Mehul Bhandari
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in">
              Software Engineer at Mercedes Benz Trucks
            </h2>
            <p className="text-muted-foreground mb-8 animate-fade-in">
              Specialized in backend development with Java Spring Boot and cloud technologies. Currently optimizing electric truck routing systems and building scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh] bg-background dark:bg-background">
                  <iframe
                    src="/Mehul_Bhandari_Resume.pdf"
                    className="w-full h-full"
                  ></iframe>
                </DialogContent>
              </Dialog>
              <a href="#contact">
                <Button variant="outline" className="w-full sm:w-auto border-primary hover:bg-accent dark:border-primary dark:hover:bg-accent">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </a>
            </div>
            <div className="flex space-x-4 animate-fade-in">
              <a href="https://github.com/Mehul10" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => copyToClipboard(email, 'email')}
                      className="p-2 rounded-full hover:bg-accent transition-colors"
                    >
                      {emailCopied ? <Check className="w-6 h-6 text-green-500" /> : <Mail className="w-6 h-6" />}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{email}</p>
                    <p className="text-xs text-muted-foreground">{emailCopied ? 'Copied!' : 'Click to copy'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <a href="https://www.linkedin.com/in/mehhul/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => copyToClipboard(phone, 'phone')}
                      className="p-2 rounded-full hover:bg-accent transition-colors"
                    >
                      {phoneCopied ? <Check className="w-6 h-6 text-green-500" /> : <Phone className="w-6 h-6" />}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">{phone}</p>
                    <p className="text-xs text-muted-foreground">{phoneCopied ? 'Copied!' : 'Click to copy'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:pb-48">
            <img 
              src="/lovable-uploads/9f30336a-c68d-4316-8062-292b9259a508.png"
              alt="Mehul Bhandari"
              className="rounded-full w-48 h-48 object-cover shadow-lg animate-fade-in md:mb-16"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mx-auto animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
