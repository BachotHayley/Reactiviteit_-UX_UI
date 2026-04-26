import Image from "next/image";

export default function ArtikelTwee() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-serif text-slate-900 bg-white">
      
      {/* Header sectie met afbeelding uit de PDF */}
      <header className="mb-8">
        <div className="mb-6 overflow-hidden rounded-sm shadow-sm">
          {/* Tip: Sla de afbeelding van de 'Vibe' of de game uit de PDF op als vibecoding.png */}
          <img 
            src="/vibecoding.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           Met AI bouw je in een handomdraai je eigen tools. © De Standaard
          </p>
        </div>

        <p className="text-blue-600 font-bold tracking-tighter uppercase text-xs mb-3 font-sans">
          De Helpdesk
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight font-serif tracking-tight">
          Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-700 mb-8 leading-snug font-sans">
          Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je.
        </p>

        {/* Auteur en Interactie balk */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t border-b border-slate-100 font-sans text-sm mb-10">
          <div className="mb-4 sm:mb-0">
            <span className="font-bold border-b-2 border-blue-600 pb-1">Dominique Deckmyn</span>
            <p className="text-slate-500 mt-2 text-xs">23 januari 2026 om 23:59</p>
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
          Het is nog maar januari, maar &lsquo;vibecoding&rsquo;, ofwel coderen met AI, maakt al een goede kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen.
        </p>

        <p className="mb-6">
          Onder meer omdat de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen. Maar is dat zo? Wel: ja en nee.
        </p>

        
        <p className="mb-6">
            Ja: een simpel programma, zoals een spelletje dat je in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar een prompt. Denk aan &ldquo;maak een spel waarbij je cocktails moet mixen&rdquo;. Al helpt het wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
        </p>
          <p className="mb-6">
            Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week
            bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeR niet te
            kunnen programmeren, je hoeR zelfs geen programmacode te kunnen lezen, wel moet
            je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig
            zijn. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen
            verleggen.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          Een eenvoudig spel
        </h2>
         <p className="mb-6">
           Hoe klein? Wel, laten we beginnen met zo’n spelletje. Open een chatbot naar keuze:
            Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel
            spel. Ik probeerde bijvoorbeeld: “Schrijf een spel waarbij een dinosaurus een bal moet
            koppen.”
        </p>
        <img 
            src="/vibecoding2.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           Dit spel in Javascript is gegenereerd door Gemini met één prompt: “Maak een spel waarbij een t-rex een bal moet koppen.”
          </p>

        <p className="mb-6"></p>
          <p className="mb-6">
           
           Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren
            dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de
            programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document
            met de extensie ‘.html’, bijvoorbeeld ‘Mijnspelletje.html’ op je computer.
        </p>
        <p className="mb-6"> 
           Op een Windows-pc:
        </p>
        <p className="mb-6"> 
            1) Klik op de code die de chatbot genereerde (meestal op het ‘copy’-knopje bovenaan
            of onderaan)
        </p>
        <p className="mb-6">
             2) Plak de code in een programma als Windows Kladblok of Macintosh TextEdit
        </p>
        <p className="mb-6">
             3) Bewaar het bestand met een naam als ‘dinospel.html’
        </p>
        <p className="mb-6">
            4) Klik op dinospel.html
        </p>
        <p className="mb-6">
            5) Het spel opent in je standaardbrowser. En spelen maar!
        </p>
           
        <p className="mb-6">
        Als je MicrosoR Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten
        zijn), moet je wel op één ding letten: het programma heeR de neiging om elk document
        te bewaren met de extensie “.txt”. Hou dus in de gaten dat hij er niet stiekem
        dinospel.html.txt van heeR gemaakt.
        Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil ik het
        programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het
        bijvoorbeeld naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren.
        </p>
         <p className="mb-6">
        Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot
        je verkeerd, en moet je wat meer preciseren: “Schrijf het programma in Javascript en zet
        alles in één bestand.” En je kunt ook aanwijzingen geven over de visuele stijl (‘laat het
        eruitzien als een 8-bit computerspel’), de bediening (‘met de pijltjestoetsen’) of het
        spelverloop.
        </p>
         <p className="mb-6">
        Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden,
        bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je
        een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En
        hop: een verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf
        bewaart.
        </p>
        <p className="mb-6">
        Op die manier krijg je meestal spelletjes die sterk geïnspireerd zijn op wat al bestaat.
        Maar het is zeker ook mogelijk om meer originele spelletjes te bouwen, als je een meer
        gedetailleerde beschrijving geeR. Stap voor stap uitbreiden met extra functies of
        ececten (geluid!) kan ook.
        </p>
        <p className="mb-6">
        Zo bouwde ik in vijf stappen een ‘cocktailspel’, waarbij je in enkele seconden een
        cocktail moet mixen op basis van een recept. De eerste versie was wat saai, dus ik
        voegde er opties als ‘schudden’ en ‘parasolletje’ aan toe.
        </p>
         <img 
            src="/vibecoding3.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           ChatGPT schreef dit spel in een aantal stappen, na telkens een kleine bijsturing.
          </p>
          <p className="mb-6"></p>
          <p className="mb-6">
            Elke keer dat een programma een foutmelding geeR, kleef je die foutmelding in
            ChatGPT met de vraag om die fout te repareren. Dat lukt vaak meteen, soms moet je
            een paar keer proberen.
          </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          Ambitieuzer: een gezinskalender
        </h2>
         <p className="mb-6">
            Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor gradsche apps
            zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom
            je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit. Dat is
            een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende
            Python-omgeving op je computer hebben staan. Installeer gratis de recentste versie van
            Python via python.org.
        </p>
        <p className="mb-6">
           Wil je iets met Python uitproberen, dan kun je op dezelfde manier te werk gaan als met
            Javascript: ChatGPT of Gemini schrijR de code, je plakt die in Kladblok en bewaart hem
            op je harde schijf – maar nu met de extensie ‘.py’. Om hem uit te voeren, moet je dan,
            vanaf de opdrachtprompt, in de juiste map gaan staan en ‘python mijnprogramma.py’
            intikken. Beetje omslachtig, dus.
        </p>
         <p className="mb-6">
          Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app
            worden voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar
            bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de
            voetbaltraining moet brengen. Ieder gezinslid moet een activiteit kunnen toevoegen.
        </p>
        <p className="mb-6">
          Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus,
            opnieuw, uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn
            voor iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een
            paar opties, ik koos daaruit Supabase, een cloud-database. Om iedereen toegang te
            geven tot dezelfde versie van het programma, heb ik het ‘gehost’ op een site die Vercel
            heet. Op beide sites maakte ik gratis accounts aan. Ik liet me elke stap in detail
            uitleggen door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of
            Supabase.
        </p>
        <p className="mb-6">
            Ik besliste uiteindelijk, alweer op advies van ChatGPT, om mijn programma niet
            zomaar op mijn harde schijf te bewaren maar op de gespecialiseerde website Github,
            met een gratis account. Github houdt alle veranderingen aan je programma bij, zodat je
            altijd kunt terugkeren naar een eerdere, werkende versie.
        </p>
        <img 
            src="/vibecoding4.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <p className="text-xs text-slate-500 mt-2 font-sans italic">
           Deze gezinskalender draait op smartphone en pc, de gegevens worden in de “cloud” bewaard. De eerste versie werd
            geschreven door ChatGPT, maar de afwerking gebeurde met hulp van ChatGPT Codex.
          </p>
          <p className="mb-6"></p>
          <p className="mb-6">
            ChatGPT stelde voor eerst een versie te maken met minimale functionaliteit. Die
            bestond al uit een viertal verschillende bestanden die ik telkens, met de juiste naam, in
            dezelfde map moest bewaren. Bij foutmeldingen plakte ik die melding opnieuw in
            ChatGPT, dat een verbeterde versie van de bestanden maakte. Ja, dat kan behoorlijk
            omslachtig worden.
          </p>

           <p className="mb-6">
            Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een
            werkende app, maar wel een die er nogal belabberd uitzag en waar je, bijvoorbeeld, een
            activiteit wel kon toevoegen maar niet kon wissen of wijzigen.
           </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          Echt agentic werken
        </h2>
        <p className="mb-6">
            Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet ‘agentic’ gaan
            werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden
            kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast alles
            bouwen. Je kunt de werking en de vormgeving eindeloos verdjnen. Maar je moet wel
            een beetje begrijpen waar je mee bezig bent.
        </p>

        <p className="mb-6">
          Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige
            ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per
            maand). Codex is een ‘agent’: je geeR nog altijd een instructie via een tekstprompt,
            maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook eigen
            wijzigingen voorstellen. Je moet alleen nog af en toe op ‘ja’ klikken.  
        </p>
        <p className="mb-6">
            Er zijn ook talloze gespecialiseerde vibecoding-instrumenten, zoals Cursor, Replit en
            Lovable. Die laatste twee heb ik vrij uitgebreid uitgeprobeerd, ze werken minstens even
            goed als Codex en hebben een rijkere interface. Het probleem is dat je er doorgaans
            niet in slaagt om een app helemaal af te werken met de gratis versie van Replit of
            Lovable, dus je moet betalen – en dan betaal ik liever voor ChatGPT Plus of Gemini Pro,
            zodat ik én kan vibecoden én een betere chatbot ter beschikking heb.
        </p>
        <p className="mb-6">
            Mijn Gezinskalender besloot ik dus verder af te werken met ChatGPT Codex. Dat kan
            gewoon op het web, maar ik installeerde het programma ChatGPT Codex CLI. Zo had
            Codex rechtstreeks toegang tot de bestanden op mijn pc. En, simpel gezegd: wat toen
            gebeurde, lijkt wel toverij. Stap voor stap begon Codex mijn programma te verbeteren,
            op basis van mijn suggesties maar ook op eigen initiatief. Twintig minuten later leek de
            app eigenlijk klaar om in de app stores van Apple en Google aan te bieden (behalve dat
            het, strikt gesproken, geen echte app maar een Progressive Web App is: je kunt haar
            bewaren met een icoontje op je smartphone-scherm, maar je downloadt haar niet via
            de appstore).
        </p>
        <p className="mb-6">
            In totaal heeR mijn afgewerkte Gezinskalender mij een halve dag werk gekost. Maar in
            die tijd heb ik enorm veel geleerd en bijvoorbeeld ook accounts op Supabase en Vercel
            gemaakt. Ik weet zeker dat ik een app van deze complexiteit een volgende keer in de
            helR van die tijd in elkaar gestoken krijg.
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-6 font-sans text-slate-900 border-l-4 border-blue-600 pl-4 uppercase tracking-tight text-xs">
          Voorkennis
        </h2>
        <p className="mb-6">
            Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken,
            heb ik intussen een ander gratis programma van MicrosoR geïnstalleerd, VS Code. Met
            Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je
            haast alles bouwen. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen.
            Tussen mijn eerste Javascript-game en de apps die ik nu met Codex bouw, moest ik wel
            heel wat kennis opbouwen over al die componenten. Ik schat dat ik daar twee of drie
            dagen over heb gedaan.
        </p>
        <p className="mb-6">
            Hoe groot je voorkennis is, maakt een verschil. Ik heb in mijn jeugd wat leren
            programmeren, in de programmeertaal Basic (op een Sinclair ZX-81, heus!). Net
            voldoende om een beetje te begrijpen wat er aan het gebeuren is als die chatbot code
            genereert. Dat heeR mij zeker geholpen, maar mensen zonder enige
            programmeerkennis slagen erin om gelijkaardige apps te vibecoden.
        </p>
        <p className="mb-6">
            Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden
            geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als
            mijn Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of
            maanden waarschijnlijk met twee-drie prompts genereren
        </p>
         <img 
            src="/vibecoding5.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <img 
            src="/vibecoding6.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />
          <img 
            src="/vibecoding7.png" 
            alt="Vibecoding illustratie" 
            className="w-full h-auto"
          />

      </section>

      {/* Lees Ook Sectie (Hetzelfde design als artikel 1) */}
      <section className="mt-12 font-sans">
        <div className="flex border-l-4 border-black pl-4 mb-8">
          <div className="flex-1">
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2 text-blue-600">Lees ook</h3>
            <p className="text-xl font-bold hover:underline cursor-pointer">
              Echt waar: niks AI
            </p>
          </div>
          <div className="ml-4 hidden sm:block">
            <img src="/vibecoding8.png" alt="Afbeelding" className="w-32 h-20 object-cover" />  
          </div>
        </div>
         <div className="flex border-l-4 border-black pl-4 mb-8">
          <div className="flex-1">
            <h3 className="font-bold uppercase text-sm tracking-widest mb-2 text-blue-600">Lees ook</h3>
            <p className="text-xl font-bold hover:underline cursor-pointer">
              Mijn destructieve cyberhuwelijk met Claude
            </p>
          </div>
          <div className="ml-4 hidden sm:block">
            <img src="/vibecoding9.png" alt="Afbeelding" className="w-32 h-20 object-cover" />  
          </div>
        </div>

        {/* Tags / Onderwerpen */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Inspiratie", "De Helpdesk", "Helpdesk"].map((tag) => (
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