export default function FAQPage() {
  return (
    <main className="container mx-auto p-10 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg bg-white">
          <h3 className="font-bold">Berapa lama pengiriman?</h3>
          <p className="text-gray-600 text-sm">Pengiriman biasanya memakan waktu 2-3 hari kerja.</p>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h3 className="font-bold">Apakah bisa return produk?</h3>
          <p className="text-gray-600 text-sm">Tentu, selama label belum dilepas dan dalam jangka waktu 7 hari.</p>
        </div>
      </div>
    </main>
  );
}