export function InputElement({onChange,value,label,type}){

    function handleonChange(event) {
        onChange(event.target.value);
      }
     

    return(
        <div className='text-right'>
        <label className='mb-4 text-slate-500' htmlFor='email'>{label} خود را وارد کنید</label>
        <input
            type={type}
            className={`w-full p-2 mt-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            name={value}
            placeholder=' '
            value={value}
            autoComplete="off"
            onChange={handleonChange}
             required
            
        />
    </div>
    )
}