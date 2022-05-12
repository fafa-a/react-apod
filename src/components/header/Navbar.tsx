import React from "react"
type TypeProps = {
  title: String
}
function Navbar({ title }: TypeProps) {
  return (
    <nav flex="~" justify="between" align="items-center" h="10vh" m="x-9">
      <h3 case="capital" font="playball" text="3em">
        {title}
      </h3>
      <h3 case="upper" font="nunito" text="1.3em">
        last days
      </h3>
    </nav>
  )
}
export default Navbar
