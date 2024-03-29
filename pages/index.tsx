import type { NextPage } from 'next'
import Head from 'next/head'

import Title from '_components/Title'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Burnout</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Title />
		</>
	)
}

export default Home
