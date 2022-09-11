import Nav from "_components/Nav"

import S from "./wrapper.module.css"

interface WrapperInterface {
  children: JSX.Element
}

function Wrapper({ children }: WrapperInterface) {
  return (
    <div className={S.wrapper}>
      <Nav />
      <main>{children}</main>
      <footer>social media - volume</footer>
    </div>
  )
}

export default Wrapper
