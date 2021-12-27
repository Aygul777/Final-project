import React, {useEffect} from "react";
import './Login.css'
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import {useState} from "react";


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Почта не может быть пустой')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(()=> {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    })

    const emailHandler = (e) => {
        setEmail(e.target.value)

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler =(e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 6) {
            setPasswordError('Пароль не может быть меньше 6 символов')
            if (!e.target.value){
                setPasswordError('Пароль не может быть меньше 6 символов')
            }
        } else {setPasswordError('')
        }
    }


    const blurHandler=(e)=>{
        switch(e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }




    return (
        <form className="form" method="post" action="/submit" >
            <div className="form__frame">
                <div className="form__frame-title">
                    <h2>Вход</h2>
                </div>
                <div className="form__data">
                    {emailError && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="form__input" type="text-email" placeholder="Email" id="email-input"></input>
                </div>
                <div className="form__data">
                    {passwordError && <div style={{color:'red'}}>{passwordError}</div>   }
                    <input  onChange={passwordHandler} value={password} onBlur={e => blurHandler(e)} className="form__input" type="password" placeholder="Пароль" id="text-password"></input>
                </div>
                <div className="form__checkbox-wrapper">
                    <input  className="form__checkbox" type="checkbox" id="input-checkbox"></input>
                    <div className="form__checkbox-mark"></div>
                    <label className="form__checkbox-label" htmlFor="input-checkbox">Я согласен получать обновления на почту </label>
                </div>
                <Link to={"/cards"}>
                    <Button  title={"Войти"} formValid={!formValid}  />
                </Link>
            </div>
        </form>
    )
}



