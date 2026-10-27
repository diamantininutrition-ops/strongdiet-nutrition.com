function AxisMark({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="size-16 object-contain sm:size-20 lg:size-24"
      aria-hidden="true"
    />
  );
}

export function IconScale() {
  return <AxisMark src="/icons/poids.png" />;
}

export function IconTrophy() {
  return <AxisMark src="/icons/competition.png" />;
}

export function IconRecovery() {
  return <AxisMark src="/icons/recuperation.png" />;
}

export function IconPill() {
  return <AxisMark src="/icons/complements.png" />;
}

export function IconGauge() {
  return <AxisMark src="/icons/performances.png" />;
}
