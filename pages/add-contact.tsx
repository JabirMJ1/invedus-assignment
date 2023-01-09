import ContactForm from "@components/Form";
import Navbar from "@components/Navbar";
import Head from "next/head";

export default function AddContact() {
    return(
        <>
        <Head>
            <title>Invedus - Add Contacts</title>
            <meta name="description" content="Contacts" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main>
            <div className="min-w-screen min-h-screen">
                <section className="max-w-7xl m-auto p-5">
                    <ContactForm/>
                </section>
            </div>
        </main>
        </>
    )
    
}