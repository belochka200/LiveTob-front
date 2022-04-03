import React from 'react'
import Button from '../ui/button/Button'
import '../../styles/app.css'
import { Link } from 'react-router-dom'
import Footer from '../ui/footer/Footer'
import Input from '../ui/input/Input'

function Register() {
  return (
    <div>
      <div className="container content">
        <h1 className="text-center">Регистрация</h1>
        <div className="row">
          <form className="col-6">
            <Input label="Имя" placeholder="Имя Фамилия" type="text"/>
            <Input label="Почта" placeholder="example@gmail.com" type="email"/>
            <Input label="Пароль" placeholder="••••••" type="password"/>
            <Button>Зарегистрироваться</Button>
          </form>
        </div>
        <div className="d-flex align-items-center my-5">
          <h3>Уже есть аккаунт? <Link to="/login">Войти</Link></h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
