import { Button } from "../utils"

export const Feature1 = () => (
  <section className="py-20 bg-black text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img 
            src="/api/placeholder/600/500" 
            alt="VR Technology" 
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">Innovative Solutions</h2>
          <p className="text-lg text-gray-300 mb-6">
            At Antycip, we push boundaries and explore new frontiers to stay ahead in a rapidly changing world. Our approach is rooted in modern thinking, leveraging the latest technologies and methodologies.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Simulation solutions for defense, aerospace, automotive and academia</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Virtual reality and immersive display systems</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Custom solutions for complex visualization challenges</span>
            </li>
          </ul>
          <Button text="Explore Solutions" />
        </div>
      </div>
    </div>
  </section>
);