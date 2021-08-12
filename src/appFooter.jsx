import React, { useState, useEffect, useRef } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"
import imgInsta from "./img/insta.png"
import imgTube from "./img/youtube.png"

const AppFooter = () => {

    const [mapLat, setMapLat] = useState(-6.200861)
    const [mapLong, setMapLong] = useState(106.768703)
    const [urlMap, setUrlMap] = useState("")
    const [zoomLevel] = useState(16)

    const maptiler = {
        url: "https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=Um9FHpJXarr3ewpLLXha",
        attribution: `<a href=${urlMap} target="_blank" rel="noreferrer">Open in Google Maps</a> |
            &copy; <a href="http://osm.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>
            contributors`,
    };

    const defaultIcon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: icon,
        shadowUrl: iconShadow
    })
    L.Marker.prototype.options.icon = defaultIcon



    return (
        <>

            <div style={{ marginTop: "50px", justifyContent: "center", marginBottom:"20px" }}>

                <footer className="text-center" style={{ marginTop: "3rem" }}>
                    
                    <div class="card-group" style={{ marginTop: "20px", marginBottom:"20px" }}>
                        <div class="card" style={{ backgroundColor: "#f2e5d0", padding: "1rem", border: "#f2e5d0" }}>
                            <MapContainer
                                center={[mapLat, mapLong]}
                                zoom={zoomLevel}
                                scrollWheelZoom={false}
                                style={{ zIndex: 0, position: "initial", height: "200px", width: "100%", margin: "auto" }}
                            >
                                <TileLayer
                                    url={maptiler.url}
                                    attribution={maptiler.attribution}
                                    foo="bar"
                                />
                                <Marker position={[mapLat, mapLong]}>
                                    <Popup>Aromanja Coffe House</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div class="card">
                            <div class="card-body" style={{ backgroundColor: "#f2e5d0" }}>
                                <h5 class="card-title" style={{ marginTop: "10%", marginBottom:"10px" }}>CONTACT US</h5>
                                <p class="card-text" style={{ marginBottom: "-1px" }}>
                                    Via Ponsel : 021 234321412 (7 x 24 Jam)
                                </p>
                                <p class="card-text">
                                    Via email : admin@aromanja.co.id
                                </p>
                                <p class="card-text" style={{ marginTop: "20px", marginBottom: "10%", fontWeight: "bolder" }}>
                                    GET IN TOUCH :
                                    <a href="https://www.youtube.com/">
                                        <img src={imgTube} style={{ width: "100px", marginRight: "15px", marginTop: "5px" }}></img>
                                    </a>
                                    <a href="#">
                                        <img src={imgInsta} style={{ width: "50px", marginRight: "15px", marginTop: "5px" }}></img>
                                    </a>
                                </p>
                            </div>
                        </div>
                    
                    </div>
                    

                    <div className="card" style={{ backgroundColor: "#f5cd9f" }}>
                        <h5>
                            AROMANJA COFFEE HOUSE
                        </h5>
                        <p>
                            Jl. Taman Malaka Selatan, Blok B-10 No. 8B, Jakarta Timur, Telepon 081314181166 <br />
                            Copyright 2021 | Built by
                            <a><span style={{ color: "#471c78", fontFamily: "cursive" }}> Rizqi Agfian </span> </a>
                        </p>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default AppFooter