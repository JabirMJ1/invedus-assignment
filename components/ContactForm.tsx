import { CONTACT_TYPE } from "@constants/contact"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {ImSpinner2} from 'react-icons/im'


type MyProps = {
    handleSubmit:  React.FormEventHandler<HTMLFormElement>,
    loading: boolean,
    data?: {[x: string]: string|boolean|number},
    form_type?: "add"|"edit" // to load data or not
    initialImage: string 
}

/**
 * Form for submission for contact
 */
const ContactForm = (props: MyProps) => {
    const [file, setFile] = useState<string>();
    const {name, phone, type, is_whatsapp} = props.data ?? {}
    console.log(is_whatsapp)

    const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFile(e.target.files ? URL.createObjectURL(e.target.files[0]) : undefined);
    }

    const inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const LabelClassName = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"

    return(
        <form onSubmit={props.handleSubmit}>
            <h1 className="font-bold py-5 text-xl">{props.form_type=="edit" ? "Edit" : "Add"} Contact</h1>
            <div className="mb-6">
                <label htmlFor="name" className={LabelClassName}>Your Name</label>
                <input defaultValue={name as string ?? ""} type="text" name="name" id="name" className={inputClassName} placeholder="Jabir MJ" required/>
            </div>
            <div className="mb-6">
                <label htmlFor="phone" className={LabelClassName}>Your Phone</label>
                <input defaultValue={phone as string ?? ""} type="number" minLength={10} maxLength={10} placeholder="953XXXXXXX" name="phone" id="phone" className={inputClassName} required/>
            </div>
            <div className="flex items-start mb-6 bg-gray-50 border border-gray-200 p-2 rounded">
                <div className="flex items-center h-5">
                <input defaultChecked={is_whatsapp as boolean} id="is_whatsapp" name = "is_whatsapp" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                </div>
                <label htmlFor="is_whatsapp" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you have whatsapp in this number</label>
            </div>
            <div className="mb-6">
                <label htmlFor="type" className={LabelClassName}>Your Type</label>
                <select name="type" id="type" className={inputClassName}>
                    {
                        Object.entries(CONTACT_TYPE).map((item, key)=>(
                            <option selected={type==item[1]} key={key} value={item[1]}>{item[0]}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-6">
                <label htmlFor="profile" className={LabelClassName}>Your Profile</label>
                <input type="file" name="profile" id="profile" className={inputClassName} onChange = {handleImageChange}/>
                <span className="text-xs text-gray-600">gif, png, jpg</span>
                <div  className="relative aspect-square w-40 my-5">
                    <Image
                        unoptimized
                        src={file ?? props.initialImage}
                        fill
                        alt="img"
                        quality={10}
                        />
                </div>
            </div>
            
            <div className="flex space-x-5 flex-wrap">
            <button type="submit" className="flex items-center  space-x-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={props.loading}>{props.loading && <ImSpinner2 className="animate-spin"/>}<span>Submit</span></button>
            <Link href="/" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</Link>
            </div>
        </form>
    )
}

export default ContactForm