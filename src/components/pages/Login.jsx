import React from 'react'
import Button from '../ui/button/Button'
import '../../styles/app.css'
import { Link } from 'react-router-dom'
import Footer from '../ui/footer/Footer'
import Input from '../ui/input/Input'

function Login() {
  return (
    <div>
      <div className="container content">
        <h1 className="text-center">Авторизация</h1>
        <form>
          <Input label="Почта" placeholder="example@gmail.com" type="email"/>
          <Input label="Пароль" placeholder="••••••" type="password"/>
          <Button>Войти</Button>
        </form>
        <div className="d-flex align-items-center my-5">
          <h3>Ещё нет аккаунта? <Link to='/reg'>Регистрация</Link></h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
