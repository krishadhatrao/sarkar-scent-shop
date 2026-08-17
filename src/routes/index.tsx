import { createFileRoute } from "@tanstack/react-router";

import heroVideo from "../../public/videos/hero-luxury.mp4.asset.json";
import mistVideo from "../../public/videos/mist.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Perfumes — Luxury Parfums, Hand-Picked" },
      {
        name: "description",
        content:
          "Parfum-strength luxury fragrances from the Sarkar house, plus designer best-sellers including the BOSS Bottled Beyond 50 ml gift set. Rated 4.8 by 2,400+ buyers.",
      },
      { property: "og:title", content: "Sarkar Perfumes — Luxury Parfums, Hand-Picked" },
      {
        property: "og:description",
        content:
          "Parfum-strength luxury fragrances from the Sarkar house, plus designer best-sellers including the BOSS Bottled Beyond 50 ml gift set. Rated 4.8 by 2,400+ buyers.",
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
  mrp?: string;
  img: string;
  href: string;
  badge?: string;
  tone: string;
  rating: string;
  reviews: string;
};

const sarkar: Perfume[] = [
  {
    brand: "Sarkar",
    name: "Orion",
    notes: "Bergamot · vetiver · white amber",
    size: "100 ml",
    price: "₹1,199",
    mrp: "₹2,499",
    img: "https://m.media-amazon.com/images/I/51029rqeuKL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZN5SSZ",
    badge: "Best seller",
    tone: "linear-gradient(150deg, oklch(0.92 0.09 190), oklch(0.86 0.07 150))",
    rating: "4.7",
    reviews: "612",
  },
  {
    brand: "Sarkar",
    name: "Noble",
    notes: "Cardamom · cedar · tonka",
    size: "100 ml",
    price: "₹1,199",
    mrp: "₹2,499",
    img: "https://m.media-amazon.com/images/I/51anrXnnFlL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZH9HVB",
    tone: "linear-gradient(150deg, oklch(0.93 0.08 100), oklch(0.85 0.09 60))",
    rating: "4.8",
    reviews: "488",
  },
  {
    brand: "Sarkar",
    name: "Throne",
    notes: "Leather · saffron · dark amber",
    size: "100 ml",
    price: "₹1,999",
    mrp: "₹3,499",
    img: "https://m.media-amazon.com/images/I/51ehTMkpftL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZPHKX6",
    badge: "Signature",
    tone: "linear-gradient(150deg, oklch(0.9 0.09 45), oklch(0.8 0.12 30))",
    rating: "4.9",
    reviews: "731",
  },
  {
    brand: "Sarkar",
    name: "Regal",
    notes: "Oud · smoke · white musk",
    size: "100 ml",
    price: "₹1,199",
    mrp: "₹2,499",
    img: "https://m.media-amazon.com/images/I/51OotYK8NEL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0GSZHCX31",
    tone: "linear-gradient(150deg, oklch(0.9 0.07 330), oklch(0.83 0.09 300))",
    rating: "4.6",
    reviews: "402",
  },
];

const hero = sarkar[0]!;

const more: Perfume[] = [
  {
    brand: "BOSS",
    name: "Bottled Beyond Gift Set",
    notes: "Woody amber · sealed presentation box",
    size: "50 ml",
    price: "₹6,499",
    mrp: "₹7,900",
    img: "https://m.media-amazon.com/images/I/51yZQAUBB4L._SX522_.jpg",
    href: "https://www.amazon.in/s?k=boss+bottled+beyond+eau+de+parfum+50ml+gift+set",
    badge: "Gift set",
    tone: "linear-gradient(150deg, oklch(0.92 0.06 250), oklch(0.85 0.08 280))",
    rating: "4.8",
    reviews: "1,204",
  },
  {
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    notes: "Pineapple · birch · woody",
    size: "150 ml",
    price: "₹5,775",
    img: "https://m.media-amazon.com/images/I/416YO7W+nsL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B08BNTVXLN",
    tone: "linear-gradient(150deg, oklch(0.9 0.07 230), oklch(0.83 0.06 210))",
    rating: "4.5",
    reviews: "9,860",
  },
  {
    brand: "Armaf",
    name: "Urban Elixir Rose",
    notes: "Rose · saffron · amber spice",
    size: "105 ml",
    price: "₹3,885",
    img: "https://m.media-amazon.com/images/I/51wO5z+RXZL._SX522_.jpg",
    href: "https://www.amazon.in/dp/B0BKZY6YWT",
    tone: "linear-gradient(150deg, oklch(0.91 0.08 15), oklch(0.84 0.1 350))",
    rating: "4.6",
    reviews: "2,140",
  },
  {
    brand: "Armaf",
    name: "Tres Nuit Pour Homme",
    notes: "Citrus · lavender · musk",
    size: "105 ml",
    price: "₹2,325",
    img: "https://m.media-amazon.com/images/I/71ZScSjjB1L._SX522_.jpg",
    href: "https://www.amazon.in/dp/B00J4XQ2P8",
    tone: "linear-gradient(150deg, oklch(0.92 0.07 170), oklch(0.85 0.07 200))",
    rating: "4.4",
    reviews: "3,015",
  },
];

const reviews = [
  {
    name: "Aarav Mehta",
    city: "Mumbai",
    stars: 5,
    title: "Compliments all day",
    body: "Throne lasted a full 10-hour shift and three people asked what I was wearing. The projection genuinely feels like a ₹8,000 bottle.",
  },
  {
    name: "Ishita Rao",
    city: "Bengaluru",
    stars: 5,
    title: "Packaging is gift-worthy",
    body: "Arrived in a sealed magnetic box with gold foil. I gifted Noble to my brother and he assumed it was a designer house.",
  },
  {
    name: "Kabir Singh",
    city: "Delhi",
    stars: 4,
    title: "Orion is my daily driver",
    body: "Fresh, clean and never sharp. Two sprays in the morning and it's still there at dinner. Repurchased twice already.",
  },
  {
    name: "Sana Kapoor",
    city: "Pune",
    stars: 5,
    title: "Regal smells expensive",
    body: "Real oud warmth without the harsh smoke. The bottle looks stunning on the dresser too — heavy glass, gold cap.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="text-sm tracking-[0.1em] text-gold" aria-label={`${n} out of 5 stars`}>
      {"★★★★★".slice(0, n)}
      <span className="text-muted-foreground/40">{"★★★★★".slice(n)}</span>
    </span>
  );
}

function ProductCard({ p }: { p: Perfume }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lux">
      <div className="relative">
        <span className="absolute left-2 top-2 z-10 rounded bg-gradient-gold px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
          {p.badge ?? p.brand}
        </span>
        <div className="overflow-hidden rounded-md bg-champagne p-4">
          <img
            src={p.img}
            alt={`${p.brand} ${p.name} ${p.size} perfume bottle`}
            loading="lazy"
            width={400}
            height={400}
            className="mx-auto h-44 w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-gold">{p.brand}</p>
      <h3 className="mt-1 font-display text-2xl leading-tight text-foreground">{p.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {p.notes} · {p.size}
      </p>
      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
        <Stars n={Math.round(Number(p.rating))} />
        <span>
          {p.rating} · {p.reviews} reviews
        </span>
      </div>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="font-body text-lg font-semibold tracking-wide text-gold">{p.price}</span>
        {p.mrp && <span className="text-sm text-muted-foreground line-through">{p.mrp}</span>}
      </p>
      <a
        href={p.href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 font-display text-lg text-gold">
              S
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-foreground">Sarkar Perfumes</span>
              <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Premium fragrances, hand-picked
              </span>
            </span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#catalogue" className="hover:text-gold">Shop</a>
            <a href="#sarkar" className="hover:text-gold">Sarkar</a>
            <a href="#more" className="hover:text-gold">All Fragrances</a>
            <a href="#reviews" className="hover:text-gold">Reviews</a>
          </div>
        </nav>
      </header>

      {/* Hero — official layout: copy left, white product tile right */}
      <section id="top" className="relative overflow-hidden pt-16">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Luxury Sarkar perfume flacon in golden light"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-24 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              The Sarkar collection · New in
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Premium fragrances, hand-picked
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Parfum-strength scents at prices that make sense — starting with the full Sarkar
              range, alongside the best-selling designer fragrances worth your money. Every bottle
              ships from Amazon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className="rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Shop the collection
              </a>
              <a
                href="#sarkar"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                Sarkar range
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Stars n={5} />
              <span>4.8 average · 2,433 verified buyers</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs text-center">
            <a href={hero.href} target="_blank" rel="nofollow sponsored noopener">
              <div className="rounded-lg bg-champagne p-6 shadow-lux">
                <img
                  src={hero.img}
                  alt={`${hero.brand} ${hero.name} ${hero.size} perfume bottle`}
                  width={520}
                  height={520}
                  className="mx-auto h-72 w-full object-contain"
                />
              </div>
              <p className="mt-5 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                {hero.brand}
              </p>
              <p className="mt-1 font-display text-3xl text-foreground">{hero.name}</p>
              <p className="mt-1 font-semibold tracking-wide text-gold">{hero.price}</p>
            </a>
          </div>
        </div>
      </section>


      {/* Trust strip */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-soft sm:grid-cols-4">
          {[
            ["100% authentic", "Sealed & brand-verified"],
            ["12+ hour wear", "25% oil concentration"],
            ["Free delivery", "Across India via Amazon"],
            ["Easy returns", "7-day replacement"],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-xl text-wine">{t}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sarkar collection */}
      <section id="sarkar" className="mt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20" id="catalogue">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">The house collection</p>
              <h2 className="mt-3 font-display text-3xl text-wine sm:text-4xl md:text-5xl">
                Four parfums. Four moods.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Unisex, 25% oil concentration, 100 ml heavy-glass flacons.
              </p>
            </div>
            <a href="#more" className="shrink-0 text-sm font-medium text-gold hover:underline">
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

      {/* Video feature */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lux">
            <video
              src={mistVideo.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Golden perfume mist in slow motion"
              className="h-full min-h-[22rem] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-wine p-10 text-foreground shadow-lux">
            <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">The mist</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              A single spray that lingers past midnight
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Our atomiser breaks the parfum into an ultra-fine cloud so the oil settles evenly on
              skin and fabric. Less product, longer trail, richer opening — the way the great houses
              do it.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                ["25%", "Parfum oil"],
                ["12h+", "Longevity"],
                ["4.8★", "Rated"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-foreground/5 py-4">
                  <p className="font-display text-3xl text-gold-soft">{n}</p>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.18em]">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More fragrances */}
      <section id="more" className="mx-auto max-w-7xl px-4 sm:px-6 pb-14 sm:pb-20">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Curated designer picks</p>
          <h2 className="mt-3 font-display text-3xl text-wine sm:text-4xl md:text-5xl">
            More fragrances worth buying
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Designer and best-selling scents we rate, across every price point.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold">Loved by 2,400+ buyers</p>
              <h2 className="mt-3 font-display text-3xl text-wine sm:text-4xl md:text-5xl">
                What our customers say
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-gold/40 bg-card px-4 sm:px-6 py-3 shadow-soft">
              <span className="font-display text-3xl text-wine">4.8</span>
              <div>
                <Stars n={5} />
                <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                  2,433 verified reviews
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <Stars n={r.stars} />
                <figcaption className="mt-3 font-display text-xl text-wine">{r.title}</figcaption>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{r.body}”
                </blockquote>
                <p className="mt-5 text-xs uppercase tracking-[0.15em] text-gold">
                  {r.name} · {r.city}
                </p>
                <p className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground/70">
                  Verified purchase
                </p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="rounded-[2rem] bg-gradient-wine px-8 py-14 text-center text-foreground shadow-lux">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Find the scent people remember you by
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Every bottle ships sealed from Amazon India with easy returns.
          </p>
          <a
            href="#catalogue"
            className="mt-8 inline-flex rounded-full bg-gradient-gold px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Shop {hero.brand} now
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:px-6 text-center md:flex-row md:text-left">
          <span className="font-display text-lg text-wine">Sarkar Perfumes</span>
          <p className="text-xs text-muted-foreground">
            Affiliate disclosure: we may earn a commission on purchases made through links on this
            site.
          </p>
        </div>
      </footer>
    </div>
  );
}
