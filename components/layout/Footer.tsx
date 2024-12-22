import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-center mb-12 text-red-700">
            THE EXECUTOR.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda ex enim ea quibusdam perferendis, voluptate reprehenderit dolor soluta eveniet sapiente maiores dignissimos sequi rem minima numquam dolorem commodi alias.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-700 transition-colors">
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-red-700 transition-colors">
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-red-700 transition-colors">
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-red-700 transition-colors">
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-red-600 transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Karate</Link></li>
              <li><Link href="/products" className="hover:text-red-600 transition-colors">Taekwondo</Link></li>
              <li><Link href="/about" className="hover:text-red-600 transition-colors">Kung Fu</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">KickBoxing</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Visit Our School</h2>
            <p>
              123 Street, Karachi, Pakistan
            </p>
            <p className='mt-4'>
              Open Monday to Saturday, 10:00 AM - 9:00 PM
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-red-600 text-center text-sm">
          <p>&copy; 2024 The Executor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer