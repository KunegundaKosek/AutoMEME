import Link from 'next/link';
import Image from 'next/image';
import UncontrolledExample from '@/components/layout/Carousel/Carousel';
import Carousel from '@/components/layout/Carousel/Carousel';
const a1 = [
  {title: 'Memes', description: "Sprawdź nasze memy o samochodach i pośmiej się z motoryzacyjnych żartów!"},
  {title: 'Videos', description: "Zobacz zabawne filmiki związane z motoryzacją – rozrywka gwarantowana!"},
  {title: 'Confessions', description: "Podziel się swoimi absurdalnymi historiami z samochodami w roli głównej."},
  {title: 'Porady', description: "Poznaj nasze nietypowe, zabawne porady samochodowe – śmiech to zdrowie!"},
  {title: 'Blog', description: "Czytaj nasze lekkie i humorystyczne wpisy o motoryzacji."},
  {title: 'Kontakt', description: "Masz coś do dodania? Skontaktuj się z nami i dołącz do naszej zabawnej społeczności!"},


]
// bg-[url('../assets/images/background.webp')] bg-cover bg-center
export default function Home() {
  return (
    <div className="min-h-screen bg-[url('../assets/images/background.webp')] bg-cover bg-center">
      {/* <Carousel /> */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Witam na stronie <span className="text-red-600">AutoMEME</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Waszym szrotom i tak nic nie pomoże – ale przynajmniej się pośmiejemy.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {a1.map((section) => (
            <Link key={section.title} href={`/${section.title.toLowerCase()}`}>
              <div className="relative group">
                <div className="aspect-w-3 aspect-h-2 relative">
                  {/* <Image
                    src={`https://source.unsplash.com/random/800x600?${section.toLowerCase()}`}
                    alt={section}
                    className="object-cover rounded-lg shadow-lg"
                    fill
                  /> */}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {section.description.toLowerCase()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}