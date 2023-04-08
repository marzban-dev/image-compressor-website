import React from "react";
import './about.css'

export default function About() {
    return (
        <div className={'about'}>
            <div className={"titles"}>
                <h2>What is it?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque consequatur distinctio ea
                    esse
                    ipsam, iste maiores optio pariatur quia quisquam sed similique, soluta vel veritatis voluptas
                    voluptates
                    voluptatibus?</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jWhsuJ53kK0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>


        </div>
    )
}