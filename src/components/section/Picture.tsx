// import React from "react"
type TypeUrl = {
  url: string
  hdurl: string
}
type TypeProps = {
  src: TypeUrl
  alt: string
}

const Picture = ({ src, alt }: TypeProps) => {
  const { url, hdurl } = src
  return (
    <picture>
      <a href={hdurl}>
        <img src={url} alt={alt} />
      </a>
    </picture>
  )
}
export default Picture
