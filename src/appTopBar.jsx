import React, { useState, useEffect, useRef } from "react"
import imgNv from "./img/hd.jpg"
import "./style.css"

const AppTopBar = () => {

    const [activeHome, setActiveHome] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const [activeFranchising, setActiveFranchising] = useState(false)
    const [activeAbout, setActiveAbout] = useState(false)

    const active1 = () => {
        setActiveHome(true)
        setActiveMenu(false)
        setActiveAbout(false)
        setActiveAbout(false)
    }

    const active2 = () => {
        setActiveHome(false)
        setActiveMenu(true)
        setActiveAbout(false)
        setActiveAbout(false)
    }

    const active3 = () => {
        setActiveHome(false)
        setActiveMenu(false)
        setActiveAbout(true)
        setActiveAbout(false)
    }

    const active4 = () => {
        setActiveHome(false)
        setActiveMenu(false)
        setActiveAbout(false)
        setActiveAbout(true)
    }

    return (
        <>

            <div>

                <nav class="navbar navbar-expand-lg navbar-light " style={{ paddingBottom: "40px", paddingTop: "40px" }}>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/home" style={{ display: "contents" }} onClick={active1}>
                            <img src={imgNv} style={{ width: "50px" }}></img>
                            <h1 style={{ marginLeft:"10px", textAlign: "center", color: "#433c54", fontFamily: "lucida handwriting", marginTop: "1.5rem", marginBottom: "-3px", fontWeight: "bolder"}}>Aromanja Coffee</h1>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{marginBottom:"-20px"}}>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link  nav-active" aria-current="page" onClick={active1} href="/home" style={{ fontSize: "25px", fontFamily: "fantasy"}}>Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link nav-not-active" href="/menu" onClick={active2} style={{ fontSize: "25px", fontFamily: "fantasy" }}>Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/franchising" onClick={active3} style={{ fontSize: "25px", fontFamily: "fantasy", color:"#bf8226" }} >Franchising</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about" onClick={active4} style={{ fontSize: "25px", fontFamily: "fantasy", color:"#bf8226" }} >About </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default AppTopBar