type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
};

export function Marquee({ items, reverse = false, className, itemClassName }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden ? "true" : undefined}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className={itemClassName ?? "mx-6"}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className={`flex w-max whitespace-nowrap ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
