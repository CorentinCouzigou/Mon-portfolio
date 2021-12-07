import React from 'react';
import Particles from "react-tsparticles";

function ParticlesComponent() {
    let numberParticles = 28;
    let sizeParticles = 40;
    // if (screen.width < 600) {
    //     numberParticles = 12;
    // }
    return (
        <>
            <Particles
                id="tsparticles"
                canvasClassName="canvasParticles"
                className="tsparticles"
                options={{
                    fullScreen: {
                        enable: false,
                    },
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: `${sizeParticles}`,
                            },

                            repulse: {
                                distance: 50,
                                duration: 2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ff0000",
                        },
                        links: {
                            color: "#ff0000",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 2,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            value: `${numberParticles}`,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 20,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    )
}

export default ParticlesComponent;
