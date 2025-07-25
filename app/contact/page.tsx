// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <div className="bg-gray-100 shadow-md rounded-2xl p-8 w-full max-w-md space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Name</h2>
          <p>Shannon Shu’aib Petre</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <a
            href="mailto:shannon.petre@gmail.com"
            className="text-blue-600 hover:underline"
          >
            shannon.petre@gmail.com
          </a>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Phone</h2>
          <p>083 641 1990</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Location</h2>
          <p>Cape Town, South Africa</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">GitHub</h2>
          <a
            href="https://github.com/ShuaibPetre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/ShuaibPetre
          </a>
        </div>
      </div>
    </main>
  );
}
