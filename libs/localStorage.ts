/**
 * Check if storage is accessible or present
 * 
 * @returns boolean
 */
export const isLocalStorageEnabled: () => Promise<boolean> = async () => {
    try {
      const key = `__storage__test`;
      window.localStorage.setItem(key, "");
      window.localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  };

/**
 * list items from local storage
 * @param {string} name name of the item
 * 
 * 
 */
export const listItems: (name: string) => Promise<{[x: string] : string|boolean|number}[]> = async (name) => {
    const data = await JSON.parse(localStorage.getItem(name) ?? '[]')
    return data
}

/**
 * list items from local storage
 * @param {string} name name of the item
 * @param {number} index name of the item
 */
export const getItem: (name: string, index: number) => Promise<{[x: string] : string|boolean|number}> = async (name, index) => {
  const data = await JSON.parse(localStorage.getItem(name) ?? '[]')
  return data[index]
}

/**
 * appends new data to existing data
 * @param {object} data
 */
export const addItem: (name: string, data: {[x: string] : string|boolean|number}) => Promise<boolean> = async (name, data)=> {
    let prevData = await listItems(name)
    prevData.push(data)
    
    try{
        await localStorage.setItem(name, JSON.stringify(prevData))
        return true
    }
    catch{
        return false;
    }
}

/**
 *  edit an existing item
 * 
 * @param {string} name
 * @param {number} index index of data in array
 * @param {object} data new data
 */
export const editItem: (name: string, index: number, data: {[x: string] : string|boolean|number}) => Promise<boolean> = async (name, index, data) => {
    let prevData = await listItems(name)
    let newData = [...prevData] 

    if(newData[index]) newData[index] = data
    
    try{
        await localStorage.setItem(name, JSON.stringify(newData))
        return true
    }
    catch{
        return false;
    }
}

/**
 *  delete an existing item
 * 
 * @param {string} name
 * @param {number} index index of data in array
 */
export const deleteItem: (name: string, index: number) => Promise<boolean> = async (name, index) => {
  const prevData = await listItems(name)
  let newData = [...prevData] 
  if(index > -1 && index<newData.length) newData.splice(index, 1)
  
  try{
      localStorage.setItem(name, JSON.stringify(newData))
      return true
  }
  catch{
      return false;
  }
}