import Headset from 'icons/Headset'
import Slider from 'components/Slider'
import style from './questions.module.css'

function EntryQuestion() {
	return (
		<article className={style.question}>
			<figure className={style.figure}>
				<Headset className={style.headset} size={58} />
			</figure>
			<p>
				Para melhor se ambientar ao sistema <strong>BURNOUTCUBE</strong>,
				coloque os fones de ouvideo e relaxe.
				<br />
				Toda experiência é para facilitar o entendimento do que você está
				sentindo no momento.
			</p>

			<div className={style.buttonWrp}>
				<button className={style.button} data-text='começar'>
					<span>entendi</span>
				</button>
			</div>
		</article>
	)
}

function Questions() {
	return (
		<div className={style.questions}>
			<EntryQuestion />

			<article className={style.question}>
				<p>
					Para melhor se ambientar ao sistema <strong>BURNOUTCUBE</strong>,
					coloque os fones de ouvideo e relaxe.
					<br />
					Toda experiência é para facilitar o entendimento do que você está
					sentindo no momento.
				</p>
				<div className={style.sliderContainer}>
					<Slider />
				</div>
			</article>

			<article className={style.question} />
		</div>
	)
}

export default Questions
