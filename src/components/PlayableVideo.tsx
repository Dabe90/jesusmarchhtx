export function PlayableVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-black">
      <video
        className="aspect-video w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="px-4 py-3 text-sm text-white/80">{title}</figcaption>
    </figure>
  );
}
