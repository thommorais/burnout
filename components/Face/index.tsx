import style from './face.module.css'

function Eyes() {
	return <i className={style.eyes} />
}

function Mouth() {
	return (
		<>
			{/* <i className={style.mouth} /> */}
			<svg viewBox='0 0 10 7' className={`${style.svg}`}>
				<path d='M3,4 Q 4,4 7,4' />
			</svg>
		</>
	)
}

function Face({ mood }: { mood: 'happy' | 'sad' | 'normal' }) {
	return (
		<span className={`${style.face} ${style[mood]}`}>
			<Eyes />
			<Mouth />
		</span>
	)
}

export default Face
