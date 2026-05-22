import Image from "next/image";

type FullWidthImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  caption?: string;
  className?: string;
};

export function FullWidthImage({
  src,
  alt,
  width,
  height,
  priority,
  caption,
  className,
}: FullWidthImageProps) {
  return (
    <figure className={className}>
      <div className="w-full bg-[#050505]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="100vw"
          className="mx-auto block h-auto w-full max-w-[1600px]"
        />
      </div>
      {caption ? (
        <figcaption className="label-caps px-6 pt-4 text-muted md:px-10 lg:px-14">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
