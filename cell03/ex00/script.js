 
 
 function ex00()
 {  
     let A = (Math.random() * 255)
     let B = Math.floor((Math.random()*255))
     let C = Math.floor((Math.random()*255))
     document.getElementById("1").style.backgroundColor = `rgb(${A},${B},${C})`
 }
 