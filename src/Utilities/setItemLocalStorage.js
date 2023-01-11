export const setItemLocalStorage =(label , value)=>{
    window.localStorage.setItem(label,value);
    window.dispatchEvent(new Event('storage'));
}