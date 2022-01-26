export default function Login(){
    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form className="form-group">
                    <input placeholder="Introduce el Email" type='email' className="form-control"></input>
                    <input placeholder="Introduce el Email" type='password' className="form-control mt-2"></input>
                    <div className="d-grid gap-2">
                        <input value="Iniciar Sesion" type='submit' className="btn btn-primary btn-block mt-2"></input>
                        <input value="Registrar Ususario" type='submit' className="btn btn-dark btn-block mt-auto"></input>
                    </div>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}