import React,{useState} from 'react'
import {auth, createUserWithEmailAndPassword} from '../firebaseconfig'

export default function Login(){

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [msgError,setmsgError] = useState(null)

    const registrarUsuario = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,pass)
        
        .then( r => alert('Usuario registrado'))
        setEmail('')
        setPass('')
        .catch((e) =>{
            if (e.code == 'auth/invalid-email'){
                setmsgError('Wrong format for Email address')
            }
            if (e.code == 'auth/weak-password'){
                setmsgError('The Password should be at least 6 characters')
            }
        })
    }

    return(
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={registrarUsuario} className="form-group">
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        placeholder="Introduce el Email" 
                        type='email' 
                        className="form-control"
                    />
                    <input
                        onChange={(e)=>{setPass(e.target.value)}} 
                        placeholder="Introduce el Email" 
                        type='password' 
                        className="form-control mt-2"/
                    >
                    <div className="d-grid gap-2">
                        <input 
                            value="Iniciar Sesion" 
                            type='submit'
                            className="btn btn-primary btn-block mt-2"
                        />
                        <input 
                            value="Registrar Ususario" 
                            type='submit' 
                            className="btn btn-dark btn-block mt-auto"
                        />
                    </div>
                </form>
                <div>
                    {
                        msgError !== null ? 
                        (
                            <div className='alert alert-danger'>{msgError}</div>
                        ):
                        (
                            <span/>
                        )
                    }
                </div>
            </div>
            <div className="col"></div>
        </div>
    )
}