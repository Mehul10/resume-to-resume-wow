import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      title: "Ideas & Innovation Speak Up",
      image: "/certificates/ideas-innovation.jpg",
      description: "Developed backend for multiple Connectivity AE topics with vehicle and cloud interfaces for real-time monitoring and data exchange."
    },
    {
      title: "Product Innovation Award",
      image: "/certificates/ace-product.jpg",
      description: "Built a solution for optimal vehicle routing for electric trucks, providing energy-efficient routes and reducing charging costs, available as a subscription-based SW Only feature.",
      imagePosition: "object-[center_15%]"
    },
    {
      title: "Internal Publication",
      image: "/certificates/publication.jpg",
      description: "Published paper on 'Optimal Vehicle Routing' detailing rapid cloud application development with streaming architecture and performance improvements."
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments from Daimler Truck Innovation Center India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="relative h-64 cursor-pointer"
                onClick={() => {
                  setSelectedImage(cert.image);
                  setCurrentIndex(index);
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={`w-full h-full object-cover ${cert.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Click to view</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full bg-background p-0 relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <div className="relative aspect-[4/3] w-full">
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 hover:bg-background"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 hover:bg-background"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certificates; 