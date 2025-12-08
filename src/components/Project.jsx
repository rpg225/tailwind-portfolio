import { useState, useEffect, useRef } from 'react';
import Project1Card from "./Project1Card"
import Project2Card from "./Project2Card"
import Project3Card from "./Project3Card"
import Project4Card from "./Project4Card"
import Project5Card from "./Project5Card"
import Project6Card from "./Project6Card"
import Project7Card from "./Project7Card"

const Project = () => {
  const [dealtCards, setDealtCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const cards = [
    /* NFT Minter */
    <Project1Card key="card1" />,
    /* Learn French React */
    <Project2Card key="card2" />,
    /* Asteroids Game */ 
    <Project3Card key="card3" />,
    /* Babylon 3d app */
    <Project4Card key="card4" />,
    /* QR App */
    <Project5Card key="card5" />,
    /* paint APP */
    <Project6Card key="card6" />,
    /* voltorb flip app */
    <Project7Card key="card7" />,
    <Project4Card key="card8" />,
    <Project4Card key="card9" />,
    <Project4Card key="card10" />,
    <Project4Card key="card11" />,
    <Project4Card key="card12" />,
  ];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Mobile: animate cards as they scroll into view
      const observers = cardRefs.current.map((ref, index) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setDealtCards(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          },
          { threshold: 0.2 }
        );

        if (ref) {
          observer.observe(ref);
        }

        return observer;
      });

      return () => {
        observers.forEach((observer, index) => {
          if (cardRefs.current[index]) {
            observer.unobserve(cardRefs.current[index]);
          }
        });
      };
    } else {
      // Desktop: deal all cards at once when section is visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            cards.forEach((_, index) => {
              setTimeout(() => {
                setDealtCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        },
        { threshold: 0.1 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [isMobile, isVisible]);

  return (
    <div className="bg-red-200">
      <section 
        ref={sectionRef}
        className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 bg-red-200 pb-6 text-center"
      >
        <h2 
          className={`text-3xl font-bold py-6 bg-red-200 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          Welcome to My Project Page
        </h2>
        
        {/* Grid layout - responsive cards with casino dealing animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000 justify-items-center sm:justify-items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`transform-gpu transition-all duration-700 ease-out ${
                dealtCards.includes(index)
                  ? 'opacity-100 translate-x-0 translate-y-0 rotate-0'
                  : isMobile
                    ? 'opacity-0 translate-y-16'
                    : 'opacity-0 -translate-x-[50vw] -translate-y-[30vh] -rotate-45 scale-50'
              }`}
              style={{
                transitionDelay: isMobile ? '0ms' : `${index * 150}ms`,
                transformOrigin: 'center center',
              }}
            >
              <div 
                className="hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-300 cursor-pointer"
                style={{
                  animation: dealtCards.includes(index) && !isMobile
                    ? `cardFlip 0.6s ease-out ${index * 150}ms` 
                    : 'none'
                }}
              >
                {card}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes cardFlip {
          0% {
            transform: rotateY(180deg) scale(0.8);
          }
          50% {
            transform: rotateY(90deg) scale(0.9);
          }
          100% {
            transform: rotateY(0deg) scale(1);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Project;