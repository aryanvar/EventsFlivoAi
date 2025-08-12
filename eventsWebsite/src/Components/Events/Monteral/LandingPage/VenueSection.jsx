/* eslint-disable no-unused-vars */
import React from 'react';

// --- SVG Icon Components (Fixed and optimized) ---
const LocationIcon = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.979 81.49l133.021 250.812c3.865 7.292 11.51 12.031 20.042 12.031s16.177-4.739 20.042-12.031L410.438 252.156c13.917-25.23 20.979-53.24 20.979-81.49C426.667 76.563 350.104 0 256 0zm0 256c-47.063 0-85.333-38.271-85.333-85.333S208.938 85.333 256 85.333s85.333 38.271 85.333 85.333S303.063 256 256 256z"></path>
  </svg>
);

const WheelchairIcon = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M224 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304h-91.4zm-223.5-64c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zM80 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm256 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"></path>
  </svg>
);

const CarIcon = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V304c0 26.5-21.5 48-48 48H448c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm256 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0z"></path>
  </svg>
);

const WifiIcon = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9zM320 256c56.8 0 108.6 21.1 148.2 56.1 12.8 11.3 32.7 9.9 44.1-2.9 11.3-12.8 9.9-32.7-2.9-44.1C459.8 219.2 393 192 320 192s-139.8 27.2-189.4 73.1c-12.8 11.3-14.3 31.3-2.9 44.1s31.3 14.3 44.1 2.9C211.4 277.1 263.2 256 320 256zm64 160a64 64 0 1 0-128 0 64 64 0 1 0 128 0z"></path>
  </svg>
);

const TrainIcon = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 128c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM80 400a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm208-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
  </svg>
);

// --- Main Component ---
export default function VenueLocation() {
  const amenities = [
    { Icon: WheelchairIcon, name: 'Accessibility' },
    { Icon: CarIcon, name: 'Parking' },
    { Icon: WifiIcon, name: 'Free WiFi' },
    { Icon: TrainIcon, name: 'Transit Access' },
  ];
  
  const venueName = "Palais des congrès de Montréal";
  const venueAddress = "1001 Place Jean-Paul-Riopelle, Montréal, QC H2Z 1H5, Canada";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2677912138297!2d-73.56280252339174!3d45.50468763073589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a50630ed7e5%3A0xb7863b94db4a7440!2sPalais%20des%20Congr%C3%A8s%20de%20Montr%C3%A9al!5e0!3m2!1sen!2sin!4v1754922794488!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade";

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2677912138297!2d-73.56280252339174!3d45.50468763073589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a50630ed7e5%3A0xb7863b94db4a7440!2sPalais%20des%20Congr%C3%A8s%20de%20Montr%C3%A9al!5e0!3m2!1sen!2sin!4v1754922794488!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade", "_blank");
  };
  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-95 font-sans py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-8 lg:mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Venue
        </h2>

        {/* Map Container */}
        <div className="relative w-full max-w-6xl h-[50vh] sm:h-[55vh] lg:h-[65vh] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white border-opacity-20">
          {/* Interactive Google Map */}
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={mapEmbedUrl}
            aria-label={`Map showing location of ${venueAddress}`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location Map"
            onError={(e) => {
              console.log('Map failed to load, showing fallback');
              e.target.style.display = 'none';
            }}
          ></iframe>

          {/* Fallback content if map doesn't load */}
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white" id="map-fallback" style={{ display: 'none' }}>
            <div className="text-center p-8">
              <LocationIcon className="mx-auto mb-4 text-4xl text-gray-400" />
              <h3 className="text-xl font-bold mb-2">Venue Location</h3>
              <p className="text-gray-300 mb-4">{venueAddress}</p>
              <button 
                onClick={handleGetDirections}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View on Google Maps
              </button>
            </div>
          </div>

          {/* Amenities Icons Overlay */}
          <div className="absolute top-4 right-4 p-1 bg-white bg-opacity-20 rounded-lg shadow-xl backdrop-blur-sm">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-md py-2 px-3 flex items-center gap-3">
              {amenities.map(({ Icon, name }) => (
                <div key={name }  className="relative group">
                  <Icon 
                    className="text-white text-xl hover:text-blue-300 transition-colors duration-200 cursor-pointer" 
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black bg-opacity-80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-black bg-opacity-50 backdrop-blur-lg border-t border-white border-opacity-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Venue Information */}
              <div className="text-white text-center md:text-left flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-1">Palais des congrès de Montréal</h3>
                <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base text-slate-300 font-medium">
                  <LocationIcon className="flex-shrink-0 text-lg" />
                  <span>{venueAddress}</span>
                </p>
              </div>

              {/* Get Directions Button */}
              <button 
                onClick={handleGetDirections}
                className="flex-shrink-0 bg-white text-gray-800 font-semibold text-base md:text-lg py-2.5 px-5 md:px-6 rounded-lg flex items-center gap-2 transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg"
              >
                <LocationIcon className="text-lg" />
                <span>Get directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}