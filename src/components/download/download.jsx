import React from "react";
import { FaGithub, FaDiscord, FaInstagram  } from "react-icons/fa";

import './download.css'

export default function Download() {
    return (
        <div id={"download"}>
            <div className={"install"}>
                <h1>Download</h1>
                <h3>v0.0.1</h3>
                <button className={"btn"}>
                    <i className="fa fa-download"></i>
                    Download
                </button>
                <p>See what's new or download older releases.<br/>
                    You can help Lively reach a wider audience! help translate.</p><br/>
                <h3>System Requirement</h3>
                <p>
                    OS: Windows 10 1903 or above<br/>
                    Processor: Intel i3 or equivalent<br/>
                    Memory: 2048 MB RAM<br/>
                    Graphics: HD Graphics 3000 or above<br/>
                    DirectX: Version 10 or above<br/>
                    Storage: 1GB available space
                </p>

            </div>
            <section>
                <div className={"profile"}>
                    <img src={"https://avatars.githubusercontent.com/u/84951627?v=4"}></img>
                    <h1>Mansour</h1>
                    <p>Javascript | React Developer</p>
                    <h1>Email</h1>
                    <a href="mailto:"><p>Mansouremail@gmail.com</p></a>
                    <h1>Socials</h1>

                    <div className={"icons"}>
                        <a href={"https://github.com/marzban-dev"}><FaGithub fill={'grey'} size={20} /></a>
                        <a href={""}><FaDiscord color={'blue'} size={20} fill={'grey'}/></a>
                        <a href={"https://www.instagram.com/_.mansour_mrz._/"}><FaInstagram fill={'grey'} size={20}/></a>

                    </div>
                </div>
            </section>
        </div>
    )
}