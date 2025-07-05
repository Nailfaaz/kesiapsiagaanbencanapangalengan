import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function PenangananCederaPage() {
  const [modalContent, setModalContent] = useState(null);

  const injuries = [
    { 
      title: 'Luka', 
      image: '/images/cedera-luka.jpg', 
      alt: 'Ilustrasi luka', 
      description: 'Luka adalah kerusakan pada jaringan tubuh yang disebabkan oleh trauma fisik, dapat berupa luka sayat, luka tusuk, atau luka sobek.',
      severity: 'Ringan-Sedang',
      color: 'from-green-500 to-emerald-500',
      icon: '🩹',
      firstAid: [
        'Cuci tangan dengan sabun dan air bersih',
        'Bersihkan luka dengan air mengalir',
        'Keringkan area sekitar luka dengan kain bersih',
        'Oleskan antiseptik jika tersedia',
        'Tutup luka dengan perban steril',
        'Ganti perban secara teratur'
      ],
      prevention: [
        'Gunakan alat pelindung diri saat bekerja',
        'Hindari permukaan yang tajam atau kasar',
        'Jaga kebersihan lingkungan kerja',
        'Gunakan sepatu tertutup saat beraktivitas'
      ],
      whenToSeekHelp: [
        'Luka dalam atau lebar lebih dari 2 cm',
        'Pendarahan tidak berhenti setelah 10 menit',
        'Terdapat benda asing yang tertancap',
        'Muncul tanda-tanda infeksi (merah, bengkak, nanah)'
      ]
    },
    { 
      title: 'Pendarahan', 
      image: '/images/cedera-pendarahan.jpg', 
      alt: 'Ilustrasi pendarahan', 
      description: 'Pendarahan adalah keluarnya darah dari pembuluh darah akibat kerusakan atau robeknya dinding pembuluh darah.',
      severity: 'Sedang-Berat',
      color: 'from-red-500 to-pink-500',
      icon: '🩸',
      firstAid: [
        'Tekan langsung pada area yang berdarah dengan kain bersih',
        'Pertahankan tekanan konstan selama 10-15 menit',
        'Tinggikan bagian yang berdarah jika memungkinkan',
        'Jangan lepas perban yang sudah berdarah, tambahkan lapisan baru',
        'Tekan titik tekanan jika pendarahan tidak berhenti',
        'Segera cari bantuan medis jika pendarahan hebat'
      ],
      prevention: [
        'Hindari aktivitas berisiko tinggi tanpa persiapan',
        'Gunakan alat pelindung diri yang tepat',
        'Pelajari teknik penanganan benda tajam',
        'Jaga kondisi fisik dan kesehatan'
      ],
      whenToSeekHelp: [
        'Pendarahan tidak berhenti setelah 15 menit penekanan',
        'Darah keluar dalam jumlah banyak',
        'Korban menunjukkan tanda-tanda syok',
        'Pendarahan dari hidung, telinga, atau mulut'
      ]
    },
    { 
      title: 'Cedera Kepala', 
      image: '/images/cedera-kepala.jpg', 
      alt: 'Ilustrasi cedera kepala', 
      description: 'Cedera kepala adalah trauma yang terjadi pada kulit kepala, tengkorak, atau otak akibat benturan atau pukulan.',
      severity: 'Berat',
      color: 'from-red-600 to-red-500',
      icon: '🧠',
      firstAid: [
        'Jaga korban tetap sadar dan tenang',
        'Posisikan kepala sedikit lebih tinggi dari tubuh',
        'Jangan berikan obat-obatan',
        'Pantau tanda-tanda vital (nadi, pernapasan)',
        'Jangan pindahkan korban kecuali dalam bahaya',
        'Segera hubungi bantuan medis darurat'
      ],
      prevention: [
        'Gunakan helm saat berkendara atau berolahraga',
        'Pasang sabuk pengaman di kendaraan',
        'Hindari aktivitas berisiko tinggi',
        'Jaga keamanan lingkungan dari benda keras'
      ],
      whenToSeekHelp: [
        'Kehilangan kesadaran meski sebentar',
        'Muntah berulang-ulang',
        'Sakit kepala hebat yang tidak hilang',
        'Keluar cairan dari telinga atau hidung',
        'Perubahan perilaku atau kebingungan'
      ]
    },
    { 
      title: 'Sprain and Strain (Terkilir)', 
      image: '/images/cedera-terkilir.jpg', 
      alt: 'Ilustrasi sprain and strain', 
      description: 'Sprain adalah cedera pada ligamen, sedangkan strain adalah cedera pada otot atau tendon akibat peregangan berlebihan.',
      severity: 'Ringan-Sedang',
      color: 'from-amber-500 to-orange-500',
      icon: '🦵',
      firstAid: [
        'Istirahatkan bagian yang cedera (Rest)',
        'Kompres dengan es selama 15-20 menit (Ice)',
        'Balut dengan perban elastis (Compression)',
        'Tinggikan bagian yang cedera (Elevation)',
        'Berikan obat pereda nyeri jika diperlukan',
        'Hindari aktivitas yang memperparah cedera'
      ],
      prevention: [
        'Lakukan pemanasan sebelum beraktivitas',
        'Gunakan sepatu yang sesuai dan nyaman',
        'Hindari gerakan mendadak atau berlebihan',
        'Jaga kekuatan dan fleksibilitas otot'
      ],
      whenToSeekHelp: [
        'Nyeri hebat yang tidak berkurang',
        'Tidak dapat menggerakkan bagian yang cedera',
        'Mati rasa atau kesemutan',
        'Bengkak yang sangat parah',
        'Tidak ada perbaikan setelah 2-3 hari'
      ]
    },
    { 
      title: 'Patah Tulang', 
      image: '/images/cedera-patah-tulang.jpg', 
      alt: 'Ilustrasi patah tulang', 
      description: 'Patah tulang atau fraktur adalah terputusnya kontinuitas tulang akibat trauma atau tekanan yang melebihi kekuatan tulang.',
      severity: 'Berat',
      color: 'from-purple-600 to-purple-500',
      icon: '🦴',
      firstAid: [
        'Jangan pindahkan korban kecuali dalam bahaya',
        'Stabilkan bagian yang patah dengan bidai',
        'Gunakan kain atau handuk sebagai bantalan',
        'Ikat bidai di atas dan di bawah lokasi patah',
        'Kompres dengan es untuk mengurangi bengkak',
        'Segera bawa ke fasilitas kesehatan'
      ],
      prevention: [
        'Konsumsi makanan kaya kalsium dan vitamin D',
        'Lakukan olahraga teratur untuk menguatkan tulang',
        'Hindari aktivitas berisiko tinggi',
        'Gunakan alat pelindung diri yang sesuai'
      ],
      whenToSeekHelp: [
        'Segera cari bantuan medis untuk semua kasus patah tulang',
        'Tulang menonjol keluar dari kulit',
        'Kehilangan fungsi pada bagian yang cedera',
        'Nyeri hebat yang tidak tertahankan',
        'Perubahan warna kulit menjadi pucat atau biru'
      ]
    }
  ];

  return (
    <div className="min-h-screen font-avenir bg-gradient-to-br from-slate-50 via-red-50 to-pink-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        {/* Header */}
        <Header title="Kesiapsiagaan Bencana Pangalengan" />

        {/* Breadcrumb Navigation */}
        <section className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-red-600 transition-colors">Beranda</Link>
            <span>›</span>
            <span className="text-slate-800 font-medium">Penanganan Cedera</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-800 bg-clip-text text-transparent mb-4">
              Penanganan Cedera Darurat
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Panduan lengkap pertolongan pertama untuk berbagai jenis cedera yang mungkin terjadi saat bencana
            </p>
          </div>

          {/* Emergency Info Card */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nomor Darurat</h2>
                <p className="opacity-90">Hubungi segera jika terjadi cedera berat</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold">119</div>
                <div className="text-sm opacity-90">Pemadam Kebakaran</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold">118</div>
                <div className="text-sm opacity-90">Ambulans</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold">110</div>
                <div className="text-sm opacity-90">Polisi</div>
              </div>
            </div>
          </div>
        </section>

        {/* Injuries Grid */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Jenis-jenis Cedera</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pelajari cara menangani berbagai jenis cedera dengan tepat dan cepat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {injuries.map(({ title, image, alt, description, severity, color, icon }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => setModalContent(injuries[index])}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Severity Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      severity.includes('Berat') ? 'bg-red-500' : 
                      severity.includes('Sedang') ? 'bg-orange-500' : 
                      'bg-green-500'
                    }`}>
                      {severity}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {description.length > 120 ? description.substring(0, 120) + '...' : description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <span className="mr-2">📚</span>
                      <span>Panduan Lengkap</span>
                    </div>
                    <div className="flex items-center text-red-600 group-hover:text-red-700 transition-colors">
                      <span className="text-sm font-medium mr-2">Pelajari</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-8 py-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ingat: Keselamatan Utama!</h2>
            <p className="text-xl mb-6 opacity-90">
              Dalam situasi darurat, tetap tenang dan prioritaskan keselamatan diri sendiri sebelum membantu orang lain
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Nilai Situasi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Panggil Bantuan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Berikan Pertolongan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="max-w-7xl mx-auto px-8 py-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Kembali ke Beranda</span>
          </Link>
        </section>
      </main>

      {/* Comprehensive Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{modalContent.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800">{modalContent.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mt-2 ${
                      modalContent.severity.includes('Berat') ? 'bg-red-500' : 
                      modalContent.severity.includes('Sedang') ? 'bg-orange-500' : 
                      'bg-green-500'
                    }`}>
                      Tingkat: {modalContent.severity}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setModalContent(null)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-8">
                {/* Description */}
                <div className={`p-6 rounded-xl bg-gradient-to-r ${modalContent.color} text-white`}>
                  <h4 className="font-bold text-xl mb-3">Definisi</h4>
                  <p className="text-lg leading-relaxed">{modalContent.description}</p>
                </div>

                {/* First Aid Steps */}
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-xl text-slate-800 mb-4 flex items-center">
                    <span className="mr-2">🆘</span>
                    Langkah Pertolongan Pertama
                  </h4>
                  <ol className="space-y-3">
                    {modalContent.firstAid.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-slate-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Prevention */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-xl text-slate-800 mb-4 flex items-center">
                    <span className="mr-2">🛡️</span>
                    Pencegahan
                  </h4>
                  <ul className="space-y-2">
                    {modalContent.prevention.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to Seek Help */}
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <h4 className="font-bold text-xl text-slate-800 mb-4 flex items-center">
                    <span className="mr-2">⚠️</span>
                    Kapan Harus Mencari Bantuan Medis
                  </h4>
                  <ul className="space-y-2">
                    {modalContent.whenToSeekHelp.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Note */}
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">📋</span>
                    <h4 className="font-bold text-xl">Catatan Penting</h4>
                  </div>
                  <p className="text-lg">
                    Informasi ini hanya untuk panduan umum. Dalam situasi darurat yang serius, 
                    segera hubungi layanan medis darurat atau bawa korban ke rumah sakit terdekat. 
                    Jangan ragu untuk meminta bantuan profesional.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setModalContent(null)}
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Tutup Panduan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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