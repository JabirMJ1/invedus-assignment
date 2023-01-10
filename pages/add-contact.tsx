import ContactForm from "@components/ContactForm";
import Navbar from "@components/Navbar";
import { IMAGE_TYPES } from "@libs/contacts";
import Head from "next/head";
import { Storage } from 'aws-amplify'
import { addItem } from "@libs/localStorage";
import { CONTACT_TABLE } from "@constants/contact";
import { v4 as uuid } from 'uuid'
import { toast } from "react-toastify";
import {useState} from 'react'


export default function AddContact() {
    const [loading, setLoading] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement
        const id = uuid()
        const image = form.profile.files[0]

        // retrieve data from form
        let data = {
            id,
            name: (form.name as any).value,
            phone: (form.phone as any).value,
            type: (form.type as any).value,
            profile: `${id}_${image.name}`,
            is_whatsapp: (form.is_whatsapp as any).checked,
        }


        // validate image
        if(!IMAGE_TYPES.includes(image['type'])){
            // Not allowed image type
            return alert("Please upload png, jpeg or gif")
        }

        // append id

        // upload file to s3 and fetch image key
        await Storage.put(data.profile, image)

        // save data to local storage
        addItem(CONTACT_TABLE, data)
        setLoading(false)
        toast("succesfully added",{type:"success",theme:"colored"})
    }

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
                    <ContactForm
                        handleSubmit = {handleSubmit}
                        loading={loading}
                        initialImage={"/noimage.jpg"}
                    />
                </section>
            </div>
        </main>
        </>
    )
    
}