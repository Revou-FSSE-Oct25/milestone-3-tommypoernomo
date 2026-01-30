export default function FAQ({ content }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
      <p className="mt-4">{content}</p>
    </div>
  );
}

// Menghasilkan halaman secara statis saat build time
export async function getStaticProps() {
  return {
    props: {
      content: "Ini adalah data statis yang di-generate saat build."
    }
  };
}