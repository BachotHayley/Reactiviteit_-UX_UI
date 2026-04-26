import Link from "next/link";

export default function Home() {
  const artikels = [
    {
      id: "artikel1",
      titel: "Leidt AI-slop tot de dood van sociale media?",
      beschrijving: "Sociale media slibben dicht met AI-video's van mensen die niet bestaan. Blijven we daar in 2026 naar kijken?",
      categorie: "De Technocraat",
      kleur: "text-blue-600",
      img: "/ai-cat.png"
    },
    {
      id: "artikel2",
      titel: "Vibecoding: je eigen apps maken met AI",
      beschrijving: "Waarom een dure app gebruiken als AI er een voor je op maat kan maken? Ontdek de wereld van vibecoding.",
      categorie: "De Helpdesk",
      kleur: "text-blue-600",
      img: "/vibecoding.png"
    },
    {
      id: "artikel3",
      titel: "Het Spartacus-moment van Silicon Valley",
      beschrijving: "Dario Amodei (Anthropic) neemt een moedig ethisch standpunt in tegen de overheid. Een keerpunt voor Big Tech?",
      categorie: "De Technocraat",
      kleur: "text-blue-600",
      img: "/dario.png"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto py-24 px-6 font-sans">
      {/* Krantenkop / Header */}
      <header className="border-b-4 border-black pb-8 mb-12 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-serif">
          Nieuws
        </h1>
        <p className="text-sm mt-4 font-medium text-gray-500 uppercase tracking-widest">
          Project Reactiviteit & UX/UI • Hayley Bachot
        </p>
      </header>

      {/* Grid met de 3 kaarten */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {artikels.map((artikel) => (
          <Link key={artikel.id} href={`/${artikel.id}`} className="group">
            <div className="border-b border-gray-200 pb-6 h-full flex flex-col">
              {/* Image box */}
              <div className="aspect-video mb-4 overflow-hidden bg-gray-100 rounded-sm shadow-sm">
                <img 
                  src={artikel.img} 
                  alt={artikel.titel} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${artikel.kleur}`}>
                {artikel.categorie}
              </p>

              <h2 className="text-2xl font-serif font-bold leading-tight mb-3 group-hover:underline">
                {artikel.titel}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {artikel.beschrijving}
              </p>

              <span className="text-xs font-bold uppercase border-b-2 border-black pb-1 self-start">
                Lees artikel
              </span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs">
          © 2026 Hayley Bachot • UX/UI Opdracht
        </p>
      </footer>
    </main>
  );
}