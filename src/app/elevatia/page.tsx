export default function ElevatiaPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ELEVATIA MANUFACTURING (OPC) PRIVATE LIMITED
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Revkins is a product developed and operated by Elevatia Manufacturing (OPC) Private Limited.
      </p>

      <a
        href="/elevatia-incorporation.pdf"
        target="_blank"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        View Certificate of Incorporation
      </a>
    </div>
  );
}