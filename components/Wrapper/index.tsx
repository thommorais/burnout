import Nav from '_components/Nav'
import Footer from '_components/Footer'

import S from './wrapper.module.css'

interface WrapperInterface {
	children: JSX.Element
}

function Wrapper({ children }: WrapperInterface) {
	return (
		<div className={S.wrapper}>
			<Nav />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Wrapper
