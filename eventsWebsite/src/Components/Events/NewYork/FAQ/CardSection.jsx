import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Background from '../../../../assets/Backgrounds/cardBackgorund.png';
import Crad from '../../../../assets/Backgrounds/cardImg.png';
import Left from '../../../../assets/Backgrounds/FaqLeftCard.png';
import Right from '../../../../assets/Backgrounds/FaqRightCard.png';
import Logo from '../../../../assets/Backgrounds/logo.png';

// HELPER FUNCTION (unchanged)
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};


const FAQCard = ({ question, answer, isFlipped, onFlip }) => {
  return (
    // The card now fills its parent's height.
    <div
      className="group w-full h-full cursor-pointer"
      style={{ boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.25)' }}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onFlip()}
    >
      <div className={`relative h-full w-full transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Front Side */}
        <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden' }}>
          <div
            className="flex h-full w-full items-center justify-center rounded-2xl border border-white p-6 md:p-8 relative"
            style={{ background: `url(${Crad})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute top-2 right-[-1.3rem] w-[100px] h-[100px]">
              <img src={Logo} alt="Flivo AI Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-center font-medium leading-tight text-slate-50 text-3xl lg:text-4xl">
              {question}
            </p>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div
            className="flex h-full w-full items-start justify-start rounded-2xl border border-white p-6 md:p-8 relative"
            style={{ background: `url(${Crad})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute top-2 right-[-12px] w-[60px] h-[60px]">
              <img src={Logo} alt="Flivo AI Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-left font-semibold leading-relaxed text-slate-50 text-lg md:text-xl">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    { question: "What's the dress code?", answer: "Business casual is encouraged, but feel free to arrive in attire that makes you feel confident and professional. The event will include media coverage and photography, dress accordingly if representing your company." },
    { question: "Will session recordings be available?", answer: "Yes. All keynotes and select breakout sessions will be recorded and shared with registered attendees post-event. Access links will be sent via your registration email." },
    { question: "Do you offer student passes?", answer: "Absolutely. We offer discounted student tickets with a valid student ID. Please refer to our registration page for availability, eligibility and deadlines." },
    { question: "Are meals included in the ticket?", answer: "Yes. Breakfast, lunch and coffee breaks are included each day of the summit. We also provide vegetarian and dietary accommodations, please specify any preferences during registration." },
    { question: "How can I become a sponsor?", answer: (<span>We'd love to hear from you. Please reach out to <a href='mailto:connect@flivo.ai' className='text-blue-300 underline'>connect@flivo.ai</a> for current sponsorship opportunities.</span>) },
    { question: "Will there be networking opportunities?", answer: "Yes. In addition to scheduled sessions, we've included dedicated networking breaks, a Founders' Lounge and an invite-only Leadership Dinner for deeper conversations and collaboration." },
    { question: "Where is the summit taking place?", answer: "The event will be held at McCormick Place, Chicago, one of the largest and most connected convention centers in North America. Venue details and access instructions will be emailed to all attendees." },
    { question: "Do I need to bring anything?", answer: "Just your event confirmation email (QR code) and a government-issued photo ID. Laptops or tablets are optional but recommended for workshops and note-taking." },
    { question: "Is there a code of conduct?", answer: "Yes. FlivoAI events are designed to be professional, inclusive and harassment-free. All participants are expected to follow our Code of Conduct, available on the registration portal." }
  ];
  
  const faqRows = chunkArray(faqData, 3);
  
  return (
    <div className="relative h-full w-full overflow-y-auto bg-black font-sans" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 w-full bg-black/50" />
      <img src={Left} alt="Decorative graphic" className="absolute left-0 top-[12%] h-[25%] -translate-y-1/2" />
      <img src={Right} alt="Decorative graphic" className="absolute right-0 top-[12%] h-[25%] -translate-y-1/2" />

      <div className="relative mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="w-full overflow-hidden rounded-2xl bg-transparent">
          <div className="px-4 pb-8 pt-12 text-center md:pt-16">
            <h1 className="mb-4 text-4xl font-bold text-slate-50 md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-4xl text-xl font-medium text-slate-200 md:text-2xl lg:text-3xl">
              Everything you need to know before arriving in NewYork for the Enterprise AI Summit 2025.
            </p>
          </div>
    
          {/* --- MODIFICATION: CSS-based responsive layout --- */}
          
          {/* DESKTOP VIEW: Grid shown on medium screens and up */}
          <div className="hidden md:grid grid-cols-1 gap-8 p-4 sm:p-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 lg:p-12">
              {faqData.map((faq, index) => (
                <div key={index} className="h-80 lg:h-96">
                  <FAQCard
                    question={faq.question}
                    answer={faq.answer}
                    isFlipped={!!flippedCards[index]}
                    onFlip={() => handleCardFlip(index)}
                  />
                </div>
              ))}
          </div>

          {/* MOBILE VIEW: Carousels shown on small screens, hidden on medium and up */}
          <div className="flex flex-col gap-10 p-4 md:hidden">
            {faqRows.map((row, rowIndex) => (
              <div key={rowIndex} className="h-80">
                <Swiper
                  className="h-full w-full"
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1.25}
                  centeredSlides={true}
                  pagination={{ 
                    clickable: true,
                    dynamicBullets: true
                  }}
                >
                  {row.map((faq, cardIndex) => {
                    const originalIndex = rowIndex * 3 + cardIndex;
                    return (
                      <SwiperSlide key={originalIndex} className="h-full">
                        <FAQCard
                          question={faq.question}
                          answer={faq.answer}
                          isFlipped={!!flippedCards[originalIndex]}
                          onFlip={() => handleCardFlip(originalIndex)}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for Swiper */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #ffffff !important;
          opacity: 0.5 !important;
          width: 10px !important;
          height: 10px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        .swiper {
          padding-bottom: 30px !important;
        }
      `}</style>
    </div>
  );
};

export default CardSection;