function Headset({
	className,
	size = 24,
}: {
	className: string
	size: number
}) {
	return (
		<svg
			width={size}
			height={size}
			strokeWidth='2'
			viewBox='0 0 24 24'
			fill='none'
			color='currentColor'
			className={className}
		>
			<path
				d='M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 17.439v-1.877a2 2 0 011.515-1.94L4 13.5l1.254-.314a.6.6 0 01.746.582v5.464a.6.6 0 01-.746.582l-1.74-.435A2 2 0 012 17.439zM22 17.439v-1.877a2 2 0 00-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 00-.745.582v5.464a.6.6 0 00.745.582l1.74-.435A2 2 0 0022 17.439z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				fill='currentColor'
			/>
		</svg>
	)
}

export default Headset
