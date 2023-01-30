import S from './footer.module.css'

import SocialMedia from './SocialMedia'
import ScrollToBegin from './ScrollToBegin'
import Volume from './Volume'

function Footer() {
	return (
		<footer className={S.footer}>
			<SocialMedia />
			<ScrollToBegin />
			<Volume />
		</footer>
	)
}

export default Footer
