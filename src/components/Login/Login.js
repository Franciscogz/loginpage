import React, { useState } from "react";
import Form from "../Forms/Form";
import FormFields from "../Forms/FormFields";
import FormAction from "../Forms/FormAction";
import User from "../../assets/img/user.png";
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
        let error=null;
        if(name=="password"){
           error=(/^(?=.*\d)(?=.*A-Z)(?=.*a-z)(?=.*^\w\d\s:)(^\s){8,32}$/).test(value) ? null:"Contraseña Invalida";
        }
         setFormData({formData,[name]:value, [name+"Error"]:error});
    }
    return(
        <Form >
            <img src={User} className="w-24 h-24  md:h-32 md:w-32 lg:w-44 lg:h-44 md:w-"></img>
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