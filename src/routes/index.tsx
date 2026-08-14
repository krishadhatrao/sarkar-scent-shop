import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/sarkar-hero.jpg";
import giftSetImg from "@/assets/gift-set.jpg";
import notesBg from "@/assets/notes-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Perfume by Bhuvan Bam — Official Store" },
      {
        name: "description",
        content:
          "Shop Sarkar Perfume by Bhuvan Bam. Boss Bottled Beyond Eau de Parfum 50ml gift set with signature gold packaging, free shipping across India.",
      },
      { property: "og:title", content: "Sarkar Perfume by Bhuvan Bam — Official Store" },
      {
        property: "og:description",
        content:
          "The 50ml Eau de Parfum gift set. Amber, oud and spice, boxed in signature Sarkar gold.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const notes = [
  { stage: "Top", items: "Bergamot · Pink Pepper · Cardamom" },
  { stage: "Heart", items: "Saffron · Damask Rose · Nutmeg" },
  { stage: "Base", items: "Oud · Amber · Vetiver · Vanilla" },
];

const packaging = [
  { n: "01", t: "Magnetic Gold Box", d: "Rigid board wrapped in brushed gold foil with a soft-close magnetic lid." },
  { n: "02", t: "Velvet Cradle", d: "Die-cut black velvet insert holds the 50ml flacon dead still in transit." },
  { n: "03", t: "Signed Card", d: "A gold-embossed authenticity card, signed off by the House of Sarkar." },
  { n: "04", t: "Sealed & Shipped", d: "Tamper-evident seal, double-walled outer carton, insured delivery." },
];

function Index() {
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen font-body text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl tracking-[0.35em] text-gold-gradient">
            SARKAR
          </a>
          <div className="hidden gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
            <a href="#product" className="transition-colors hover:text-gold">Perfume</a>
            <a href="#notes" className="transition-colors hover:text-gold">Notes</a>
            <a href="#packing" className="transition-colors hover:text-gold">Packing</a>
          </div>
          <a
            href="#product"
            className="rounded-full border border-gold/50 px-5 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Buy Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 md:grid-cols-2">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">
              Official Store · By Bhuvan Bam
            </p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              <span className="text-gold-gradient">Sarkar</span>
              <br />
              <span className="text-foreground/90">Perfume</span>
            </h1>
            <div className="hairline my-8 max-w-sm" />
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              A dark, regal signature — smoked oud laid over saffron and amber. Presented in the
              Boss Bottled Beyond gift set, 50ml, boxed in gold.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#product"
                className="rounded-full bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground shadow-lux transition-transform hover:-translate-y-0.5"
              >
                Shop the Gift Set
              </a>
              <a
                href="#notes"
                className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground underline-offset-8 hover:text-gold hover:underline"
              >
                Explore the notes
              </a>
            </div>
            <div className="mt-12 flex gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>12 Hr Sillage</span>
              <span>Unisex</span>
              <span>Made in India</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold/15 blur-[120px]" />
            <img
              src={heroImg}
              alt="Sarkar extrait de parfum bottle in gold and black on stone"
              width={1408}
              height={1600}
              className="mx-auto w-full max-w-md rounded-sm shadow-lux"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/50 bg-card/40 py-4">
        <p className="text-center text-[0.6rem] uppercase tracking-[0.5em] text-muted-foreground">
          Free shipping over ₹999 · Cash on delivery · 100% authentic · Gift wrapped
        </p>
      </div>

      {/* Product */}
      <section id="product" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-sm border border-border/60 bg-card">
            <img
              src={giftSetImg}
              alt="Boss Bottled Beyond 50ml eau de parfum gift set with gold box"
              width={1200}
              height={1200}
              loading="lazy"
              className="w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-primary-foreground">
              Gift Set
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">Sarkar × Boss</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              BOSS Bottled Beyond Eau de Parfum 50ml Gift Set
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              The full ritual in one box: the 50ml Eau de Parfum flacon, a gold-foiled magnetic
              case, a velvet cradle and a signed authenticity card. Built to be handed over, not
              just delivered.
            </p>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-4xl text-gold">₹2,499</span>
              <span className="text-sm text-muted-foreground line-through">₹4,200</span>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                40% off
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-border">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-muted-foreground transition-colors hover:text-gold"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm">{qty}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-muted-foreground transition-colors hover:text-gold"
                >
                  +
                </button>
              </div>
              <button className="flex-1 rounded-full bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground shadow-lux transition-transform hover:-translate-y-0.5">
                Add to Bag · ₹{(2499 * qty).toLocaleString("en-IN")}
              </button>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-border/60 pt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:grid-cols-2">
              <li>50 ml · Eau de Parfum</li>
              <li>Amber Woody · Unisex</li>
              <li>Dispatch in 24 hours</li>
              <li>7-day easy returns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="relative overflow-hidden border-y border-border/50">
        <img
          src={notesBg}
          alt=""
          aria-hidden="true"
          width={1400}
          height={800}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">The Composition</p>
          <h2 className="mt-4 font-display text-5xl">Three acts of smoke and gold</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {notes.map((n) => (
              <div key={n.stage} className="border-t border-gold/40 pt-6">
                <h3 className="font-display text-2xl text-gold">{n.stage}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing */}
      <section id="packing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-xl">
          <p className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">Packing Ritual</p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            How your gift set is packed
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every Sarkar order is hand-packed in the same four steps — the box should feel like
            part of the fragrance.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-4">
          {packaging.map((p) => (
            <div key={p.n} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <span className="font-display text-4xl text-gold/50 transition-colors group-hover:text-gold">
                {p.n}
              </span>
              <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="rounded-sm border border-gold/30 bg-card/60 px-8 py-16 text-center shadow-lux">
          <h2 className="font-display text-4xl md:text-5xl">
            Wear the <span className="text-gold-gradient">Sarkar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Limited gold-box run. Once this batch of the 50ml gift set is gone, it's gone.
          </p>
          <a
            href="#product"
            className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
          <span className="font-display text-xl tracking-[0.35em] text-gold-gradient">SARKAR</span>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Official Store · By Bhuvan Bam · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
