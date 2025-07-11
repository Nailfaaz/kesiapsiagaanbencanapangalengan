import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

const cardData = [
  {
    id: 1,
    title: 'Bahaya dan Mitigasi Bencana Geologi',
    name: 'Rayhan Saputra Wicaksana',
    date: '4 Juni 2025',
    image: '/images/landslide.png',
    alt: 'Gambar bencana umum',
    path: '/bencana-umum',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Pertolongan Kebencanaan',
    name: "Harfin Athfalun Nafi'ah",
    date: '4 Juni 2025',
    image: '/images/ambulance.png',
    alt: 'Gambar penanganan cedera',
    path: '/penanganan-cedera',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Tas Siaga Bencana',
    name: 'Intansari Kusumaningtyas',
    date: '4 Juni 2025',
    image: '/images/backpack.png',
    alt: 'Gambar tas siaga bencana',
    path: '/tas-siaga-bencana',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Manajemen Stress Bencana',
    name: 'Intansari Kusumaningtyas',
    date: '4 Juni 2025',
    image: '/images/mindfulness.png',
    alt: 'Gambar manajemen stress',
    path: '/manajemen-stress',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Assessment Siaga Bencana',
    name: 'Jovanca Vebiane',
    date: '4 Juni 2025',
    image: '/images/assessment.png',
    alt: 'Gambar assessment kesiapsiagaan',
    path: 'https://forms.gle/s9hGnmCaxsfkpjkY6', // External link
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen font-avenir bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        <Header title="Kesiapsiagaan Bencana Pangalengan" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-12 text-center">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 font-tropical">
              Siap Hadapi Bencana
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-avenir">
              Panduan lengkap kesiapsiagaan bencana untuk masyarakat Pangalengan. 
              Pelajari cara melindungi diri dan keluarga dari berbagai ancaman bencana.
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, index) => {
              const isExternal = card.id === 5;
              const Wrapper = isExternal ? 'a' : Link;
              const wrapperProps = isExternal
                ? {
                    href: card.path,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : { href: card.path };

              return (
                <Wrapper
                  key={card.id}
                  {...wrapperProps}
                  className="group block relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700 shadow-md">
                        Panduan
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-3 font-avenir text-slate-800 group-hover:text-slate-900 transition-colors">
                      {card.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            {card.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-slate-700">{card.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <time dateTime="2025-06-04" className="text-sm text-slate-500">
                        {card.date}
                      </time>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium mr-2">Pelajari</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
                </Wrapper>
              );
            })}
          </div>
        </section>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Avenir:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        @font-face {
          font-family: 'Tropical Island';
          src: url('/fonts/tropical-island.woff2') format('woff2'),
               url('/fonts/tropical-island.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .font-tropical {
          font-family: 'Tropical Island', 'Inter', cursive;
        }
        .font-avenir {
          font-family: 'Avenir', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
