import Image from 'next/image'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import QRCode from 'react-qr-code'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 via-stone-500 to-neutral-300 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full flex flex-col items-center space-y-4 text-center">
        
        {/* Profile Photo */}
        <div className="w-[170px] h-[140px] bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/p.jpeg" // replace with your uploaded photo filename in public/
            alt="Humphrey"
            width={178}
            height={178}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h1 className="font-playfair text-2xl font-bold text-black">Humphrey Nyariki</h1>
        <p className="text-lg font-medium text-stone-600">Software Engineer</p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-stone-700">
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
          <a href="https://x.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-black transition" />
          </a>
        </div>

        {/* QR Code */}
        <div className="bg-white p-2 rounded-md shadow-sm">
          <QRCode value="https://humphreyecard.netlify.app/" size={100} />
        </div>

        {/* Tagline or Statement */}
        <p className="text-sm text-stone-500 font-light">Scan to access this card anytime, anywhere.</p>
      </div>
    </main>
  )
}

