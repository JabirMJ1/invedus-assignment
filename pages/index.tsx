import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Table from '@components/Table'
import Navbar from '../components/Navbar';
import { CONTACT_TABLE, TABLE_HEADERS } from '@constants/contact';
import { useState } from 'react';
import { useEffect } from 'react';
import { isLocalStorageEnabled, listItems } from '@libs/localStorage';
import NoDependencies from '@components/NoDependencies';
import { IData } from '@type/TTable';

const inter = Inter({ subsets: ['latin'] })

const _contacts_: IData[] = [
  {name: "Jabir MJ", type: 1, phone: "7907523150", is_whatsapp: true, profile: "profile"},
  {name: "Jabir MJ", type: 1, phone: "7907523150", is_whatsapp: true, profile: "profile"},
  {name: "Jabir MJ", type: 1, phone: "7907523150", is_whatsapp: true, profile: "profile"},
  {name: "Jabir MJ", type: 1, phone: "7907523150", is_whatsapp: true, profile: "profile"},
]

/**
 * Display all contacts in table
 */
export default function Contacts() {
  const [contacts, setContacts] = useState([]) // contacts
  const [dependencies, setDependencies] = useState(false) // check if dependencies are satisfied

  // Load initial data
  useEffect(()=>{
    const initialLoading = async () => {
      // check if localstorage is enabled
      const check = await isLocalStorageEnabled()
      if(!check) return setDependencies(false) 
  
      // load data
      setContacts(await listItems(CONTACT_TABLE))
      setDependencies(true)
    }

    initialLoading()
  }, [])

  if(!dependencies) return (<NoDependencies/>)

  return (
    <>
      <Head>
        <title>Invedus - Contacts</title>
        <meta name="description" content="Contacts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
          <div className="min-w-screen min-h-screen">
            <section className="max-w-7xl m-auto">
              <Table
                headers = {TABLE_HEADERS}
                data = {_contacts_}
              />
            </section>
          </div>
      </main>
    </>
  )
}
