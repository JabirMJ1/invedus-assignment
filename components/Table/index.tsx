import { IData, ITableHeader } from "type/TTable"
import {BiCog} from 'react-icons/bi'
import {MdDeleteOutline, MdOutlineEdit} from 'react-icons/md'
import Image from "next/image"
import { Storage } from "aws-amplify"
import {useState} from "react"
import S3Image from "@components/S3Image"
import { deleteItem } from "@libs/localStorage"
import { CONTACT_TABLE } from "@constants/contact"
import { toast } from "react-toastify"
import Link from "next/link"

type MyProps = {
    headers: ITableHeader[],
    data: IData[],
    removeItem: Function
}

const Table = (props: MyProps) => {
    // delete data from local and image from server
    const handleDelete: Function = async (e: React.MouseEvent, profile: string, index: number) => {
        e.preventDefault()
        // delete local data
        try{
            const localdel = await deleteItem(CONTACT_TABLE, index)
            console.log(localdel)
            const imagedel = await Storage.remove(profile)
            console.log(imagedel)
            toast("succesfully deleted",{type:"success",theme:"colored"})
            props.removeItem(index)
        }
        catch{
            toast("unable to delete",{type:"error",theme:"colored"})
        }
    } 

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        {/* Headers */}
                        <thead className="border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    #
                                </th>
                                {
                                    props.headers.map((item, key)=>(
                                        <th key={key} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            {item.name}
                                        </th>
                                    ))
                                }

                                <th className="text-xl font-medium text-gray-900 px-6 py-4 float-right">
                                    <BiCog/>
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.data.length==0 ?
                            <tr>
                                <td colSpan={7} className="text-center p-5">No Data</td>
                            </tr>
                        :
                            props.data.map((data, key)=>(
                                <tr key={key} className="bg-white border-b">
                                    {/* Sequence number */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>

                                    {/* data */}
                                    {
                                        props.headers.map((header, headerKey)=>(<td key={headerKey} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {header.type == "image" ? <S3Image src = {data[header.col]}/> : data[header.col].toString()}
                                            </td>)
                                        )
                                    }
                                    
                                    {/* Controls */}
                                    <td className="flex justify-center text-xl space-x-5 text-gray-900 font-light px-6 py-4 whitespace-nowrap float-right">
                                        <Link href={`/edit-contact/${key}`}><MdOutlineEdit/></Link>
                                        <button type="button" onClick={(e)=>handleDelete(e, data["profile"], key)} ><MdDeleteOutline className="text-red-500"/></button>
                                    </td>
                                </tr>
                            ))
                        }     
                        
                            
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Table