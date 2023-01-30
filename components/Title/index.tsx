import Link from 'next/link'

import style from './phrase.module.css'

function Title() {
	return (
		<div className={style.questions}>
			<Link href='/questions'>
				<a>
					<h1 className={style.title} data-text='BURNOUT'>
						BURNOUT
					</h1>
				</a>
			</Link>
		</div>
	)
}

export default Title
