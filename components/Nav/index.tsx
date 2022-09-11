import S from "./nav.module.css"

function Nav() {
  return (
    <menu className={S.nav}>
      <ul>
        <li>
          <a>
            o que é burnout
            <span data-text="o que é burnout" className={S.hoverEffect} />
          </a>
        </li>
        <li>
          <a>
            sobre o cubo
            <span data-text="sobre o cubo" className={S.hoverEffect} />
          </a>
        </li>
        <li>
          <a>
            realizadores
            <span data-text="realizadores" className={S.hoverEffect} />
          </a>
        </li>
      </ul>
    </menu>
  )
}

export default Nav
