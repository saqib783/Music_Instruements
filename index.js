let sexophone = document.getElementById('sexophoneImg')
let cellio = document.getElementById('cellioImg')
let clarinet = document.getElementById('clarinetImg')
let drums = document.getElementById('drumsImg')
let flute = document.getElementById('fluteImg')
let guitar = document.getElementById('guitarImg')
let piano = document.getElementById('pianoImg')
let tabla = document.getElementById('tablaImg')
let trumpet = document.getElementById('trumpetImg')
let violin = document.getElementById('violinImg')

let sexophoneAudio = document.getElementById('sexophoneAudio')
let cellioAudio = document.getElementById('cellioAudio')
let clarinetAudio = document.getElementById('clarinetAudio')
let drumAudio = document.getElementById('drumAudio')
let fluteAudio = document.getElementById('fluteAudio')
let guitarAudio = document.getElementById('guitarAudio')
let pianoAudio = document.getElementById('pianoAudio')
let tablaAudio = document.getElementById('tablaAudio')
let trumpetAudio = document.getElementById('trumpetAudio')
let violinAudio = document.getElementById('violinAudio')




sexophone.addEventListener('mouseenter', function(e){
  if(e.target.sexophoneAudio==="1")
  sexophoneAudio.play(1)
})
sexophone.addEventListener('mouseleave', function(e){
  sexophoneAudio.pause()
})


cellio.addEventListener('mouseenter',function(e){
  cellioAudio.play()
})
cellio.addEventListener('mouseleave',function(e){
  cellioAudio.pause()
})

clarinet.addEventListener('mouseenter',function (e){
  clarinetAudio.play()
})
clarinet.addEventListener('mouseleave',function (e){
  clarinetAudio.pause()
})

drums.addEventListener('mouseenter',function(e){
  drumAudio.play()
})
drums.addEventListener('mouseleave',function(e){
  drumAudio.pause()
})

flute.addEventListener('mouseenter',function(e){
 fluteAudio.play()
})
flute.addEventListener('mouseleave',function(e){
  fluteAudio.pause()
})

guitar.addEventListener('mouseenter',function(e){
  guitarAudio.play()
})
guitar.addEventListener('mouseleave',function(e){
  guitarAudio.pause()
})

piano.addEventListener('mouseenter',function(e){
  pianoAudio.play()
})
piano.addEventListener('mouseleave',function(e){
  pianoAudio.pause()
})
tabla.addEventListener('mouseenter',function(e){
  tablaAudio.play()
})
tabla.addEventListener('mouseleave',function(e){
  tablaAudio.pause()
})
trumpet.addEventListener('mouseenter',function(e){
  trumpetAudio.play()
})
trumpet.addEventListener('mouseleave',function(e){
  trumpetAudio.pause()
})
violin.addEventListener('mouseenter',function(e){
  violinAudio.play()
})
violin.addEventListener('mouseleave',function(e){
  violinAudio.pause()
})
let isPlaying = false

sexophone.addEventListener('keydown',function(e){
  if(e.key==="1"){
  if (!isPlaying){
    sexophoneAudio.play();
    sexophoneAudio.currentTime=0
    isPlaying = true;
  }
  else{
    sexophoneAudio.pause()
    isPlaying = pause;
    
  }
  }
})
let cellioisPlaying = false
cellio.addEventListener('keydown',function(e){
  if(e.key==="2"){
    if(!cellioisPlaying){
      cellioisPlaying = true
      cellioAudio.play()
      cellioAudio.currentTime = 0
    }
    else{
      cellioisPlaying = false
      cellioAudio.pause()
      cellioAudio.currentTime = 0
    }
  }
})

clarinetisPlaying = false


clarinet.addEventListener('keydown',function(e){
  if(e.key ==="3"){
    if(!clarinetisPlaying){
       clarinetAudio.play();
       clarinetAudio.currentTime = 0;
       clarinetisPlaying = true
    }
    else{
      cellioisPlaying = false
      clarinetAudio.currentTime= 0 
      clarinetAudio.pause()

    }
  }
})


drumsisPlaying = false


drums.addEventListener('keydown',function(e){
  if(e.key ==="4"){
    if(!drumsisPlaying){
         drumAudio.currentTime = 0;
       drumAudio.play();
       drumsisPlaying = true
    }
    else{
        drumAudio.currentTime= 0 
      drumsisPlaying = false
    
      drumAudio.pause()

    }
  }
})

fluteisPlaying = false

flute.addEventListener('keydown',function(e){
  if(e.key ==="5"){
    if(!fluteisPlaying){
      fluteisPlaying = true
      fluteAudio.play()
      fluteAudio.currentTime=0
    }
    else{
      fluteisPlaying = false
      fluteAudio.pause()
      fluteAudio.currentTime=0
    }
  }
})

let guitarisPlaying = false

guitar.addEventListener('keydown',function(e){
  if(e.key ==="6"){
    if(!guitarisPlaying){
      guitarisPlaying = true
      guitarAudio.play()
      guitarAudio.currentTime=0
    }
    else{
      guitarisplaying = false
      guitarAudio.pause()
      guitarAudio.currentTime=0
    }
  }
})

 let pianoisPlaying =  false

 piano.addEventListener('keydown',function(e){
  if(e.key==="7"){
    if(!pianoisPlaying){
      pianoisPlaying = true
      pianoAudio.play()
      pianoAudio.currentTime = 0
    }
    else{
      pianoisPlaying = false
      pianoAudio.pause()
      pianoAudio.currentTime = 0
    }
  }
 })


 tablaisPlaying = false;

 tabla.addEventListener('keydown',function(e){
  if(e.key ==="8"){
    if(!tablaisPlaying){
      tablaisPlaying = true;
      tablaAudio.play();
      tablaAudio.currentTime = 0;
    }
    else{
      tablaisPlaying = false
      tablaAudio.pause()
      tablaAudio.currentTime = 0
    }
  }
 })

 trumpetisPlaying = false

 trumpet.addEventListener('keydown',function(e){
   if(e.key ==="9"){
    if(!trumpetisPlaying){
      trumpetisPlaying = true
      trumpetAudio.play()
      trumpetAudio.currentTime = 0
    }
    else{
      trumpetisPlaying = false
      trumpetAudio.pause()
      trumpetAudio.currentTime = 0
    }
   }
 })
 violinisPlaying = false;

 violin.addEventListener('keydown',function(e){
 if(e.key === "v"){
  if(!violinisPlaying){
    violinAudio.play();
    violinAudio.currentTime = 0
    violinisPlaying = true
  }
  else{
    violinisPlaying = false
    violinAudio.pause()
    violinAudio.currentTime = 0
  }
 }
 })