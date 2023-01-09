export interface ITableHeader {
    name: string, // label for table header
    col: string, // column of data
    type?: "image"|"string" // type of display
}


// interface contacts table data
export interface IData {
    [x: string]: any
    // name: string,
    // phone: string,
    // type: number, 
    // is_whatsapp: boolean, // whether uses whatsapp
    // profile: string // profile image url
}