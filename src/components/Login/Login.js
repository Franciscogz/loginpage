import React, { useState } from "react";
import Form from "../Forms/Form";
import FormFields from "../Forms/FormFields";
import FormAction from "../Forms/FormAction";
function Login(){
    const [formData, setFormData]=useState({
        username:"",
        password:"",
        usernameError:"",
        passwordError:""
    })
    const myOnSumit= function (e) {
        e.preventDefault();
        e.stopPropagation();
        const {user, pswd}=formData;
        alert(`Usuario:${user} Psswd:${pswd}`);
    }

    const myOnChange=function(e) {
        const{ name , value}= e.currentTarget;
        //console.log(name, value);
        let error=null;
        if(name=="password"){
           error=(/^(?=.*\d)(?=.*A-Z)(?=.*a-z)(?=.*^\w\d\s:)(^\s){8,32}$/).test(value) ? null:"Contraseña Invalida";
           // error=( /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value)? null:"Contrasena Invalido";
        }
         setFormData({formData,[name]:value, [name+"Error"]:error});
    }

    return(
        <Form>
            <FormFields
                type="text"
                id="username"
                fname="username"
                onChange={myOnChange}
                caption="Correo Electrónico"
                value={formData.username}
                error={formData.usernameError}
                placeholder="Tu correo"></FormFields>
            <FormFields
            type="password"
            id="password"
            fname="Contraseña"
            onChange={myOnChange}
            caption="Contraseña"
            value={formData.password}
            error={formData.passwordError}
            placeholder="Contraseña"></FormFields>
            <FormAction caption="Inciar Sesión" 
            onClick={
                (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const {username, password}=formData;
                alert(`Usuario:${username} Psswd:${password}`);}}
                ></FormAction>
        </Form>
    );
}
export default Login