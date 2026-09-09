import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { CATEGORIES, COMPANY, PRODUCTS } from "@/lib/catalog";
import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const play = el.play();
    if (play) play.catch(() => {});
  }, []);

  return (
    <>
      <video
        ref={ref}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-55 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <img
        src="/images/hero-poster.jpg"
        alt="Склад рулонов TERMOTEKS в Любучанах"
        className="absolute inset-0 hidden size-full object-cover opacity-55 motion-reduce:block"
      />
    </>
  );
}

function Home() {
  const popular = PRODUCTS.filter((p) => p.popular);

  return (
    <div>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-paper">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-paper/70">
            Производство с {COMPANY.founded} года · {COMPANY.addressShort}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            Термоклеевые материалы из России
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
            Тканые, нетканые, трикотажные основы и поролон. Низкотемпературный клей EVA,
            собственный склад, отгрузка по всей стране.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="invert">
              <Link to="/catalog">Смотреть ассортимент</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-paper/30 text-paper hover:bg-paper/10">
              <Link to="/request">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {[
            ["1993", "год запуска производства"],
            ["4", "типа основ"],
            ["1 рулон", "минимальная партия"],
            ["РФ", "доставка до терминала ТК"],
          ].map(([k, v]) => (
            <div key={k} className="bg-paper px-5 py-7">
              <p className="font-display text-3xl tracking-tight">{k}</p>
              <p className="mt-1 text-sm text-stone">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Популярная продукция</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">В наличии на складе</h2>
          </div>
          <Link
            to="/catalog"
            className="hidden items-center gap-1 text-sm uppercase tracking-[0.12em] text-ink sm:inline-flex"
          >
            Весь каталог <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-px bg-paper/10 lg:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to="/catalog/$category"
              params={{ category: c.id }}
              className="group relative min-h-72 overflow-hidden bg-ink"
            >
              <img
                src={c.image}
                alt=""
                className="absolute inset-0 size-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative flex h-full min-h-72 flex-col justify-end p-7">
                <p className="text-[11px] uppercase tracking-[0.18em] text-paper/60">{c.kicker}</p>
                <h3 className="mt-2 font-display text-3xl tracking-tight">{c.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/75">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm uppercase tracking-[0.12em]">
                  Смотреть <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
        <img
          src="/images/factory.jpg"
          alt="Производство термоклеевых материалов"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">О нас</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
            Семейное производство в Чеховском районе
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone">
            {COMPANY.legal} — один из крупнейших производителей термоклеевых прокладочных
            материалов в центральном районе России. Основатели запустили своё производство в{" "}
            {COMPANY.founded} году. Материалы тогда же составили конкуренцию импорту — с нами
            работают Юничел, Вестфалика, Калужская обувная и другие фабрики.
          </p>
          <Button asChild className="mt-7">
            <Link to="/about">Подробнее о компании</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
