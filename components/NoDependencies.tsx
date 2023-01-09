import Head from "next/head"
import Navbar from "./Navbar"

const NoDependencies = () => {
    return (
        <>
        <Head>
          <title>Invedus - Dependency error</title>
          <meta name="description" content="Contacts" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Navbar/>
        </header>
        <main>
            <div className="min-w-screen min-h-screen flex flex-col justify-center items-center space-y-3">
              <h3>Dependency error</h3>
              <p>Local storage can&apos;t be initialized</p>
            </div>
        </main>
      </>
    )
}

export default NoDependencies