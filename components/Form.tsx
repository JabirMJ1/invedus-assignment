import Link from "next/link"

const ContactForm = () => {

    const inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const LabelClassName = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"

    return(
        <form>
            <div className="mb-6">
                <label htmlFor="name" className={LabelClassName}>Your Name</label>
                <input type="text" name="name" id="name" className={inputClassName} placeholder="Jabir MJ" required/>
            </div>
            <div className="mb-6">
                <label htmlFor="phone" className={LabelClassName}>Your Phone</label>
                <input type="phone" name="phone" id="phone" className={inputClassName} required/>
            </div>
            <div className="flex items-start mb-6 bg-gray-50 border border-gray-200 p-2 rounded">
                <div className="flex items-center h-5">
                <input id="is_whatsapp" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you have whatsapp in this number</label>
            </div>
            <div className="mb-6">
                <label htmlFor="type" className={LabelClassName}>Your Phone</label>
                <input type="text" name="type" id="type" className={inputClassName} required/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className={LabelClassName}>Your Phone</label>
                <input type="text" name="type" id="phone" className={inputClassName} required/>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className={LabelClassName}>Your Phone</label>
                <input type="text" name="type" id="phone" className={inputClassName} required/>
            </div>
            
            <div className="flex space-x-5 flex-wrap">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <Link href="/" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</Link>
            </div>
        </form>
    )
}

export default ContactForm