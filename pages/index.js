import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Yo yo Its working!!! <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

