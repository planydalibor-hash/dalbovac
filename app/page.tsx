import Card from "../components/Card";
import Button from "../components/Button";
import PriceRow, { Offer } from "../components/PriceRow";

const mockOffers: Offer[] = [
  { vendor: "Stavmi.cz", sqmPrice: 202.31, totalPrice: 50577.5, badge: "🟩" },
  { vendor: "nejlevnejsi-polystyren.cz", sqmPrice: 216.8, totalPrice: 54200, badge: "🟨" },
  { vendor: "ZOFI", sqmPrice: 223.61, totalPrice: 55902.5, badge: "🟦" },
  { vendor: "Pro-Doma", sqmPrice: 249.36, totalPrice: 62340, badge: "🟥" },
  { vendor: "DEK stavebniny", sqmPrice: 264.26, totalPrice: 66065, badge: "⬛" },
];

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Dalbovač" className="h-8 w-8" />
          <span className="font-bold text-lg tracking-wide">Dalbovač</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm opacity-80">
          <a href="#jak-to-funguje" className="hover:opacity-100">Jak to funguje</a>
          <a href="#srovnani" className="hover:opacity-100">Srovnání</a>
          <a href="#faq" className="hover:opacity-100">FAQ</a>
        </nav>
        <Button>Zjistit cenu</Button>
      </header>

      {/* Srovnání */}
      <section className="grid md:grid-cols-2 gap-6 items-center pt-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Srovnávač cen stavebních materiálů
          </h1>
          <p className="mt-4 text-white/80">
            Najděte nejlevnější nabídku během pár sekund. Porovnáváme desítky stavebnin napříč Českem.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 glass p-3 rounded-2xl">
            <input className="md:col-span-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none" placeholder="Např. EPS 70F 160 mm" />
            <input className="px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none" placeholder="Množství (m²)" defaultValue={250} />
            <Button type="submit" className="w-full">Porovnat ceny</Button>
          </form>
          <p className="mt-2 text-xs opacity-60">Styl inspirovaný klik.cz • demo data</p>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="text-sm opacity-70">Produkt</div>
              <div className="text-lg font-semibold">EPS 70F 160 mm</div>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-70">Plocha</div>
              <div className="text-lg font-semibold">250 m²</div>
            </div>
          </div>
          <div className="p-5 overflow-x-auto" id="srovnani">
            <table className="w-full text-sm">
              <thead className="text-left opacity-70">
                <tr>
                  <th className="py-2 font-medium">Prodejce</th>
                  <th className="py-2 text-right font-medium">Cena za m²</th>
                  <th className="py-2 text-right font-medium">Celkem</th>
                  <th className="py-2 text-right font-medium">Detail</th>
                </tr>
              </thead>
              <tbody>
                {mockOffers.map((o, i) => <PriceRow key={i} offer={o} />)}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Jak to funguje */}
      <section id="jak-to-funguje" className="mt-16 grid md:grid-cols-3 gap-4">
        {[
          ["1. Zadáte materiál", "Vyberete přesný typ, rozměr a množství."],
          ["2. Porovnáme nabídky", "Projdeme dostupné e-shopy a stavebniny."],
          ["3. Pošleme nej cenu", "Okamžitě uvidíte přehled a můžete nakoupit."]
        ].map(([title, desc], i) => (
          <Card key={i}>
            <div className="text-brand-orange text-2xl font-black">{title}</div>
            <p className="mt-2 text-sm opacity-80">{desc}</p>
          </Card>
        ))}
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Časté dotazy</h2>
        <div className="space-y-3">
          {[
            ["Je to zdarma?", "Základní porovnání je zdarma. Připravujeme prémiové funkce."],
            ["Jak často aktualizujete ceny?", "Ceny jsou demo. Do produkce napojíme více zdrojů a aktualizace budou denní."],
            ["Můžu si nechat poslat nabídku e-mailem?", "Ano, do formuláře přidáme e-mail a PDF export."]
          ].map(([q, a], i) => (
            <Card key={i}>
              <div className="font-semibold">{q}</div>
              <p className="opacity-80 text-sm mt-1">{a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-xs opacity-60">
        © {new Date().getFullYear()} Dalbovač • Vytvořeno v Next.js
      </footer>
    </main>
  );
}
