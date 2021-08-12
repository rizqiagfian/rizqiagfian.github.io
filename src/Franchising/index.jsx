import React, { useState, useEffect, useRef } from "react"
import imgNv from "../img/hd.jpg"

const Franchising = () => {

    return (
        <>

            <div>

                <div>

                    <nav class="navbar navbar-expand-lg navbar-light " style={{ paddingBottom: "40px", paddingTop: "40px" }}>
                        <div class="container-fluid" style={{ justifyContent: "center" }}>
                            <a class="navbar-brand" href="/home" style={{ display: "contents" }} >
                                <img src={imgNv} style={{ width: "50px" }}></img>
                                <h1 style={{ marginLeft: "10px", textAlign: "center", color: "#433c54", fontFamily: "lucida handwriting", marginTop: "1.5rem", marginBottom: "-3px", fontWeight: "bolder", marginRight: "20px" }}>Aromanja Coffee</h1>
                            </a>
                            <button class="navbar-toggler" type="button" style={{ marginTop: "20px" }} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ marginBottom: "-20px" }}>
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class="nav-link  nav-not-active" aria-current="page"  href="/home" style={{ fontSize: "25px", fontFamily: "Titillium Web" }}>Home</a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link nav-not-active" href="/menu"  style={{ fontSize: "25px", fontFamily: "Titillium Web" }}>Menu</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link nav-active" href="/franchising"  style={{ fontSize: "25px", fontFamily: "Titillium Web", color: "#bf8226" }} >Franchising</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link nav-not-active" href="/about" style={{ fontSize: "25px", fontFamily: "Titillium Web", color: "#bf8226" }} >About </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                <h1>Franchising</h1>

            </div>
        </>
    )
}

export default Franchising