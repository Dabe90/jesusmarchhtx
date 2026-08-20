type Props = {
  src: string;
  poster?: string;
};

export function BackgroundVideo({ src, poster }: Props) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
