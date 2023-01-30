import S from './scroll-to-begin.module.css'

function ScrollToBegin() {
	return (
		<div className={S.scrollToBegin}>
			<span className={S.mouse}>
				<span className={S.mouseShape}>
					<i className={S.dot} />
				</span>
			</span>
			começar
		</div>
	)
}

export default ScrollToBegin
