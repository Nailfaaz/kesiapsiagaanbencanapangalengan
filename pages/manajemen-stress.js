import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function ManajemenStressPage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const mindfulnessTips = [
    {
      title: "1. Mulai secara bertahap",
      description:
        "Mulai dengan sesi pendek dan secara bertahap tingkatkan intensitas latihan.",
      icon: "🌱", // tunas: melambangkan pertumbuhan bertahap
    },
    {
      title: "2. Hindari memaksakan diri",
      description:
        "Hindari memaksakan diri terlalu keras atau berjuang untuk hasil tertentu. Sebaliknya, tanamkan sikap tidak menghakimi dan menerima.",
      icon: "🕊️", // burung merpati: simbol ketenangan dan penerimaan
    },
    {
      title: "3. Latih self-compassion",
      description:
        "Bersikaplah lembut pada diri sendiri ketika muncul emosi yang menyulitkan saat latihan.",
      icon: "💖", // hati bersinar: simbol cinta dan kelembutan pada diri sendiri
    },
    {
      title: "4. Dengarkan tubuhmu",
      description:
        "Perhatikan ketidaknyamanan fisik atau emosional selama berlatih. Istirahatlah jika merasakan ketidaknyamanan selama latihan.",
      icon: "🛌", // tempat tidur: simbol istirahat dan mendengarkan tubuh
    },
  ];

  const benefits = [
    "Mengurangi kecemasan dan stres",
    "Meningkatkan konsentrasi",
    "Memperbaiki kualitas tidur",
    "Meningkatkan kesehatan mental",
    "Membantu pengambilan keputusan yang lebih baik",
  ];

  return (
    <div className="min-h-screen font-avenir bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10">
        {/* Header */}
        <Header title="Kesiapsiagaan Bencana Pangalengan" />

        {/* Breadcrumb Navigation */}
        <section className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>›</span>
            <span className="text-slate-800 font-medium">Manajemen Stres</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Manajemen Stres & Mindfulness
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pelajari teknik mindfulness untuk mengelola stres dalam situasi
              darurat dan kehidupan sehari-hari
            </p>
          </div>
        </section>

        {/* Pengertian Mindfulness Section */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Pengertian Mindfulness
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Text Panel */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Proses memusatkan perhatian kepada masa sekarang secara
                      sengaja, tanpa menghakimi, terbuka, dan penuh penerimaan.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Mindful adalah tentang hadir dan menerima segala sesuatu
                      sebagaimana adanya.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Manfaat Mindfulness
                    </h3>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-2 text-slate-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Panel */}
                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src="/images/mindful.png"
                    alt="Ilustrasi Mindfulness"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                      Praktik Mindfulness
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mindfulness Tips Section */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Teknik Mindfulness Praktis
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Empat teknik sederhana yang dapat dipraktikkan kapan saja untuk
              mengelola stres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {mindfulnessTips.map((tip, index) => (
              <div
                key={tip.title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎥</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Memahami Mindfulness
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="aspect-w-16 aspect-h-9"
                  style={{ aspectRatio: "16/9" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/iN6g2mr0p3Q"
                    title="Memahami Mindfulness"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => setIsVideoLoaded(true)}
                  />
                </div>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg font-semibold">Memuat video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎥</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Panduan Mindfulness (Bahasa Inggris)
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="aspect-w-16 aspect-h-9"
                  style={{ aspectRatio: "16/9" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/cEqZthCaMpo"
                    title="Video Panduan Mindfulness"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => setIsVideoLoaded(true)}
                  />
                </div>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg font-semibold">Memuat video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎥</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Panduan Mindfulness (Bahasa Indonesia)
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="aspect-w-16 aspect-h-9"
                  style={{ aspectRatio: "16/9" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/YEiD29FOLoI"
                    title="Video Panduan Mindfulness"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => setIsVideoLoaded(true)}
                  />
                </div>
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg font-semibold">Memuat video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="max-w-7xl mx-auto px-8 py-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Kembali ke Beranda</span>
          </Link>
        </section>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Avenir:wght@400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        @font-face {
          font-family: "Tropical Island";
          src: url("/fonts/tropical-island.woff2") format("woff2"),
            url("/fonts/tropical-island.woff") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .font-tropical {
          font-family: "Tropical Island", "Inter", cursive;
        }
        .font-avenir {
          font-family: "Avenir", "Inter", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
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
