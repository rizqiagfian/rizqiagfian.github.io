import React, { useState, useEffect, useRef } from "react"
import imgNv from "../img/hd.jpg"
import img1 from "../img/home/home-1.jpg"
import img2 from "../img/home/home-2.jpg"
import img3 from "../img/home/home-3.jpg"
import img4 from "../img/home/home-4.jpg"
import img5 from "../img/home/home-5.jpg"
import img6 from "../img/home/home-6.jpg"
import img7 from "../img/home/home-7.jpg"
import img8 from "../img/home/home-8.jpg"
import img9 from "../img/home/home-9.jpg"
import img10 from "../img/home/home-10.jpg"
import "../style.css"

const Home = () => {

    return (
        <>

            <div>

                <nav class="navbar navbar-expand-lg navbar-light " style={{ paddingBottom: "40px", paddingTop: "40px" }}>
                    <div class="container-fluid" style={{ justifyContent: "center" }}>
                        <a class="navbar-brand" href="/home" style={{ display: "contents" }} >
                            <img src={imgNv} style={{ width: "50px" }}></img>
                            <h1 style={{ marginLeft: "10px", textAlign: "center", color: "#433c54", fontFamily: "lucida handwriting", marginTop: "1.5rem", marginBottom: "-3px", marginRight: "20px", fontWeight: "bolder" }}>Aromanja Coffee</h1>
                        </a>
                        <button class="navbar-toggler" type="button" style={{ marginTop: "20px" }} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{ marginBottom: "-20px" }}>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link  nav-active" aria-current="page" href="/home" style={{ fontSize: "25px", fontFamily: "Titillium Web" }}>Home</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link nav-not-active" href="/menu" style={{ fontSize: "25px", fontFamily: "Titillium Web" }}>Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-not-active" href="/franchising" style={{ fontSize: "25px", fontFamily: "Titillium Web", color: "#bf8226" }} >Franchising</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav-not-active" href="/about" style={{ fontSize: "25px", fontFamily: "Titillium Web", color: "#bf8226" }} >About </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >


                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                    </div>


                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src={img1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Chocolate</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the first slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={img2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Americano</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the second slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Espresso</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the third slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={img4} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Americano</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the second slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img5} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Espresso</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the third slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={img6} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Americano</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the second slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img7} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Espresso</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the third slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={img8} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Americano</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the second slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={img9} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Espresso</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the third slide.</h4>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src={img10} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 style={{ color: "black", textAlign:"left", marginLeft:"-10%" }}>Americano</h2>
                                <h4 style={{ color: "#bf8226", textAlign:"left", marginLeft:"-10%" }}>Some representative placeholder content for the second slide.</h4>
                            </div>
                        </div>
                        
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Home