export function YouTubeEmbed({
  videoId,
  title,
  channelHref,
}: {
  videoId: string;
  title: string;
  channelHref?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-black">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
      <figcaption className="px-4 py-3 text-sm text-white/80">
        {channelHref ? (
          <a href={channelHref} target="_blank" rel="noreferrer" className="hover:text-gold">
            {title}
          </a>
        ) : (
          title
        )}
      </figcaption>
    </figure>
  );
}
