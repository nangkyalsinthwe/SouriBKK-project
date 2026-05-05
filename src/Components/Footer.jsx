import React from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-[#ffe576] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <div className="space-y-6">
          <h2 className="font-souri text-[#F199B9] text-5xl tracking-tighter uppercase italic">
            Souri <br /> <span className='text-gray-900'>BKK</span>
          </h2>
          <p className="text-gray-500 font-medium italic leading-relaxed max-w-sm">
            Experience the pinnacle of French patisserie with our signature Fatcarons.
            Baked with love, delivered with a smile.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/SOURI-100084793028010/">
              <img src={facebook} alt='facebook' className='w-10 p-2 bg-[#fff5f7] rounded-full hover:bg-[#f199b9] transition-all duration-300 shadow-sm' aria-label="Follow us on Facebook" />
            </a>
            <a href="https://www.instagram.com/souri.bkk/">
              <img src={instagram} alt="instagram" className='w-10 p-2 bg-[#fff5f7] rounded-full hover:bg-[#f199b9] transition-all duration-300 shadow-sm' aria-label="Follow us on Instagram" />
            </a>
            <a href="https://www.tiktok.com/@souri.bkk">
              <img src={tiktok} alt="tiktok" className='w-10 p-2 bg-[#fff5f7] rounded-full hover:bg-[#f199b9] transition-all duration-300 shadow-sm' aria-label="Follow us on Tiktok" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[#b60848] font-black text-sm uppercase tracking-[0.3em]">Quick Link</h4>
          <ul className='space-y-4 font-bold text-gray-700 italic uppercase tracking-wider text-sm'>
            <li><a href="/products" className="hover:text-[#F199B9] transition-colors">All Flavors</a></li>
            <li><a href="/products" className="hover:text-[#F199B9] transition-colors">Gift Sets</a></li>
            <li><a href="https://page.line.me/souri.bkk/showcase/1427424884598969?accountId=souri.bkk" className="hover:text-[#F199B9] transition-colors">Locations</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[#b60848] font-black text-sm uppercase tracking-[0.3em]">Contact Us</h4>
          <div className="space-y-4 text-gray-600 font-medium italic">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#F199B9] shrink-0" size={20} />
              <p>Bangkok, Thailand </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#F199B9] shrink-0" size={20} />
              <p>+66 2 123 4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#F199B9] shrink-0" size={20} />
              <p>hello@souri.bkk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] text-center">
          &copy; 2026 Nang Kyal. All Rights Reserved. <br />
          <span className="text-[#F199B9]/50">Inspired by Souri BKK</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;