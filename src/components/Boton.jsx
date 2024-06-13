import "./style-react.css"
export default function Boton({children, name}){
    const handelClick = ()=>{
        alert(" hello World" + name)
    }
    return(
        <>
        <button onClick={handelClick} className="Buton">
            {children}
        </button>
        </>
    )
}
