import ContactForm from "@components/ContactForm";
import Navbar from "@components/Navbar";
import { IMAGE_TYPES } from "@libs/contacts";
import Head from "next/head";
import { Storage } from 'aws-amplify'
import { addItem, editItem, getItem } from "@libs/localStorage";
import { CONTACT_TABLE } from "@constants/contact";
import { v4 as uuid } from 'uuid'
import { toast } from "react-toastify";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";


export default function EditContact() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<{[x: string]: any}>({})
    const [initialImage, setInitialImage] = useState<string>("/noimage.jpg")
    const router = useRouter()
    const {id} = router.query


    // load data
    useEffect(()=>{
        const fetchData = async () => {
            if(!id) return
            const data = await getItem(CONTACT_TABLE, +id as number)
            setData(data)

            // load image from s3
            const image = await Storage.get(data.profile as string)
            setInitialImage(image)
        }

        fetchData() 
    }, [id])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setLoading(true)

        if(!id) return

        const form = e.target as HTMLFormElement
        const image = form.profile.files[0]

        // retrieve data from form
        let newData = {
            id: data.id,
            name: (form.name as any).value,
            phone: (form.phone as any).value,
            type: (form.type as any).value,
            profile: image ? `${data.id}_${image.name}` : data.profile,
            is_whatsapp: (form.is_whatsapp as any).checked,
        }


        // validate image
        if(image && !IMAGE_TYPES.includes(image['type'])){
            // Not allowed image type
            return alert("Please upload png, jpeg or gif")
        }

        // append id

        // upload file to s3 and fetch image key
        if(image) {
            await Storage.remove(data.profile) // remove old
            await Storage.put(newData.profile, image) // add new
        }

        // save data to local storage
        editItem(CONTACT_TABLE, +id, newData)
        setLoading(false)
        toast("succesfully added",{type:"success",theme:"colored"})
    }

    if(!id) return <h1>Not found</h1> // if no id

    return(
        <>
        <Head>
            <title>Invedus - Edit Contacts</title>
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
                        data = {data}
                        form_type="edit"
                        initialImage={initialImage}
                    />
                </section>
            </div>
        </main>
        </>
    )
    
}