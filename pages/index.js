import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mari kita mulai!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to test iq!" />
        <p className="description">
          Mari kita mulai!! <code>test iq</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
