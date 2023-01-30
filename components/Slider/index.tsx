import React, { useState } from 'react'

import Face from 'components/Face'

import style from './slider.module.css'

function percent(value: number, min: number, max: number) {
	return ((value - min) * 100) / (max - min)
}

function getClosest(array: number[], currentValue: number) {
	const closest = array.reduce((a, b) =>
		Math.abs(b - currentValue) < Math.abs(a - currentValue) ? b : a,
	)

	return closest
}

function FrequencyBubble({ value, posx }: { value: number; posx: number }) {
	function stateToString(value: number): string {
		const states = {
			0: 'nunca',
			25: 'raramente',
			50: 'ás vezes',
			75: 'com frequência',
			100: 'o tempo todo',
		} as { [key: number]: string }

		const closest = getClosest(Object.keys(states).map(Number), value)

		return states[closest]
	}

	return (
		<div
			className={style.sliderValue}
			style={{ '--posx': `${posx}` } as React.CSSProperties}
		>
			{stateToString(value)}
		</div>
	)
}

function Slider() {
	const [value, setValue] = useState<number>(0)

	const min = 0
	const max = 100
	const step = 0.1

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setValue(Number(event.target.value))
	}

	let posx = percent(value, min, max)

	const moods = {
		0: 'happy',
		25: 'normal',
		75: 'normal',
		100: 'sad',
	} as { [key: number]: 'sad' | 'happy' | 'normal' }

	const mood = getClosest(Object.keys(moods).map(Number), value)

	return (
		<div className={style.slider}>
			<input
				type='range'
				min={min}
				max={max}
				defaultValue={value}
				step={step}
				onInput={handleChange}
				style={{ backgroundSize: posx + '% 100%' }}
			/>
			<div
				className={style.thumb}
				style={{ '--posx': `${posx}` } as React.CSSProperties}
			>
				<Face mood={moods[mood]} />
			</div>
			<FrequencyBubble value={value} posx={posx} />
		</div>
	)
}

export default Slider
