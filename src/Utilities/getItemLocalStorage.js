
export const getItemLocalStorage =()=>{
   let localStorageData = {};

   return(key , callBack)=>{
    window.addEventListener('storage',()=>{
      localStorageData = localStorage.getItem(key);
      if(key in localStorageData){
        if(localStorageData !== localStorageData[key]){
            localStorageData[key] = localStorageData;
            callBack(localStorageData);
        }
      }else{
        localStorageData[key]=localStorageData;
        callBack(localStorageData);
    }
   
    },false)
   }
}