import Image from "next/image";

export default function ArtikelDrie() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-serif text-slate-900 bg-white">
      
      {/* Header sectie */}
      <header className="mb-8">
        <div className="mb-6 overflow-hidden rounded-sm shadow-sm">
          {/* Tip: Sla de afbeelding van Dario Amodei uit de PDF op als dario.png */}
          <img 
            src="/dario.png" 
            alt="Dario Amodei" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           Dario Amodei neemt heel nadrukkelijk een ethisch standpunt in over AI. © getty
          </p>
        </div>

        <p className="text-blue-700 font-bold tracking-tighter uppercase text-xs mb-3 font-sans">
          De Technocraat
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-serif tracking-tight">
          Was het verzet van Dario Amodei tegen minister Hegseth het &ldquo;Ik ben Spartacus!&rdquo;-moment van Silicon Valley?
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-700 mb-8 leading-snug font-sans">
          Het verzet van Dario Amodei tegen minister van &ldquo;Oorlog&rdquo; Pete Hegseth, en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
        </p>

        {/* Auteur en Interactie balk */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t border-b border-slate-100 font-sans text-sm mb-10">
          <div className="mb-4 sm:mb-0">
            <span className="font-bold border-b-2 border-blue-600 pb-1">Dominique Deckmyn</span>
            <p className="text-slate-500 mt-2 text-xs">13 maart 2026 om 23:59</p>
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
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great Again) aandurft. Wie had dat zien aankomen?
        </p>

        <p className="mb-6">
          Ze doen dat weliswaar niet via grote publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde amicus briefs, documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische strijd tegen het Pentagon.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          De bocht van Big Tech
        </h2>
        
        <p className="mb-6">
          Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en
            tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great
            Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote
            publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De
            kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde am i c us b r i e f s ,
            documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische
            strijd tegen het Pentagon.
        </p>
        <p className="mb-6">
            Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete Hegseth
            Anthropic oplegt, namelijk het uitroepen tot “risico voor de toeleveringsketen”
            , creëert
            “een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de
            regering alle middelen waarover het beschikt zal gebruiken om te straffen wie het
            aandurft het oneens te zijn”
            . En dat staat in een document dat – indirect – ondertekend is
            door Amazon, Google en Apple (via de belangengroep Chamber of Progress).
        </p>

        <p className="mb-6 italic text-slate-600 border-l-4 border-slate-200 pl-4">
          &ldquo;Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? &rdquo;
        </p>

        <p className="mb-6">
          Nee, daarvoor is het allemaal
            veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije
            meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te
            formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs
            voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.
        </p>
        <p className="mb-6">
            Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te
            ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen
            invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu
            verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog
            wel steun voor het idee dat iedereen zijn zegje mag hebben.
        </p>
        <p className="mb-6">
           Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege
            het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan
            van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals
            vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politieke
            gevoelige uitspraken horen. 
        </p>
        <p className="mb-6">
            Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat
            (zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was eerder
            omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de
            werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met
            Defensie liet vallen.
        </p>
         <p className="mb-6">
            Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,
            en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest
            geavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe
            hebben om volgens hun overtuiging te handelen.
         </p>
         <p className="mb-6">
            Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze
            zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een
            ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
         </p>
      </section>

      {/* Lees Ook Sectie */}
      <section className="mt-12 font-sans">
        <div className="flex border-l-4 border-black pl-4 mb-8">
          <div className="flex-1">
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2 text-blue-600">Lees ook</h3>
            <p className="text-xl font-bold hover:underline cursor-pointer">
              ChatGPT boycotten, of meteen de hele big tech?
            </p>
          </div>
          <div className="ml-4 hidden sm:block">
             <img src="/chatGPT.png" alt="Afbeelding" className="w-32 h-20 object-cover" />  
          </div>
        </div>

        {/* Tags / Onderwerpen */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Cultuur en media", "De Technocraat", "Artificiële intelligentie"].map((tag) => (
            <span key={tag} className="border border-black px-4 py-2 text-sm font-medium hover:bg-slate-50 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-slate-100 p-4 text-sm text-slate-600 italic">
          <p>Fout gezien? <span className="underline cursor-pointer">Meld het ons hier</span></p>
        </div>
      </section>
    </article>
  );
}