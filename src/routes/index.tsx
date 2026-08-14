import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Perfumes — Premium Fragrances, Hand-Picked" },
      {
        name: "description",
        content:
          "The full Sarkar range of unisex parfums plus best-selling designer fragrances worth your money, including the BOSS Bottled Beyond 50 ml gift set.",
      },
      { property: "og:title", content: "Sarkar Perfumes — Premium Fragrances, Hand-Picked" },
      {
        property: "og:description",
        content:
          "Parfum-strength scents at prices that make sense. Sarkar Orion, Noble, Throne, Regal and the BOSS Bottled Beyond 50 ml gift set.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Perfume = {
  brand: string;
  name: string;
  notes: string;
  size: string;
  price: string;
  img: string;
  href: string;
  badge?: string;
};

const sarkar: Perfume[] = [
  {
    brand: "Sarkar",
    name: "Orion",
    notes: "Fresh aromatic",
    size: "100 ml",
    price: "₹1,199",
    img: "https://m.media-amazon.com/images/I/51029rqeuKL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZN5SSZ",
    badge: "Sarkar",
  },
  {
    brand: "Sarkar",
    name: "Noble",
    notes: "Fresh woody spicy",
    size: "100 ml",
    price: "₹1,199",
    img: "https://m.media-amazon.com/images/I/51anrXnnFlL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZH9HVB",
    badge: "Sarkar",
  },
  {
    brand: "Sarkar",
    name: "Throne",
    notes: "Leather amber",
    size: "100 ml",
    price: "₹1,999",
    img: "https://m.media-amazon.com/images/I/51ehTMkpftL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZPHKX6",
    badge: "Sarkar",
  },
  {
    brand: "Sarkar",
    name: "Regal",
    notes: "Oud, smoky, musky",
    size: "100 ml",
    price: "₹1,199",
    img: "https://m.media-amazon.com/images/I/51OotYK8NEL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZHCX31",
    badge: "Sarkar",
  },
];

const hero = sarkar[0]!;

const more: Perfume[] = [
  {
    brand: "BOSS",
    name: "Bottled Beyond Eau de Parfum Gift Set",
    notes: "Woody amber",
    size: "50 ml",
    price: "₹6,499",
    img: "https://m.media-amazon.com/images/I/51yZQAUBB4L._SX522_.jpg",
    href: "https://www.amazon.in/s?k=boss+bottled+beyond+eau+de+parfum+50ml+gift+set",
    badge: "Gift set",
  },
  {
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    notes: "Woody fruity",
    size: "150 ml",
    price: "₹5,775",
    img: "https://m.media-amazon.com/images/I/416YO7W+nsL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B08BNTVXLN",
  },
  {
    brand: "Armaf",
    name: "Club de Nuit Urban Elixir Rose",
    notes: "Amber spicy",
    size: "105 ml",
    price: "₹3,885",
    img: "https://m.media-amazon.com/images/I/51wO5z+RXZL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0BKZY6YWT",
  },
  {
    brand: "Armaf",
    name: "Tres Nuit Pour Homme",
    notes: "Woody aromatic",
    size: "105 ml",
    price: "₹2,325",
    img: "https://m.media-amazon.com/images/I/71ZScSjjB1L._SX522_.jpg",
    href: "https://www.amazon.in/dp/B00J4XQ2P8",
  },
];

function ProductCard({ p }: { p: Perfume }) {
  return (
    <article className="relative flex flex-col rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-gold/50">
      {p.badge && (
        <span className="absolute left-6 top-6 z-10 rounded-md bg-gold px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
          {p.badge}
        </span>
      )}
      <div className="overflow-hidden rounded-lg bg-white p-4">
        <img
          src={p.img}
          alt={`${p.brand} ${p.name} ${p.size} perfume bottle`}
          loading="lazy"
          width={400}
          height={400}
          className="mx-auto h-44 w-full object-contain"
        />
      </div>
      <p className="mt-5 text-[0.65rem] uppercase tracking-[0.2em] text-gold">{p.brand}</p>
      <h3 className="mt-1 font-display text-2xl leading-tight">{p.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {p.notes} · {p.size}
      </p>
      <p className="mt-3 font-body text-lg font-semibold text-gold">{p.price}</p>
      <a
        href={p.href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
      >
        Buy on Amazon
      </a>
      <p className="mt-2 text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground/70">
        Ad · Affiliate link — we may earn a commission
      </p>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-body">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-display text-lg text-gold">
              S
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg">Sarkar Perfumes</span>
              <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Premium fragrances, hand-picked
              </span>
            </span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#catalogue" className="hover:text-gold">Shop</a>
            <a href="#sarkar" className="hover:text-gold">Sarkar</a>
            <a href="#more" className="hover:text-gold">All Fragrances</a>
            <a href="#guide" className="hover:text-gold">Guide</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              The Sarkar collection · New in
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl">
              Premium fragrances, hand-picked
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Parfum-strength scents at prices that make sense — starting with the full Sarkar
              range, alongside the best-selling designer fragrances worth your money. Every bottle
              ships from Amazon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Shop the collection
              </a>
              <a
                href="#sarkar"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:border-gold/60 hover:text-gold"
              >
                Sarkar range
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="rounded-xl bg-white p-8">
              <img
                src={hero.img}
                alt="Sarkar Orion 100 ml perfume bottle"
                width={400}
                height={400}
                className="mx-auto h-72 object-contain"
              />
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.25em] text-gold">Sarkar</p>
            <h2 className="mt-1 font-display text-2xl">Orion</h2>
            <p className="mt-1 font-semibold text-gold">₹1,199</p>
          </div>
        </div>
      </section>

      {/* Sarkar collection */}
      <section id="sarkar" className="border-t border-border/40 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20" id="catalogue">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl">The Sarkar collection</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Four unisex parfums at 25% oil concentration. 100 ml each.
              </p>
            </div>
            <a href="#more" className="shrink-0 text-sm text-gold hover:underline">
              View all →
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sarkar.map((p) => (
              <ProductCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* More fragrances */}
      <section id="more" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl">More fragrances worth buying</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Designer and best-selling scents we rate, across every price point.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Guide */}
      <section id="guide" className="border-t border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-3">
          {[
            {
              t: "Parfum strength",
              d: "The Sarkar range sits at 25% oil concentration — longer wear, less reapplying.",
            },
            {
              t: "Gift-ready packing",
              d: "Gift sets like BOSS Bottled Beyond ship in the brand's sealed presentation box.",
            },
            {
              t: "Ships from Amazon",
              d: "Every listing links straight to Amazon India for authentic stock and easy returns.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-border/60 bg-card p-8">
              <h3 className="font-display text-2xl text-gold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:text-left">
          <span className="font-display text-lg">Sarkar Perfumes</span>
          <p className="text-xs text-muted-foreground">
            Affiliate disclosure: we may earn a commission on purchases made through links on this
            site.
          </p>
        </div>
      </footer>
    </div>
  );
}
