import Particles from "react-tsparticles";

const  ParticlesProject  =  ( )  =>  { 
  const  particulesInit  =  ( main )  =>  { 
    console.log ( main) ;

    // vous pouvez initialiser l'instance tsParticles (main) ici, en ajoutant des formes personnalisées ou des préréglages 
  } ;

  const  particulesLoaded  =  ( conteneur )  =>  { 
    console.log ( conteneur ) ; 
  } ; 
  return  ( 
    < Particles 
      id = "tsparticles" 
      init = { particulesInit } 
      chargé = { particulesLoaded } 
      options={{
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
              size: 40,
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
            color: "",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
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
            value: 45,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    / > 
  ) ; 
} ;