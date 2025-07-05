// pages/assesmen.jsx
import Image from 'next/image';
import Header from '../components/Header';

export default function AssesmenPage() {
  return (
    <div className="relative min-h-screen font-avenir">
      <div className="absolute inset-0">
        <Image src="/images/pangalengan.jpeg" alt="Pangalengan" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBED]/60 to-[#F7F3E8]/60" />
      </div>
      <main className="relative z-10">
        <Header title="Assessment Siaga Bencana" />
        <section className="max-w-7xl mx-auto px-8 py-12">
          <p className="bg-white p-6 rounded-lg shadow-lg text-gray-800">Lorem ipsum dolor sit amet, assessment content.</p>
        </section>
      </main>
      <style jsx global>{`...`}</style>
    </div>
  );
}
