import Head from 'next/head'

export default function HeadConfig({title = "YouTube"}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Clone design do youtube usando next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
