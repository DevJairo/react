import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo/logo.png';
import { withRouter } from "react-router-dom";
import Button from '../shared/components/Button';
import './auth.css'
import { getLogin } from '../api';

const Login = (props) => {
  const [username, setUsername] = useState('admin@yovendo.pe')
  const [password, setPassword] = useState('password')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const redirectToHome = () => {
    props.history.push('/invoice');
  }

  const procesarDatos = e => {
    e.preventDefault()
    if (!username.trim()) {
      setError('Ingrese Usuario')
      return
    }
    if (!password.trim()) {
      setError('Ingrese Password')
      return
    }
    signup()
    setError(null)
  }

  const signup = async () => {
    const user = {
      username: username,
      password: password,
      grant_type: 'password'
    }
    setLoading(true)
    const data = await getLogin(user)
    if (data.ok) {
      const response = await data.json()
      localStorage.setItem('ACCESS_TOKEN_NAME', response.access_token);
      setLoading(false)
      redirectToHome()
    } else {
      setLoading(false)
      const response = await data.json()
      setError(response.error_description)
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#fff"
    return () => {
      document.body.removeAttribute('style')
    }
  }, []);

  return (
    <div id="auth">

      <div className="row h-100">
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right">
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <a href="index.html"><img src={logo} alt="Logo" /></a>
            </div>
            <h1 className="auth-title">¡Bienvenido!</h1>
            <p className="auth-subtitle mb-5">Ingrese sus credenciales.</p>
            {
              error && (<p className="text-danger">{error}</p>)
            }
            <form onSubmit={procesarDatos}>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Usuario"
                  onChange={e => setUsername(e.target.value)}
                  value={username} />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Contraseña"
                  onChange={e => setPassword(e.target.value)}
                  value={password} />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <Button text='Ingresar' block="btn-block" size="btn-lg" show={loading} loading="Cargando..."></Button>
            </form>
            <div className="text-center mt-3 text-lg">
              <p className="text-gray-600">¿No tienes una cuenta? <a href="auth-register.html"
                className="font-bold">Registrate</a>.</p>
              <p><a className="font-bold" href="auth-forgot-password.html">¿Olvide contraseña?</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default withRouter(Login)
