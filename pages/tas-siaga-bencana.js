import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function TasSiagaBencanaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalContent, setModalContent] = useState(null);

  const categories = [
    { id: 'all', name: 'Semua Item', icon: '📦', color: 'from-blue-500 to-purple-500' },
    { id: 'medical', name: 'Medis', icon: '🏥', color: 'from-red-500 to-pink-500' },
    { id: 'food', name: 'Makanan', icon: '🍞', color: 'from-green-500 to-emerald-500' },
    { id: 'tools', name: 'Peralatan', icon: '🔧', color: 'from-orange-500 to-amber-500' },
    { id: 'communication', name: 'Komunikasi', icon: '📡', color: 'from-purple-500 to-indigo-500' },
    { id: 'clothing', name: 'Pakaian', icon: '👕', color: 'from-cyan-500 to-blue-500' }
  ];

  const contents = [
    {
      title: 'Kotak P3K',
      category: 'medical',
      image: '/images/p3k.png',
      alt: 'Kotak P3K lengkap',
      description: 'Kotak P3K berisi obat-obatan dasar, perban, antiseptik, dan peralatan medis sederhana untuk pertolongan pertama.',
      items: ['Perban elastis', 'Antiseptik', 'Obat pereda nyeri', 'Termometer', 'Sarung tangan medis', 'Gunting medis'],
      priority: 'Sangat Penting',
      quantity: '1 set',
      tips: 'Periksa tanggal kedaluwarsa obat setiap 6 bulan sekali'
    },
    {
      title: 'Air Minum',
      category: 'food',
      image: '/images/air-minum.png',
      alt: 'Botol air minum',
      description: 'Air minum bersih yang cukup untuk 3 hari, minimal 1 liter per orang per hari.',
      items: ['Botol air 1.5L', 'Tablet purifikasi air', 'Botol kosong cadangan'],
      priority: 'Sangat Penting',
      quantity: '3 liter/orang',
      tips: 'Ganti air setiap 6 bulan dan simpan di tempat sejuk'
    },
    {
      title: 'Makanan Kaleng',
      category: 'food',
      image: '/images/makanan-kaleng.png',
      alt: 'Makanan kaleng tahan lama',
      description: 'Makanan kaleng dan makanan kering yang tahan lama untuk kebutuhan darurat.',
      items: ['Kornet sapi', 'Susu kental manis', 'Biscuit kaleng', 'Mie instan', 'Buah kaleng'],
      priority: 'Sangat Penting',
      quantity: '3 hari persediaan',
      tips: 'Pilih makanan yang tidak perlu dimasak atau mudah disiapkan'
    },
    {
      title: 'Senter LED',
      category: 'tools',
      image: '/images/senter.png',
      alt: 'Senter LED dengan baterai',
      description: 'Senter LED dengan baterai cadangan atau senter yang dapat dicharge manual.',
      items: ['Senter LED', 'Baterai AA cadangan', 'Lampu kepala', 'Senter dynamo'],
      priority: 'Sangat Penting',
      quantity: '2-3 buah',
      tips: 'Tes senter setiap bulan dan pastikan baterai masih bagus'
    },
    {
      title: 'Radio Darurat',
      category: 'communication',
      image: '/images/radio.png',
      alt: 'Radio darurat portable',
      description: 'Radio portable untuk mendapatkan informasi darurat dan komunikasi dengan tim penyelamat.',
      items: ['Radio AM/FM', 'Radio weather band', 'Baterai cadangan', 'Earphone'],
      priority: 'Penting',
      quantity: '1 buah',
      tips: 'Pilih radio yang bisa dicharge manual atau dengan solar panel'
    },
    {
      title: 'Pakaian Ganti',
      category: 'clothing',
      image: '/images/pakaian.png',
      alt: 'Pakaian ganti untuk darurat',
      description: 'Pakaian ganti yang sesuai dengan cuaca dan kondisi darurat.',
      items: ['Kaos dalam', 'Kaos lengan panjang', 'Celana panjang', 'Jaket hujan', 'Kaos kaki', 'Sepatu kuat'],
      priority: 'Penting',
      quantity: '2-3 set',
      tips: 'Sesuaikan dengan iklim dan musim di daerah Anda'
    },
    {
      title: 'Dokumentasi Penting',
      category: 'tools',
      image: '/images/dokumen.png',
      alt: 'Dokumen penting dalam plastik kedap air',
      description: 'Fotokopi dokumen penting dalam kantong plastik kedap air.',
      items: ['KTP/Identitas', 'Sertifikat rumah', 'Polis asuransi', 'Kartu keluarga', 'Rekening bank'],
      priority: 'Sangat Penting',
      quantity: '1 set lengkap',
      tips: 'Simpan dalam kantong plastik kedap air atau container waterproof'
    },
    {
      title: 'Uang Tunai',
      category: 'tools',
      image: '/images/uang.png',
      alt: 'Uang tunai untuk darurat',
      description: 'Uang tunai dalam denominasi kecil untuk kebutuhan darurat.',
      items: ['Uang kertas kecil', 'Uang logam', 'Kartu ATM'],
      priority: 'Sangat Penting',
      quantity: 'Secukupnya',
      tips: 'Simpan uang dalam denominasi kecil dan dalam kantong kedap air'
    },
    {
      title: 'Peralatan Kebersihan',
      category: 'medical',
      image: '/images/toiletries.png',
      alt: 'Peralatan kebersihan pribadi',
      description: 'Peralatan kebersihan pribadi untuk menjaga hygiene selama darurat.',
      items: ['Sabun cair', 'Shampoo sachet', 'Sikat gigi', 'Pasta gigi', 'Tissue basah', 'Hand sanitizer'],
      priority: 'Penting',
      quantity: '3 hari kebutuhan',
      tips: 'Pilih kemasan travel size yang praktis'
    }
  ];

  const filteredContents = selectedCategory === 'all' 
    ? contents 
    : contents.filter(item => item.category === selectedCategory);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Sangat Penting': return 'bg-red-500';
      case 'Penting': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen font-avenir bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10">
        <Header title="Kesiapsiagaan Bencana Pangalengan" />

        {/* Breadcrumb Navigation */}
        <section className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
            <span>›</span>
            <span className="text-slate-800 font-medium">Tas Siaga Bencana</span>
          </nav>
        </section>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">
              Tas Siaga Bencana
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Persiapkan tas siaga bencana untuk melindungi keluarga Anda saat terjadi bencana alam
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-8 py-8 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">🎒</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800">Pentingnya Tas Siaga Bencana</h2>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Definisi</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Tas siaga bencana adalah tas berisi perlengkapan darurat yang sudah disiapkan sebelumnya untuk menghadapi situasi bencana alam. Tas ini berisi kebutuhan dasar yang dapat bertahan selama 72 jam pertama setelah bencana terjadi.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Tujuan</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Memastikan keluarga memiliki akses terhadap kebutuhan dasar seperti makanan, air, obat-obatan, dan peralatan penting saat bantuan belum datang atau infrastruktur rusak akibat bencana.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Prinsip 72 Jam</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Tas siaga bencana harus mampu memenuhi kebutuhan dasar selama 72 jam pertama, karena biasanya bantuan darurat membutuhkan waktu 1-3 hari untuk sampai ke lokasi bencana.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src="/images/tas-siaga-bencana.png"
                    alt="Ilustrasi Tas Siaga Bencana"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                      Tas Siaga Bencana Lengkap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Items Grid */}
        <section className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContents.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Priority Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 ${getPriorityColor(item.priority)} text-white rounded-full text-xs font-semibold`}>
                    {item.priority}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Category Icon */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-2xl">
                      {categories.find(cat => cat.id === item.category)?.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-500">Jumlah: {item.quantity}</span>
                    <span className="text-sm font-medium text-blue-600">
                      {item.items.length} item
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setModalContent(item)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Tips Membuat & Menyimpan Tas Siaga Bencana</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-xl mr-3">✅</span>
                    Tips Persiapan
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Libatkan seluruh anggota keluarga dalam persiapan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Buat daftar inventaris dan cek berkala</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Pilih tas yang kuat dan tahan air</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Sesuaikan isi dengan kebutuhan khusus keluarga</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-xl mr-3">📍</span>
                    Lokasi Penyimpanan
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Simpan di tempat yang mudah dijangkau</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Hindari area yang berpotensi tertimpa atau terkena banjir</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Pastikan semua anggota keluarga tahu lokasinya</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span>Siapkan di beberapa lokasi (rumah, kantor, mobil)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-xl mr-3">🔄</span>
                    Perawatan & Pengecekan
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span>Cek dan ganti makanan/obat yang kedaluwarsa</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span>Tes peralatan elektronik secara berkala</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span>Update dokumen dan informasi kontak</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <span>Lakukan pengecekan setiap 6 bulan</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <span className="text-xl mr-3">👨‍👩‍👧‍👦</span>
                    Kebutuhan Khusus
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Tambahkan kebutuhan bayi (susu formula, popok)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Obat-obatan khusus untuk lansia atau penderita penyakit kronis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Peralatan bantu (kacamata, alat bantu dengar)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span>Makanan khusus untuk hewan peliharaan</span>
                    </li>
                  </ul>
                </div>
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Kembali ke Beranda</span>
          </Link>
        </section>
      </main>

      {/* Enhanced Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">
                    {categories.find(cat => cat.id === modalContent.category)?.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800">{modalContent.title}</h3>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={modalContent.image}
                      alt={modalContent.alt}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className={`p-4 rounded-xl ${getPriorityColor(modalContent.priority)} text-white`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Prioritas</span>
                      <span className="font-bold">{modalContent.priority}</span>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">Deskripsi</h4>
                    <p className="text-slate-700 leading-relaxed">{modalContent.description}</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">Tips</h4>
                    <p className="text-blue-700 leading-relaxed italic">{modalContent.tips}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Daftar Isi</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {modalContent.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
