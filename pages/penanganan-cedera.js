import React, { useState } from "react";


import Link from "next/link";
import Header from "../components/Header";

const injuries = [
  {
    title: "Cedera Kepala",
    alt: "Ilustrasi cedera kepala",
    description:
      "Kerusakan atau trauma pada kepala yang bisa melibatkan kulit, tulang tengkorak, otak, atau jaringan di sekitarnya akibat benturan, pukulan, jatuh, atau kecelakaan.",
    severity: "Ringan-Berat",
    color: "from-red-500 to-pink-500",
    icon: "🤕",
    hasSubTypes: true,
    subTypes: [
      {
        name: "Cedera Kepala Ringan",
        symptoms: [
          "Bisa berkomunikasi",
          "Mengeluh pusing ringan",
          "Mual muntah 1-2 kali",
        ],
        severity: "Ringan",
      },
      {
        name: "Cedera Kepala Sedang",
        symptoms: [
          "Mengalami gangguan bicara",
          "Muntah berulang",
          "Sakit kepala sedang hingga berat",
          "Penurunan kesadaran",
        ],
        severity: "Sedang",
      },
      {
        name: "Cedera Kepala Berat",
        symptoms: [
          "Tidak sadar",
          "Pupil non reaksi cahaya",
          "Kejang",
          "Napas tidak teratur",
          "Perdarahan telinga hidung mulut",
          "Kelumpuhan",
          "Perubahan perilaku mendadak (agresif bingung dll)",
        ],
        severity: "Berat",
      },
    ],
    firstAid: [
      "Amankan lokasi kejadian",
      "Cek respon korban (dipanggil, dibangunkan)",
      "Lihat bagaimana keadaan korban",
      "Panggil Ambulance",
    ],
    prevention: [
      "Gunakan helm saat berkendara",
      "Pasang handrail di tangga",
      "Hindari permukaan licin",
      "Gunakan sabuk pengaman di kendaraan",
    ],
    whenToSeekHelp: [
      "Kehilangan kesadaran",
      "Muntah berulang",
      "Kejang",
      "Perdarahan dari telinga/hidung",
    ],
  },
  {
    title: "Luka & Pendarahan",
    alt: "Ilustrasi luka dan pendarahan",
    description:
      "Kerusakan pada jaringan tubuh atau kehilangan darah yang dapat terjadi secara terbuka maupun tertutup.",
    severity: "Ringan-Berat",
    color: "from-red-600 to-red-400",
    icon: "🩸",
    hasSubTypes: true,
    subTypes: [
      {
        name: "Luka Terbuka/Robek",
        description: "Luka dengan kerusakan kulit yang terbuka",
        category: "Luka",
      },
      {
        name: "Luka Gores/Abrasi",
        description: "Luka akibat gesekan pada permukaan kulit",
        category: "Luka",
      },
      {
        name: "Luka Memar/Contusio",
        description: "Luka tertutup dengan perdarahan di bawah kulit",
        category: "Luka",
      },
      {
        name: "Perdarahan Luar",
        description:
          "Luka yang ditandai dengan kulit korban sudah tidak utuh. Penyebab utamanya adalah trauma benda tajam.",
        category: "Pendarahan",
      },
      {
        name: "Perdarahan Dalam",
        description:
          "Perdarahan yang terjadi akibat luka tertutup, ditandai dengan keadaan kulit korban yang masih utuh dan tidak terkontaminasi dengan dunia luar",
        category: "Pendarahan",
      },
    ],
    firstAid: [
      "Cuci tangan penolong untuk menghindari infeksi",
      "Lepas perhiasan, jam tangan atau pakaian yang menutupi luka",
      "Hentikan darah dengan 2T (tekan dan tinggikan)",
      "Bersihkan luka dengan air bersih",
      "Menutup luka dengan kain bersih",
      "Pertahankan tekanan sampai darah berhenti",
      "Hubungi tim medis (ambulance) jika perlu",
    ],
    prevention: [
      "Gunakan alat pelindung diri saat bekerja",
      "Hindari permukaan yang tajam atau kasar",
      "Jaga kebersihan lingkungan kerja",
      "Gunakan sepatu tertutup saat beraktivitas",
    ],
    whenToSeekHelp: [
      "Perdarahan tidak berhenti setelah 15 menit",
      "Luka dalam atau lebar",
      "Terdapat benda asing yang tertancap",
      "Muncul tanda-tanda infeksi",
    ],
  },
  {
    title: "Terkilir",
    alt: "Ilustrasi terkilir",
    description:
      "Sprain dan strain ini terjadi akibat peregangan atau robeknya ligamen atau otot/tendon yang menyebabkan pembengkakan.",
    severity: "Ringan-Sedang",
    color: "from-orange-500 to-yellow-500",
    icon: "🦵",
    hasSubTypes: false,
    firstAid: [
      "Jaga daerah cedera dari kemungkinan cedera lain",
      "Tetap beraktivitas dan bergerak selama tidak melebihi batas rasa sakit",
      "Setelah 48 jam, kompres dingin bagian yang terkilir selama 20 menit setiap 2 jam",
      "Lakukan pembebatan dengan elastic bandage",
      "Tinggikan bagian yang terkilir hingga lebih tinggi dari jantung agar darahnya tidak menumpuk",
    ],
    prevention: [
      "Lakukan pemanasan sebelum olahraga",
      "Gunakan sepatu yang sesuai",
      "Perhatikan permukaan jalan saat berjalan",
      "Jaga keseimbangan tubuh",
    ],
    whenToSeekHelp: [
      "Nyeri sangat parah",
      "Tidak bisa menggerakkan bagian yang terkilir",
      "Pembengkakan yang parah",
      "Mati rasa atau kesemutan",
    ],
  },
  {
    title: "Patah Tulang",
    alt: "Ilustrasi patah tulang",
    description:
      "Kerusakan pada tulang yang dapat terjadi secara tertutup maupun terbuka dengan tingkat keparahan yang berbeda.",
    severity: "Sedang-Berat",
    color: "from-purple-500 to-indigo-500",
    icon: "🦴",
    hasSubTypes: true,
    subTypes: [
      {
        name: "Patah Tulang Tertutup",
        description:
          "Kulit di permukaan tulang yang patah masih utuh. Bisa menyebabkan perdarahan di dalam",
        firstAid: [
          "Bertanya kepada korban apakah bisa menggerakkan area yang terasa nyeri",
          "Penolong tidak boleh menggerakkan bagian patah tulang",
          "Immobilisasi patah tulang dengan spalk dan bidai",
          "Panggil bantuan medis/ambulance",
        ],
      },
      {
        name: "Patah Tulang Terbuka",
        description:
          "Tulang yang patah terekspos dan menembus kulit sehingga kulitnya robek. Bisa menyebabkan perdarahan luar dan risiko infeksi",
        firstAid: [
          "Lihat bagian patahan dan beri balutan khusus",
          "Penolong tidak boleh menggerakkan bagian patah tulang",
          "Immobilisasi patah tulang yang mencuat dengan mitela donat, spalk dan bidai",
          "Panggil bantuan medis/ambulance",
        ],
      },
    ],
    firstAid: [
      "Jangan menggerakkan bagian yang patah",
      "Immobilisasi dengan spalk dan bidai",
      "Panggil bantuan medis segera",
      "Berikan dukungan emosional pada korban",
    ],
    prevention: [
      "Konsumsi makanan kaya kalsium",
      "Olahraga teratur untuk memperkuat tulang",
      "Hindari aktivitas berisiko tinggi",
      "Gunakan alat pelindung saat berolahraga",
    ],
    whenToSeekHelp: [
      "Patah tulang terbuka",
      "Deformitas yang jelas",
      "Nyeri hebat yang tidak berkurang",
      "Kehilangan fungsi anggota tubuh",
    ],
  },
];

const InjuryGuideApp = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (injury) => {
    setModalContent(injury);
  };

  const renderSubTypes = (injury) => {
    if (!injury.hasSubTypes) return null;

    return (
      <div className="bg-gray-50 p-6 rounded-xl mb-6">
        <h4 className="font-bold text-xl text-slate-800 mb-4 flex items-center">
          <span className="mr-2">📋</span>
          Jenis dan Tipe
        </h4>
        <div className="space-y-4">
          {injury.subTypes.map((subType, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-semibold text-lg text-slate-800">
                  {subType.name}
                </h5>
                {subType.severity && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                      subType.severity === "Berat"
                        ? "bg-red-500"
                        : subType.severity === "Sedang"
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }`}
                  >
                    {subType.severity}
                  </span>
                )}
                {subType.category && (
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
                    {subType.category}
                  </span>
                )}
              </div>

              {subType.description && (
                <p className="text-slate-600 mb-3">{subType.description}</p>
              )}

              {subType.symptoms && (
                <div className="mb-3">
                  <h6 className="font-semibold text-sm text-slate-700 mb-2">
                    Gejala:
                  </h6>
                  <ul className="space-y-1">
                    {subType.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">
                          {symptom}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {subType.firstAid && (
                <div>
                  <h6 className="font-semibold text-sm text-slate-700 mb-2">
                    Penanganan Khusus:
                  </h6>
                  <ol className="space-y-1">
                    {subType.firstAid.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white rounded-full text-xs font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm text-slate-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <Header title="Kesiapsiagaan Bencana Pangalengan" />
      <section className="max-w-7xl mx-auto px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <span>›</span>
          <span className="text-slate-800 font-medium">Penanganan Cedera</span>
        </nav>
      </section>
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              🚑 Panduan Pertolongan Pertama
            </h1>
            <p className="text-lg text-slate-600">
              Panduan lengkap untuk menangani berbagai jenis cedera dan kondisi
              darurat
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {injuries.map((injury, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              onClick={() => handleCardClick(injury)}
            >
              <div
                className={`h-48 bg-gradient-to-r ${injury.color} flex items-center justify-center`}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">{injury.icon}</div>
                  <h3 className="text-2xl font-bold">{injury.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      injury.severity.includes("Berat")
                        ? "bg-red-500"
                        : injury.severity.includes("Sedang")
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }`}
                  >
                    Tingkat: {injury.severity}
                  </span>
                  {injury.hasSubTypes && (
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {injury.subTypes.length} Tipe
                    </span>
                  )}
                </div>

                <p className="text-slate-600 mb-4 line-clamp-3">
                  {injury.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Lihat Panduan Lengkap</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{modalContent.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800">
                      {modalContent.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mt-2 ${
                        modalContent.severity.includes("Berat")
                          ? "bg-red-500"
                          : modalContent.severity.includes("Sedang")
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }`}
                    >
                      Tingkat: {modalContent.severity}
                    </span>
                  </div>
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

              {/* Modal Content */}
              <div className="space-y-8">
                {/* Description */}
                <div
                  className={`p-6 rounded-xl bg-gradient-to-r ${modalContent.color} text-white`}
                >
                  <h4 className="font-bold text-xl mb-3">Definisi</h4>
                  <p className="text-lg leading-relaxed">
                    {modalContent.description}
                  </p>
                </div>

                {/* Sub Types */}
                {renderSubTypes(modalContent)}

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
                    Informasi ini hanya untuk panduan umum. Dalam situasi
                    darurat yang serius, segera hubungi layanan medis darurat
                    atau bawa korban ke rumah sakit terdekat. Jangan ragu untuk
                    meminta bantuan profesional.
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
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 sm:p-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📢</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                Ingin mengakses konten sosialisasi?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Klik tombol di bawah untuk melihat materi dan informasi seputar
                bencana.
              </p>
              <button
                onClick={() => {
                  /* ganti dengan aksi navigasi/link Anda */
                }}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Konten Sosialisasi
              </button>
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
    </div>
    
  );
};

export default InjuryGuideApp;
