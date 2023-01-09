/**
 * Check if storage is accessible or present
 * 
 * @returns boolean
 */
export const isLocalStorageEnabled = () => {
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
export const listItems = async (name: string) => {
    const data = await JSON.parse(localStorage.getItem(name) ?? '[]')
    return data
}

/**
 * setItem
 * @param {object} data
 */
export const setItem = async (name: string, data: {[x: string] : string|boolean|number}[])=> {
    try{
        await localStorage.setItem(name, JSON.stringify(data))
        return true
    }
    catch{
        return false;
    }
}