import { IData, ITableHeader } from "type/TTable"
import {BiCog} from 'react-icons/bi'
import {MdDeleteOutline, MdOutlineEdit} from 'react-icons/md'

type MyProps = {
    headers: ITableHeader[],
    data: IData[]
}

const Table = (props: MyProps) => {
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
                                        props.headers.map((header, headerKey)=>(
                                            <td key={headerKey} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {data[header.col]}
                                            </td>
                                        ))
                                    }
                                    
                                    {/* Controls */}
                                    <td className="flex text-xl space-x-5 text-gray-900 font-light px-6 py-4 whitespace-nowrap float-right">
                                        <MdOutlineEdit/>
                                        <MdDeleteOutline className="text-red-500"/>
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