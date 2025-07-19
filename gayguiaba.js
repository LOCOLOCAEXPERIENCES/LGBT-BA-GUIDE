import React, { useRef, useState } from 'react';
import { Coffee, Music, Sparkles, Instagram, Facebook } from 'lucide-react'; // Importing icons, including Instagram and Facebook

// Main App component
const App = () => {
  // State for the current language, default to Spanish
  const [language, setLanguage] = useState('es');

  // Translations object
  const translations = {
    es: {
      tagline: "Explora los vibrantes locales LGBT+ de Buenos Aires con Danny Boy!",
      address: "Dirección:",
      neighborhood: "Barrio:",
      visitSite: "Visitar sitio",
      footerLine1: "© LOCO LOCAL EXPERIENCES. Tu guía auténtica en Buenos Aires.",
      footerLine2: "Conéctate conmigo:",
      footerWebsite: "www.locolocal.com.ar",
      footerInstagram: "Instagram",
      footerFacebook: "Facebook",
      barCafe: "Bar / Café",
      milonga: "Milonga",
      nightClub: "Night Club",
    },
    pt: {
      tagline: "Explore os vibrantes locais LGBT+ de Buenos Aires com Danny Boy!",
      address: "Endereço:",
      neighborhood: "Bairro:",
      visitSite: "Visitar site",
      footerLine1: "© LOCO LOCAL EXPERIENCES. Seu guia autêntico em Buenos Aires.",
      footerLine2: "Conecte-se comigo:",
      footerWebsite: "www.locolocal.com.ar",
      footerInstagram: "Instagram",
      footerFacebook: "Facebook",
      barCafe: "Bar / Café",
      milonga: "Milonga",
      nightClub: "Night Club",
    },
    en: {
      tagline: "Explore Buenos Aires's vibrant LGBT+ friendly venues with Danny Boy!",
      address: "Address:",
      neighborhood: "Neighborhood:",
      visitSite: "Visit site",
      footerLine1: "© LOCO LOCAL EXPERIENCES. Your authentic guide in Buenos Aires.",
      footerLine2: "Connect with me:",
      footerWebsite: "www.locolocal.com.ar",
      footerInstagram: "Instagram",
      footerFacebook: "Facebook",
      barCafe: "Bar / Cafe",
      milonga: "Milonga",
      nightClub: "Night Club",
    },
  };

  // Get the current translation based on the selected language
  const t = translations[language];

  // Data for the LGBT+ friendly experiences
  const experiencesData = {
    "Bar / Café": [
      { name: "PRIDE Café", address: "Balcarce 869", neighborhood: "San Telmo", website: "https://www.instagram.com/cafepride/" },
      { name: "PEUTEO", address: "Gurruchaga 1867", neighborhood: "Palermo", website: "https://www.instagram.com/peuteopalermosoho/" },
      { name: "Mari Café", address: "Honduras 4096", neighborhood: "Palermo", website: "https://www.instagram.com/maricafeok/?hl=es" },
      { name: "Feliza Arcoiris", address: "AV. CORDOBA 3271", neighborhood: "Palermo", website: "https://www.instagram.com/felizarcoiris?gad_source=1&gad_campaignid=20844291054&gbraid=0AAAAApHnI99e1IjRoABmdG3-buZ1u_jl&gclid=CjwKCAjw4efDBhATEiwAaDBpbjGWIduPfIBppuK__NnQPU05-E8_q6j51S_xAShdI1aMasSs0h_4qhoCToUQAvD_BwE" },
      { name: "Sitges", address: "AV.CORDOBA 4119", neighborhood: "Palermo", website: "https://www.instagram.com/sitgesbsasoficial/?hl=es" },
    ],
    "Milonga": [
      { name: "La Marshall (EL BESO)", address: "Riobamba 416", neighborhood: "Balvanera", website: "https://www.instagram.com/la.marshall.milonga/" },
      { name: "Tango Queer", address: "Peru 571", neighborhood: "San Telmo", website: "https://www.instagram.com/tangoqueerba/?hl=es" },
      { name: "Radiolandia", address: "Bolivar 896", neighborhood: "San Telmo", website: "https://www.instagram.com/radiolandiashow/?hl=es" },
    ],
    "Night Club": [
      { name: "Amerika Disco", address: "Gascón 1040", neighborhood: "Palermo", website: "https://www.instagram.com/amerikadisco/?hl=es" },
      { name: "Glam Disco", address: "José Antonio Cabrera 3046", neighborhood: "Palermo", website: "https://www.instagram.com/glamdiscobsasoficial/" },
      { name: "CLUB 69", address: "Cnel. Niceto Vega 5510", neighborhood: "Palermo", website: "https://www.instagram.com/club69.ba/" },
      { name: "Contramano", address: "Rodriguez Peña 1082", neighborhood: "Recoleta", website: "https://www.instagram.com/contramano_oficial/" },
    ],
  };

  // Create refs for each section to enable scrolling
  const sectionRefs = {
    "Bar / Café": useRef(null),
    "Milonga": useRef(null),
    "Night Club": useRef(null),
  };

  // Function to scroll to a specific section
  const scrollToSection = (categoryKey) => {
    sectionRefs[categoryKey].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Helper function to render a website link as a button or text
  const renderWebsiteLink = (website) => {
    // Check if the website string looks like a URL
    const isURL = website.startsWith('http://') || website.startsWith('https://');
    if (isURL) {
      return (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition-colors duration-200 text-sm font-medium mt-2"
        >
          {t.visitSite}
        </a>
      );
    }
    // Otherwise, display as plain text
    return <span className="text-gray-700">{website}</span>;
  };

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Bar / Café":
        return <Coffee className="inline-block mr-2" size={28} />;
      case "Milonga":
        return <Music className="inline-block mr-2" size={28} />;
      case "Night Club":
        return <Sparkles className="inline-block mr-2" size={28} />; // Using Sparkles as a unicorn-like icon
      default:
        return null;
    }
  };

  // Function to get translated category name for display
  const getTranslatedCategoryName = (categoryKey) => {
    switch (categoryKey) {
      case "Bar / Café":
        return t.barCafe;
      case "Milonga":
        return t.milonga;
      case "Night Club":
        return t.nightClub;
      default:
        return categoryKey;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 font-inter text-gray-900 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="text-center mb-10 p-4 bg-white rounded-xl shadow-lg border border-purple-200">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-2 leading-tight">
          🏳️‍🌈 LGBT+ <br className="sm:hidden" /> LOCO LOCAL EXPERIENCES
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          {t.tagline}
        </p>

        {/* Language Selection Buttons */}
        <div className="mb-6 flex justify-center gap-3">
          <button
            onClick={() => setLanguage('es')}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${language === 'es' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Español
          </button>
          <button
            onClick={() => setLanguage('pt')}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${language === 'pt' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Português
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${language === 'en' ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            English
          </button>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex flex-wrap justify-center gap-4">
          {Object.keys(experiencesData).map((categoryKey) => (
            <button
              key={categoryKey}
              onClick={() => scrollToSection(categoryKey)}
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-colors duration-200 text-lg sm:text-xl"
            >
              {getTranslatedCategoryName(categoryKey)}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto space-y-8">
        {Object.entries(experiencesData).map(([categoryKey, venues]) => (
          <section key={categoryKey} ref={sectionRefs[categoryKey]} className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6 border-b-2 border-purple-300 pb-3 flex items-center">
              {getCategoryIcon(categoryKey)} {getTranslatedCategoryName(categoryKey)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, index) => (
                <div key={index} className="bg-purple-50 p-5 rounded-lg shadow-md border border-purple-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">{venue.name}</h3>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{t.address}</span> {venue.address}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">{t.neighborhood}</span> {venue.neighborhood}
                    </p>
                  </div>
                  <div className="mt-4"> {/* Added margin top for spacing */}
                    {renderWebsiteLink(venue.website)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="text-center mt-10 p-4 text-gray-600">
        <p>{t.footerLine1}</p>
        <p className="mt-2">{t.footerLine2}</p>
        <div className="flex justify-center gap-4 mt-2"> {/* Flex container for links */}
          <a href="https://www.locolocal.com.ar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
            {/* Website icon could go here if desired, e.g., <Globe className="mr-1" size={20} /> */}
            {t.footerWebsite}
          </a>
          <a href="https://www.instagram.com/locolocalexperiences/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
            <Instagram className="mr-1" size={20} /> {/* Instagram icon */}
            {t.footerInstagram}
          </a>
          <a href="https://www.facebook.com/locolocalexperience" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
            <Facebook className="mr-1" size={20} /> {/* Facebook icon */}
            {t.footerFacebook}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
