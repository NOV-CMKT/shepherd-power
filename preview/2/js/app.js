// get all fonts
var fonts = {
    'source-sans-3': {
      weight: 400,
    },
    'source-sans-3': {
      weight: 700,
    },
  };
  
  var observers = [];
  
  // load all fonts
  Object.keys(fonts).forEach(function (family) {
    var data = fonts[family];
    var obs = new FontFaceObserver(family, data);
    observers.push(obs.load());
  });
  
  // when all fonts are loaded, add class to body
  Promise.all(observers).then(function () {
    document.body.classList.add("fonts-loaded");
  
    // init all stuffs
    new Textify(
      {
        el: "#shepherd h2, #shepherd p:not(.copy)",
        observer: {
          repeat: false
        },
        animation: {
          by: 'lines',
          delay: 0.2,
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: 'left top',
          animateProps: {
            "y": "20%",
            "opacity": 0
          },
        },
      },
      gsap
    );
    
      
      new Textify(
      {
        el: "#shepherd h1",
        observer: {
          repeat: true,
        },
        animation: {
          by: 'lines',
          delay: 0.4, 
          stagger: 0,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: 'left top',
          animateProps: {
            "y": "10%",
            "opacity": 0
          },
        },
      },
      gsap
    );
    new Textify(
      {
        el: "#shepherd h1 + p",
        observer: {
          repeat: true,
        },
        animation: {
          by: 'lines',
          delay: 0.6,
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: 'left top',
          animateProps: {
            "y": "20%",
            "opacity": 0
          },
        },
      },
      gsap
    );
    new Textify(
      {
        el: "#shepherd .headline + h2",
        observer: {
          repeat: false,
        },
        animation: {
          by: 'lines',
          delay: 1.6,
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: 'left top',
          animateProps: {
            "y": "20%",
            "opacity": 0
          },
        },
      },
      gsap
    );
  });
  
  
  