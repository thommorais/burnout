import type { NextPage } from 'next'
import Head from 'next/head'

import Questions from '_components/Questions'

const QuestionsPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Burnout</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Questions />
		</>
	)
}

export default QuestionsPage
