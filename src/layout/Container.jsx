import React from 'react'
import './layout.css'
import avatar from '../assets/images/faces/1.jpg'
import { useHistory } from "react-router-dom";


function Container({children}) {
    
    let history = useHistory();

    const signOut = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push("/")
    }
    return (
        <>
            <header>
                <nav className="navbar navbar-expand navbar-light ">
                    <div className="container-fluid p-0">
                        <a href="#" className="burger-btn d-block">
                            <i className="bi bi-justify fs-3"></i>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown me-1">
                                    <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className='bi bi-envelope bi-sub fs-4 text-gray-600'></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <h6 className="dropdown-header">Mail</h6>
                                        </li>
                                        <li><a className="dropdown-item" href="#">No new mail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-3">
                                    <a className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className='bi bi-bell bi-sub fs-4 text-gray-600'></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <h6 className="dropdown-header">Notifications</h6>
                                        </li>
                                        <li><a className="dropdown-item">No notification available</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="dropdown">
                                <a href="#" data-bs-toggle="dropdown" aria-expanded="true">
                                    <div className="user-menu d-flex">
                                        <div className="user-name text-end me-3">
                                            <h6 className="mb-0 text-gray-600">nombre</h6>
                                            <h6 className="mb-0 text-sm text-success">Online</h6>
                                        </div>
                                        <div className="user-img d-flex align-items-center">
                                            <div className="avatar avatar-md">
                                                <img src={avatar} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <h6 className="dropdown-header">Hello, nombre </h6>
                                    </li>
                                    <li><a className="dropdown-item" href="{{ route('profile.show') }}"><i className="icon-mid bi bi-person me-2"></i> My
                                        Profile</a></li>

                                    <li>
                                        <a className="dropdown-item" href="#"><i className="icon-mid bi bi-gear me-2"></i>
                                            demo
                                        </a>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a href="#" className="dropdown-item" onClick={signOut}>
                                            <i className="icon-mid bi bi-box-arrow-left me-2"></i>
                                            cerrar
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="main">
                {/* <div className="page-heading">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-6 order-md-1 order-last">
                                <h3>{title}</h3>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="page-content">
                    {children}
                </div>
              

                <footer>
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-start">
                            <p>2022 &copy; Yovendo.pe</p>
                        </div>
                        <div className="float-end">
                        <p>Creado con <span className="text-danger"><i className="bi bi-heart"></i></span> por <a
                            href="http://jairomachuca.com">Jairo Machuca</a></p>
                    </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Container
