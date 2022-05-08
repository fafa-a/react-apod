import React from "react"
type TitleProps = {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div w="220px md:full">
      <h1 text="capitalize h3 md:h1" font="display">
        {title}
      </h1>
    </div>
  )
}

export default Title
