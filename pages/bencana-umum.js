import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function BencanaUmumPage() {
  const [modalContent, setModalContent] = useState(null);

  const disasters = [
    {
      title: "Banjir",
      image: "/api/placeholder/600/400",
      alt: "Gambar ilustrasi banjir",
      description:
        "Banjir adalah peristiwa meluapnya air ke daratan yang biasanya kering. Peristiwa ini dapat disebabkan oleh berbagai faktor dan dapat menimbulkan dampak serius terhadap kehidupan masyarakat.",
      severity: "Sedang",
      color: "from-blue-500 to-cyan-500",
      tips: {
        Penyebab: [
          "Hujan deras dalam waktu lama",
          "Sistem drainase yang buruk",
          "Sungai meluap akibat curah hujan tinggi",
          "Alih fungsi lahan yang mengurangi daya serap air",
        ],
        Dampak: [
          "Merusak rumah dan fasilitas umum",
          "Mengganggu aktivitas masyarakat sehari-hari",
          "Menyebabkan penyakit dan pencemaran lingkungan",
        ],
        "Pra-Bencana": [
          "Lakukan sosialisasi dan edukasi masyarakat tentang banjir",
          "Bersihkan saluran air dan limbah secara rutin",
          "Siapkan tas siaga berisi dokumen penting, makanan, dan perlengkapan darurat",
        ],
        [`Saat Banjir`]: [
          "Tetap tenang dan kontrol diri",
          "Segera evakuasi ke tempat yang lebih tinggi",
          "Gunakan benda terapung jika perlu",
          "Hindari kontak dengan aliran listrik atau kabel terendam air",
        ],
        "Pasca Bencana": [
          "Periksa dan bersihkan sistem saluran air",
          "Disinfeksi area yang terdampak banjir",
          "Bangun kembali rumah dan lingkungan dengan memperhatikan risiko banjir di masa depan",
        ],
      },
    },
    {
      title: "Gempa Bumi",
      image: "/api/placeholder/600/400",
      alt: "Gambar ilustrasi gempa bumi",
      description:
        "Gempa bumi adalah guncangan di permukaan bumi akibat pergeseran lempeng tektonik secara tiba-tiba yang bisa menyebabkan kerusakan.",
      severity: "Tinggi",
      color: "from-red-500 to-orange-500",
      tips: {
        Penyebab: [
          "Gempa bumi di dasar laut",
          "Letusan gunung api bawah laut",
          "Longsoran dasar laut",
        ],
        Dampak: [
          "Gelombang tinggi menyapu pesisir",
          "Merusak bangunan dan infrastruktur",
          "Menyebabkan korban jiwa dan pengungsian besar",
        ],
        "Pra-Bencana": [
          "Sosialisasi masyarakat tentang peringatan dan cara menghadapi gempa bumi",
          "Mempelajari lingkungan sekitar terhadap potensi gempa",
          "Menyiapkan tas siaga berisi perlengkapan darurat",
        ],
        "Saat Gempa Bumi": [
          "Berlindung di tempat aman seperti di bawah meja kuat",
          "Menuju titik kumpul evakuasi dengan jalur yang aman",
          "Jauhi bangunan yang mudah roboh atau pecahan kaca",
        ],
        "Pasca Bencana": [
          "Jangan mendekat ke daerah yang terkena dampak langsung",
          "Periksa kondisi lingkungan sekitar dengan hati-hati",
          "Cari informasi dari sumber terpercaya seperti BMKG atau pemerintah setempat",
        ],
      },
    },
    {
      title: "Tanah Longsor",
      image: "/api/placeholder/600/400",
      alt: "Gambar ilustrasi tanah longsor",
      description:
        "Tanah longsor adalah pergerakan tanah dan batu dari lereng yang dipicu oleh hujan deras, lereng curam, atau aktivitas manusia seperti penebangan liar.",
      severity: "Tinggi",
      color: "from-yellow-600 to-amber-500",
      tips: {
        Penyebab: [
          "Curah hujan tinggi dan terus-menerus",
          "Lereng curam dan kondisi tanah gembur",
          "Penggundulan hutan atau penebangan liar",
          "Getaran akibat gempa bumi atau aktivitas manusia (peledakan, lalu lintas berat)",
        ],
        Dampak: [
          "Menimbun rumah, jalan, dan lahan pertanian",
          "Mengakibatkan korban jiwa dan kerusakan harta benda",
          "Mengganggu akses transportasi dan komunikasi",
          "Memicu bencana sekunder seperti banjir bandang",
        ],
        "Pra-Bencana": [
          "Sosialisasi kepada masyarakat tentang potensi dan bahaya tanah longsor",
          "Memetakan wilayah rawan longsor dan memberi rambu peringatan",
          "Tidak membangun pemukiman di lereng terjal atau zona rawan longsor",
          "Menyiapkan tas siaga bencana",
        ],
        "Saat Tanah Longsor": [
          "Segera evakuasi jika terdengar suara gemuruh atau retakan tanah ke tempat aman",
          "Hindari daerah lereng yang terlihat retak, basah, atau mulai bergerak",
        ],
        "Pasca Bencana": [
          "Jauhi lokasi longsor karena potensi longsor susulan",
          "Periksa lingkungan sekitar, laporkan kerusakan atau korban ke pihak berwenang",
          "Cari informasi dari sumber terpercaya",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen font-avenir bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10">
        <Header title="Kesiapsiagaan Bencana Pangalengan" />

        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <span>›</span>
            <span className="text-slate-800 font-medium">Bencana Umum</span>
          </nav>
        </section>

        {/* Title */}
        <section className="text-center mb-12 px-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
            Bencana Alam Pangalengan
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Memahami potensi bencana alam di wilayah Pangalengan untuk
            meningkatkan kesiapsiagaan masyarakat
          </p>
        </section>

        {/* Geology Info Card */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 sm:p-8 mb-12">
            {/* Judul */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                Kondisi Geologi di Pangalengan
              </h2>
            </div>

            {/* Konten utama */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-6 md:space-y-0">
              {/* Logo UGM */}
              <div className="relative w-full md:w-2/5 aspect-[3/1]">
                <Image
                  src="/images/logo-ugm.png"
                  alt="Logo UGM"
                  title="UGM"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Teks deskripsi */}
              <div className="w-full md:w-3/5 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500 text-justify">
                <h3 className="text-base sm:text-lg font-semibold text-black">
                  Kondisi geologi Kecamatan Pangalengan didominasi oleh batuan
                  hasil erupsi dan endapan piroklastik Gunung Pangalengan purba
                  yang membentuk dataran dengan Situ Cileunca sebagai bekas
                  kalderanya. Wilayah ini kemudian ditutupi produk gunung api
                  muda seperti Gunung Windu, Wayang, dan Malabar yang berumur
                  Kuarter Atas (Pleistosen), dengan batuan yang umumnya masih
                  lepas-lepas. Struktur geologi utama berupa kelurusan
                  sesar/patahan berarah tenggara–barat laut.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Grid */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Potensi Bencana Alam
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Klik pada setiap kartu untuk mempelajari lebih lanjut tentang
              jenis bencana dan tips kesiapsiagaan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {disasters.map((disaster, index) => (
              <div
                key={disaster.title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => setModalContent(disaster)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${disaster.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={disaster.image}
                    alt={disaster.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        disaster.severity === "Tinggi"
                          ? "bg-red-500"
                          : disaster.severity === "Sedang"
                          ? "bg-orange-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      Risiko {disaster.severity}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {disaster.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {disaster.description.length > 120
                      ? disaster.description.slice(0, 120) + "..."
                      : disaster.description}
                  </p>
                  <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform group-hover:scale-105">
                    Klik untuk Detail
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">
                      {modalContent.icon || "🌍"}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {modalContent.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setModalContent(null)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Risiko */}
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${modalContent.color} text-white mb-6`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Tingkat Risiko</span>
                    <span className="font-bold">{modalContent.severity}</span>
                  </div>
                </div>

                {/* Deskripsi */}
                <div className="bg-slate-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Deskripsi Bencana
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {modalContent.description}
                  </p>
                </div>

                {/* Tips per Kategori */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Tips Kesiapsiagaan
                  </h4>
                  <div className="space-y-6 text-slate-700">
                    {Object.entries(modalContent.tips).map(
                      ([category, tips], idx) => (
                        <div key={idx}>
                          <h5 className="font-semibold text-slate-800 mb-2">
                            {category}
                          </h5>
                          <ul className="space-y-2">
                            {tips.map((tip, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-2"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tombol Tutup */}
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setModalContent(null)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

      <style jsx global>{`
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
