import React from "react"
type TypeProps = {
  title: String
}
function Navbar({ title }: TypeProps) {
  return (
    <nav flex="~" justify="between" align="items-center" h="10vh" m="x-9">
      <h3 case="capital" font="Playball">
        {title}
      </h3>
    <h3 case="capital" font="Nunito">
        last days
      </h3>
    </nav>
  )
}
export default Navbar
