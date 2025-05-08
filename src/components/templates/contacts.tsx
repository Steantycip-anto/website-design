import { Mail, Phone, MapPin, ArrowRight} from "lucide-react";

const contactContent = {
    title: "Pronti a iniziare il tuo progetto?",
    description: "Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi aziendali.",
    email: "info@tuaazienda.com",
    phone: "+39 02 1234567",
    address: "Via dell'Innovazione, 123 - Milano",
    ctaText: "Prenota una demo",
    ctaLink: "#",
    socialLinks: [
      { icon: "facebook", url: "#" },
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" }
    ]
  };

export const ContactCTA = () => {
    const A = ({
    title,
    description,
    email,
    phone,
    address,
    ctaText,
    ctaLink,
    socialLinks = []
  }) => {
    return (
      <div className="bg-black py-16 md:py-24 relative overflow-hidden">
        {/* Background accent elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-red-500/10 to-transparent opacity-30 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-red-500/10 to-transparent opacity-20 rounded-tr-full"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
              <p className="text-gray-400 mb-8">{description}</p>
              
              <div className="space-y-4 mb-8">
                {email && (
                  <div className="flex items-center">
                    <Mail className="text-red-500 mr-3" size={20} />
                    <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">{email}</a>
                  </div>
                )}
                
                {phone && (
                  <div className="flex items-center">
                    <Phone className="text-red-500 mr-3" size={20} />
                    <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">{phone}</a>
                  </div>
                )}
                
                {address && (
                  <div className="flex items-center">
                    <MapPin className="text-red-500 mr-3" size={20} />
                    <span className="text-gray-300">{address}</span>
                  </div>
                )}
              </div>
              
              {ctaText && (
                <a 
                  href={ctaLink} 
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
                >
                  {ctaText}
                  <ArrowRight size={18} className="ml-2" />
                </a>
              )}
            </div>
            
            {/* Form */}
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Invia un messaggio</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="La tua email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Messaggio</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Il tuo messaggio"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors"
                >
                  Invia messaggio
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
return <A {...contactContent} />
  };