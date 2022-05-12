type TypeProps = {
  src: string
  title: string
}

const Video = ({ src, title }: TypeProps) => {
  return (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
export default Video
