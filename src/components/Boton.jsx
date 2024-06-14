import "./style-react.css";
export default function Boton({ children, name, className }) {
  const handelClick = () => {
    alert(" hello World" + name);
  };
  return (
    <>
      <div className="div-elemento-a">
        <a onClick={handelClick} className={className}>
          {children}
        </a>
      </div>
    </>
  );
}
