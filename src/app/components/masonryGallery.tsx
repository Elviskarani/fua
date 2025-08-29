import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  className: string;
}

interface MasonryGalleryProps {
  className?: string;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ className = '' }) => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      alt: "Professional laundry pickup",
      className: "col-span-1 row-span-1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1489274495757-95c7c837ad3a?w=400&h=300&fit=crop",
      alt: "Quality clothing care",
      className: "col-span-1 row-span-1"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      alt: "Mobile app interface",
      className: "col-span-1 row-span-1"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
      alt: "Clean folded clothes",
      className: "col-span-1 row-span-1"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=200&fit=crop",
      alt: "Washing machine process",
      className: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      alt: "Happy customer experience",
      className: "col-span-1 row-span-2"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=300&fit=crop",
      alt: "Professional dry cleaning",
      className: "col-span-2 row-span-1"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1521654947043-65150d56e9af?w=400&h=300&fit=crop",
      alt: "Delivery service",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className={`py-0 ${className}`}>
      <div className="w-full">
        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-0 h-96">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group cursor-pointer ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile Grid - Shown only on mobile */}
        <div className="grid grid-cols-2 gap-1 lg:hidden">
          {images.slice(0, 6).map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Tablet Grid - Medium screens */}
        <div className="hidden md:grid lg:hidden grid-cols-4 gap-1 h-80">
          {images.slice(0, 8).map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden group cursor-pointer ${
                index === 5 ? 'col-span-2' : 'col-span-1'
              } ${index >= 6 ? 'row-span-1' : 'row-span-1'}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;