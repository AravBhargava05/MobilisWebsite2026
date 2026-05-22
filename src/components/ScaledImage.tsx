import Image from "next/image";

type ScaledImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidthClass?: string;
  bgClassName?: string;
  className?: string;
};

export function ScaledImage({
  src,
  alt,
  width,
  height,
  maxWidthClass = "max-w-[480px]",
  bgClassName = "bg-background",
  className,
}: ScaledImageProps) {
  return (
    <div className={bgClassName}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1024px) 90vw, 480px"
        className={`h-auto w-full ${maxWidthClass} ${className ?? ""}`}
      />
    </div>
  );
}
