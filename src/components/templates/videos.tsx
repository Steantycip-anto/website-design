import {Play} from "lucide-react"

const videoContent = {
    title: "Scopri la potenza della nostra piattaforma",
    description: "Un'esperienza utente straordinaria combinata con tecnologie all'avanguardia per trasformare il tuo business digitale.",
    videoThumbnail: "https://steantycip.com/wp-content/uploads/2021/05/IndustryLab-VR-suite.jpg",
    videoUrl: "https://www.polimi.it/fileadmin/asset/video/0_technology.mp4",
    darkMode: true
  };

export const VideoShowcase = () => {
    const A = ({
    title,
    description,
    videoThumbnail,
    videoUrl,
    darkMode = true
  }) => {
    const bgColor = darkMode ? "bg-black" : "bg-gray-100";
    const textColor = darkMode ? "text-white" : "text-gray-900";
    const subtextColor = darkMode ? "text-gray-400" : "text-gray-600";
    
    return (
      <div className={`${bgColor} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
            <p className={subtextColor}>{description}</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Video container with red accents */}
            <div className="absolute -top-3 -left-3 bottom-8 right-8 border-2 border-red-500/20 rounded-lg"></div>
            
            <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-800 aspect-video cursor-pointer group">
              {/* Video thumbnail */}
              <img 
                src={videoThumbnail || "/api/placeholder/1280/720"} 
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <Play fill="white" size={32} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
return <A {...videoContent} />
  };