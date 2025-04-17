import { Button } from "../utils"

export const Timeline1 = () => {
  const milestones = [
    { year: 1997, content: "Antycip founded, specializing in development tools for real-time embedded applications" },
    { year: 2004, content: "European expansion with new office in Italy" },
    { year: 2008, content: "Joined ST Engineering, securing first major contract with Leonardo" },
    { year: 2017, content: "Opening of customer demo centres across Europe" },
    { year: 2025, content: "Leading innovation in simulation, VR, and immersive solutions" }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-1 w-2 h-full bg-red-600"></div>

          {/* Timeline items */}
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className={`relative mb-12 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="font-bold text-red-600 text-xl mb-2">{milestone.year}</div>
                <div className="text-gray-700">{milestone.content}</div>
              </div>

              {/* Circle marker */}
              <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-white border-4 border-red-600 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button text="Our Full Story" />
        </div>
      </div>
    </section>
  );
};