import Image from 'next/image';
import Link from 'next/link';

function LogoImage({ src, alt, title }) {
  return (
    <div className="relative w-10 h-10 transition-transform duration-200 hover:scale-110">
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        className="object-contain"
        sizes="40px"
      />
    </div>
  );
}

export default function Header({ title }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-indigo-800/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-bold tracking-wide font-tropical text-white hover:text-blue-200 transition-colors"
        >
          {title}
        </Link>

        {/* Logos */}
        <div className="flex items-center space-x-4">
          <LogoImage src="/images/logo-ugm.png" alt="Logo UGM" title="UGM" />
          <LogoImage src="/images/logo-kkn.png" alt="Logo KKN" title="KKN" />
          <LogoImage src="/images/logo-kispan.png" alt="Logo KISPAN" title="KISPAN" />
        </div>
      </div>
    </header>
  );
}
