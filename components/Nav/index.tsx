import S from './nav.module.css'

function Nav() {
	return (
		<menu className={S.nav}>
			<ul>
				<li>
					<a className={S.link}>
						o que é burnout
						<span data-text='o que é burnout' className={S.hoverEffect} />
					</a>
				</li>
				<li>
					<a className={S.link}>
						sobre o cubo
						<span data-text='sobre o cubo' className={S.hoverEffect} />
					</a>
				</li>
				<li>
					<a className={S.link}>
						realizadores
						<span data-text='realizadores' className={S.hoverEffect} />
					</a>
				</li>
			</ul>
		</menu>
	)
}

export default Nav
