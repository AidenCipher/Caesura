export default function Home() {
  return (
    <>
      {/* Full-screen hero: only Shades of Blue visible on first load */}
      

      {/* Scroll-down section: farewell message */}
      <section className="w-full max-w-4xl pb-16 text-center sm:mx-auto sm:text-left">
        <div className="inline-flex rounded-full border border-sky-500/40 bg-blue-900/60 px-4 py-1 text-2xl font-medium uppercase tracking-[0.25em] text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.45)]">
          Shades of Blue
        </div>

        <h2 className="mt-8 text-balance font-cursive text-5xl leading-tight text-sky-50 sm:text-6xl lg:text-7xl">
          It&apos;s almost time to celebrate everything you&apos;ve built, shared,
          and become.
        </h2>

        <p className="mt-6 max-w-2xl text-balance font-cursive text-2xl leading-relaxed text-sky-100/80 sm:text-3xl">
          Every late night, every inside joke, every small act of kindness has
          woven itself into the story of this place. This evening is our way of
          pausing time for a moment, to look back, cheer you on, and send you
          forward with all the love in the world.
        </p>

        <p className="mt-4 max-w-xl font-cursive text-xl text-sky-100/70 sm:text-2xl">
          Until then, breathe it in. Soak up the nostalgia, hold your people a
          little closer, and keep your eyes open, there might be more clues hiding
          around than you think!
        </p>
      </section>
    </>
  );
}