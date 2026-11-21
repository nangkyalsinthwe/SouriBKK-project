import React from "react";
import { Heart, Sparkles, Smile } from "lucide-react";
import aboutMacaron from "../assets/aboutMacaron.jpg";

const About = () => {
  return (
    <div className="bg-white">
      <section className="py-10 px-6 bg-[#ffe576]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[#b60848] font-bold uppercase text-sm tracking-[0.4em]">
                Our Core Philosophy
              </h4>
              <h2 className="font-souri text-6xl md:text-8xl text-[#F199B9] italic leading-none uppercase">
                More than <br />
                <span className="text-gray-900">just a Macaron</span>
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-bold italic border-l-4 border-[#f199b9] pl-6">
              "Souri" means "Smile" in French. Every Fatcaron we bake is a
              message of joy, crafted to bring a smile to your face before the
              very first bite.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square rounded-full bg-[#ffe576] absolute -top-4 -left-4 animate-pulse opacity-20 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1000&auto=format&fit=crop"
              alt="Smiling with Macarons"
              className="rounded-2xl shadow-2xl w-full h-125 object-cover border-8 border-white rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-10 bg-pink-50 rounded-[3rem] space-y-6 text-center hover:shadow-xl transition-all">
            <div className="rounded-full w-15 h-15 bg-white flex items-center justify-center mx-auto text-[#F199B9]">
              <Sparkles size={32} />
            </div>
            <h3 className="text-3xl italic uppercase font-souri text-[#b60848]">
              The Secret Ratio
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              We mastered the balance between a crunchy shell and a rich, creamy
              heart. Not too sweet, just pure satisfaction.
            </p>
          </div>

          <div className="p-10 bg-amber-50 rounded-[3rem] space-y-6 text-center hover:shadow-xl transition-all  border-b-8 border-[#ffe576]">
            <div className="rounded-full w-15 h-15 bg-white flex items-center justify-center mx-auto text-[#ffe576]">
              <Heart size={32} fill="currentColor" />
            </div>
            <h3 className="text-3xl italic uppercase font-souri text-[#b60848]">
              The Sourcing
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              From premium French butter to artisan fruit jams, every ingredient
              is hand-picked for world-class quality.
            </p>
          </div>

          <div className="p-10 bg-pink-50 rounded-[3rem] space-y-6 text-center hover:shadow-xl transition-all">
            <div className="rounded-full w-15 h-15 bg-white flex items-center justify-center mx-auto text-[#F199B9]">
              <Smile size={32} />
            </div>
            <h3 className="text-3xl italic uppercase font-souri text-[#b60848]">
              Pure Happiness
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Our macarons are 1.5x bigger than standard ones, ensuring your
              smile lasts longer with every bite.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#F199B9]/20 blur-3xl group-hover:bg-[#F199B9]/30 transition-all"></div>
            <img
              src={aboutMacaron}
              alt="Mixed Fruit Fatcaron"
              className="relative rounded-3xl z-10  opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="space-y-10">
            <h3 className="font-souri text-6xl text-[#ffe576] italic uppercase">
              Seasonal <br /> <span className="text-white">Nostalgia</span>
            </h3>
            <p className="text-xl text-gray-300 font-light italic leading-relaxed">
              "Experience the seasons through flavors. From the refreshing zest
              of a summer breeze to the warm, cozy hug of a winter evening, our
              macarons capture memories in every bite."
            </p>
            <div className="flex gap-10">
              <div>
                <span className="block text-4xl font-souri text-[#F199B9]">
                  20+
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Unique Flavors
                </span>
              </div>
              <div>
                <span className="block text-4xl font-souri text-[#F199B9]">
                  100%
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Artisan Crafted
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
