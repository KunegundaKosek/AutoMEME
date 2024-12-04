import Carousel from "@/components/layout/Carousel/Carousel"

export default function Home() {
  console.log("loaded .... Home tsx")
  return (
    <div className="min-h-screen bg-white">
      {/* <Carousel /> */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to <span className="text-red-600">WebApp</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your daily source of entertainment, advice, and community discussions.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {['Memes', 'Videos', 'Confessions', 'Advice', 'Blog', 'Contact'].map((section) => (
            <div key={section} className="relative group">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={`https://source.unsplash.com/random/800x600?${section.toLowerCase()}`}
                  alt={section}
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{section}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Explore our {section.toLowerCase()} section for the latest content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}