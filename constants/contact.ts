import { ITableHeader } from "type/TTable";

export const CONTACT_TABLE = 'contacts'

// types of contacts
export enum CONTACT_TYPE {
    Personal = "Personal",
    Office = "Office"
}

/**
 * Table headers for contacts
 * 
 * @param name Label for the header
 * @param col Corresponding column name in local storage
 * @param type type of value (Switches table data type)
 */
export const TABLE_HEADERS: ITableHeader[] = [
    {name: "Name", col: "name"},
    {name: "Phone", col: "phone"},
    {name: "Type", col: "type"},
    {name: "isWhatsapp", col: "is_whatsapp"},
    {name: "Profile Image", type: "image", col: "profile"}
]