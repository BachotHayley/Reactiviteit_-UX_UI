import Image from "next/image";

export default function ArtikelEen() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-serif text-slate-900 bg-white">
      
      {/* Header sectie */}
      <header className="mb-8">
        <div className="mb-6 overflow-hidden rounded-sm shadow-sm">
          <img 
            src="/ai-cat.png" 
            alt="AI gegenereerde kat op een fiets" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           Schattige katten, gegenereerd door AI. © youtube 
          </p>
        </div>

        <p className="text-blue-700 font-bold tracking-tighter uppercase text-xs mb-3 font-sans">
          De Technocraat 
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-serif tracking-tight">
          Leidt AI-slop tot de dood van sociale media? 
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-700 mb-8 leading-snug font-sans">
          Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop: video&apos;s met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in 2026 naar kijken?
        </p>

        {/* Auteur en Interactie balk */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t border-b border-slate-100 font-sans text-sm mb-10">
          <div className="mb-4 sm:mb-0">
            <span className="font-bold border-b-2 border-blue-600 pb-1">Dominique Deckmyn</span>
            <p className="text-slate-500 mt-2 text-xs">2 januari 2026 om 23:59</p>
          </div>
          <div className="flex space-x-6 text-blue-600 font-bold uppercase tracking-widest text-xs">
            <button className="flex items-center hover:text-blue-800">
              <span className="mr-2">▶</span> Luisteren
            </button>
            <button className="hover:text-blue-800">Delen</button>
          </div>
        </div>
      </header>

      {/* Artikel inhoud */}
      <section className="prose prose-slate prose-lg max-w-none font-serif leading-relaxed text-slate-800 border-b border-slate-100 pb-12">
        <p className="mb-6">
          De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we daarnaar blijven kijken? 
        </p>

        <p className="mb-6">
          Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen.  Met keuzes die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus.  Als je op Youtube een nieuwe account aanmaakt, dan is 20 procent van de video&apos;s die je worden aangeboden van AI afkomstig. 
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          Mark Zuckerberg 
        </h2>
        
        <p className="mb-6">
          Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent een nieuw tijdperk in sociale media.  Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, zei hij.  Maar al snel bleek dat we ons liever vergapen aan de levens van celebrity&apos;s en influencers - tijdperk twee.  En nu komt er een stortvloed van AI-video&apos;s aan. 
        </p>
        
        <p className="mb-6 italic text-slate-600 border-l-4 border-slate-200 pl-4">
          "Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo’s, u krijgt kattenvideo’s die nog veel schattiger zijn dan in het echt." 
        </p>

        <p className="mb-6">
          Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een computer gegenereerde video’s, aanbevolen door een algoritme?  In die zin zien we nu de dood van sociale media.  Al lijkt Zuckerberg daar niet echt van wakker te liggen. 
        </p>
      </section>

      {/* NIEUW: Lees Ook Sectie (UI element uit screenshot) */}
      <section className="mt-12 font-sans">
        <div className="flex border-l-4 border-black pl-4 mb-8">
          <div className="flex-1">
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2">Lees ook </h3>
            <p className="text-xl font-bold hover:underline cursor-pointer">
              Kandidaat-product van het jaar: de AI-videogenerator. &quot;De acteursfilm zal duurder worden dan de superheldenproductie&quot; 
            </p>
          </div>
          <div className="ml-4 hidden sm:block">
            <img src="/placeholder-robot.png" alt="AI Robot" className="w-32 h-20 object-cover" />
          </div>
        </div>

        {/* NIEUW: Tags / Onderwerpen */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Cultuur en media", "De Technocraat", "Artificiële intelligentie", "Mark Zuckerberg"].map((tag) => (
            <span key={tag} className="border border-black px-4 py-2 text-sm font-medium hover:bg-slate-50 cursor-pointer">
              {tag} 
            </span>
          ))}
        </div>

        <div className="bg-slate-100 p-4 text-sm text-slate-600 italic">
          <p>Fout gezien? <span className="underline cursor-pointer">Meld het ons hier</span> </p>
        </div>
      </section>
    </article>
  );
}