export function BlockMark() {
  return (
    <section data-block="9" className="bg-white px-5 pb-16 pt-12 text-ink [border-radius:50%_50%_50%_50%/1.75rem_1.75rem_1.75rem_1.75rem] sm:px-8 sm:pb-20 sm:pt-16 sm:[border-radius:50%_50%_50%_50%/2.25rem_2.25rem_2.25rem_2.25rem]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-4xl font-bold tracking-[0.04em] text-ink sm:text-6xl lg:text-8xl">
          STRONGDIET
        </p>
        <p className="mt-2 font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink sm:text-sm lg:text-2xl lg:tracking-[0.32em]">
          Performance & nutrition
        </p>
        <img
          src="/logo-mark.png"
          alt=""
          className="mx-auto mt-6 h-52 w-auto sm:h-72 lg:mt-8 lg:h-[25rem]"
        />
      </div>
    </section>
  );
}
