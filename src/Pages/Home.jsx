import React from 'react'
import macaronVideo from "../assets/macaronVideo.mp4"
import macaronLand from '../assets/landing.jpg'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import reviews from '../Reviews';

const Home = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -350, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-pink-100">
      <section
        className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-gray-100"
        aria-label="Welcome video showing our signature macarons"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          role='img'
          aria-label='Cinematic video of colorful Fatcarons'
          className="w-full h-full object-cover">
          <source src={macaronVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent flex items-end justify-start px-10 pb-10">
          <h2 className="font-souri text-[#ffe576] text-lg md:text-[2rem] leading-none tracking-tighter opacity-90">
            The Original Contemporary French Patisserie
            ✨ Your smile is our favorite 💖
          </h2>
        </div>

        <div className="absolute top-4 right-4 md:top-10 md:right-20 pointer-events-none select-none">
          <div className="relative w-36 h-36 md:w-64 md:h-64 flex items-center justify-center rotate-12">
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite]" aria-hidden='true'>
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-souri text-[9px] md:text-[10px] uppercase fill-[#b60848] tracking-[0.15em]  md:tracking-[0.2em]">
                  <textPath href="#circlePath">
                    The Best Fatcaron in Bangkok • Souri BKK •
                  </textPath>
                </text>
              </svg>
            </div>

            <div
              role='status'
              aria-label='Best Choice Award'
              className="bg-[#F199B9] w-20 h-20 md:w-40 md:h-40 rounded-full border-3 md:border-4 border-dashed border-white shadow-2xl flex items-center justify-center animate-bounce pointer-events-auto">
              <h2 className="font-souri text-white text-lg md:text-3xl leading-none text-center uppercase">
                BEST <br /> CHOICE
              </h2>
            </div>

          </div>
        </div>
      </section>

      <section
        className='py-16 px-6 max-w-7xl mx-auto'
        aria-labelledby="about-heading">
        <div className='flex flex-col md:flex-row items-center gap-12 lg:gap-20'>
          <div className="flex-1 space-y-10 flex flex-col md:flex-row items-center">
            <div className="space-y-6">
              <h3 id="about-heading" className="font-souri text-[#f199b9] text-4xl md:text-6xl uppercase leading-tight">
                Crafted to <br />
                <span className="text-[#b60848]">Perfection</span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold italic">
                Our "Fatcarons" are bigger, bolder, and more flavorful than ever. Crafted with premium ingredients to deliver a rich, creamy texture in every single bite.
              </p>
            </div>
            <div className="space-y-2 border-l-4 border-[#ffe576]  pl-6 md:pl-8 py-2 ml-5 md:ml-10">
              <p className="text-pink-700 text-base md:text-lg font-semibold uppercase tracking-widest leading-relaxed">
                Baked fresh daily with a focus on balanced sweetness. Inspired by the word "Souri" (Smile), we aim to deliver a moment of pure happiness with every piece.
                <span className="block mt-4 text-[#b60848]">A masterpiece of signature cream cheese and artisan fruit jams for a refreshing surprise.</span>
              </p>
              <button
                className="group relative mt-10 border-2 border-[#F199B9] text-[#F199B9] font-black px-10 py-4 rounded-full uppercase tracking-[0.2em] italic overflow-hidden transition-all duration-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F199B9] focus:ring-offset-2"
                aria-label="Explore our macaron flavors"
              >
                <span className="relative z-10"><a href='/products'>Explore Flavors</a></span>
                <div className="absolute inset-0 bg-[#F199B9] translate-y-full group-hover:translate-y-0 transition-transform duration-500" aria-hidden="true"></div>
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full max-w-sm md:max-w-80  lg:max-w-80">
            <div className="relative aspect-4/5 rounded-t-full overflow-hidden border-12 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(241,153,185,0.3)] transition-all duration-500">
              <img
                src={macaronLand}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                alt="Luxury assorted Souri Fatcarons in a gift box"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#F199B9]/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffe576]/20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <h4 className="text-[#b60848] font-bold text-sm uppercase tracking-[0.3em]">Testimonials</h4>
              <h3 className="font-souri text-4xl md:text-6xl text-[#F199B9] uppercase italic">
                Our Lovers <br /> <span className="text-gray-900">Reviews</span>
              </h3>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="p-4 border-2 border-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-all active:scale-90 focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-4 border-2 border-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition-all active:scale-90 focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-75 md:min-w-100 bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-amber-400 snap-center flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium italic">
                    "{review.subText}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-black text-[#b60848] uppercase tracking-widest italic">
                    {review.name}
                  </span >
                  <span className="text-[#F199B9] text-xs font-bold uppercase">Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>


    </main >
  )
}

export default Home
