export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your first Next.js application. This is a simple Hello World page built with modern web technologies.
        </p>
        <div className="pt-4">
          <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <p className="text-sm text-gray-500 font-medium">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}