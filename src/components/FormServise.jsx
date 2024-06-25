export default function formservise() {
  return (
    <>
      <form action="" className="form">
        <div className="form-input">
            <div>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="">Email</label>
            <input type="email" />
            </div>
        </div>
        <div className="form-input">
            <div>
            <label htmlFor="">Fecha</label>
            <input type="date" />
            </div>
            <div>
            <label htmlFor="">Hour</label>
            <input type="time"  min={"9:00"} max={"20:00"} required/>
            </div>
        </div>
      </form>
    </>
  );
}
