export default function Input({type="text", placeholder="", value, onChange}){

    return(
        <>
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-400 px-2 py-1 rounded"

        />
        </>
    )
}