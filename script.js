let colors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
/*:root {
    --color-character: #a8d530;
    --color-tail: #ff4f51;
    --color-horns: #ff4f51;
}*/
let faceBtn = document.querySelector('#face-btn')
let bodyBtn = document.querySelector('#color-btn')
let hornsBtn = document.querySelector('#horns-btn')
let tailBtn = document.querySelector('#tail-btn')
let faceCount=0, bodyColorCount=0, hornsColorCount=0, tailColorCount=0

let faceImg = document.querySelector('#face')
console.log(faceImg)

function setColorRoot(count,rootColor){
    document.documentElement.style.setProperty(`${rootColor}`, colors[count])
}


bodyBtn.addEventListener('click', ()=>{
    bodyColorCount++
    if (bodyColorCount === colors.length){
        bodyColorCount=0
    }
    setColorRoot(bodyColorCount, '--color-character')
})

hornsBtn.addEventListener('click', ()=>{
    hornsColorCount++
    if (hornsColorCount === colors.length){
        hornsColorCount = 0
    }
    setColorRoot(hornsColorCount, '--color-horns')
})

tailBtn.addEventListener('click', ()=>{
    tailColorCount++
    if (tailColorCount === colors.length){
        tailColorCount = 0
    }
    setColorRoot(tailColorCount, '--color-tail')
})

faceBtn.addEventListener('click', ()=> {
    faceCount++
    if (faceCount === 6){
        faceCount = 0
    }
    faceImg.setAttribute('src' , `images/face-${faceCount}.png`)

})
