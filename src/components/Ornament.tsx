type Tone = "light" | "dark";

type OrnamentProps = {
  tone?: Tone;
  className?: string;
};

/** Three parallel marks — the adidas stripe language, refined. */
export function ThreeStripes({
  tone = "light",
  orientation = "horizontal",
  className = "",
  size = "md",
}: {
  tone?: Tone;
  orientation?: "horizontal" | "vertical" | "diagonal";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const bar =
    tone === "dark" ? "bg-fg-inverse/70" : "bg-fg";

  const gap = size === "sm" ? "gap-[3px]" : size === "lg" ? "gap-1.5" : "gap-1";
  const thick =
    size === "sm" ? "h-[2px] w-5" : size === "lg" ? "h-[3px] w-10" : "h-[2.5px] w-7";
  const thickV =
    size === "sm" ? "w-[2px] h-5" : size === "lg" ? "w-[3px] h-10" : "w-[2.5px] h-7";

  if (orientation === "vertical") {
    return (
      <span
        className={`inline-flex flex-col ${gap} ${className}`}
        aria-hidden="true"
        title="Three stripes"
      >
        <span className={`${thickV} ${bar}`} />
        <span className={`${thickV} ${bar}`} />
        <span className={`${thickV} ${bar}`} />
      </span>
    );
  }

  if (orientation === "diagonal") {
    return (
      <span
        className={`inline-flex ${gap} ${className}`}
        aria-hidden="true"
        title="Three stripes"
        style={{ transform: "skewX(-18deg)" }}
      >
        <span className={`${thickV} ${bar}`} />
        <span className={`${thickV} ${bar}`} />
        <span className={`${thickV} ${bar}`} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex flex-col ${gap} ${className}`}
      aria-hidden="true"
      title="Three stripes"
    >
      <span className={`${thick} ${bar}`} />
      <span className={`${thick} ${bar}`} />
      <span className={`${thick} ${bar}`} />
    </span>
  );
}

/** Horizontal rule with three stripes as the center mark. */
export function Ornament({ tone = "light", className = "" }: OrnamentProps) {
  const line = tone === "dark" ? "bg-fg-inverse/20" : "bg-border-strong/50";

  return (
    <div
      className={`flex items-center gap-5 ${className}`}
      aria-hidden="true"
    >
      <span className={`h-px flex-1 ${line}`} />
      <ThreeStripes tone={tone} size="sm" />
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}

/** Seal combining 三 and three stripes — brand × codex. */
export function SanSeal({
  tone = "light",
  size = "md",
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-24 w-24",
  };
  const text = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };
  const border =
    tone === "dark" ? "border-fg-inverse/25 text-fg-inverse/80" : "border-border-strong text-fg";

  return (
    <div
      className={`inline-flex flex-col items-center justify-center gap-1.5 border ${sizes[size]} ${border}`}
      aria-hidden="true"
      title="三 · Three Stripes"
    >
      <ThreeStripes tone={tone} size="sm" orientation="diagonal" />
      <span className={`font-cjk font-medium leading-none ${text[size]}`}>三</span>
    </div>
  );
}
