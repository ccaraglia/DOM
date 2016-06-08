
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var box2Node=document.querySelector("#compoundInvestment")
  var value=box2Node.textContent
  box2Node.textContent=parseInt(value)*2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleNode=document.querySelector("#circle-bw")

    console.log(circleNode.style.background)
    if ( (circleNode.style.background === "rgb(255, 255, 255)") || (circleNode.style.background === "")){
        circleNode.style.background="rgb(0, 0, 0)"
    } else {
        circleNode.style.background="rgb(255, 255, 255)"
    }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blowCircle=document.querySelector(".circle-red")
  var computedStyle=window.getComputedStyle(blowCircle)
  console.log(computedStyle.width)
  var array=["40px", "80px", "160px", "320px"]
  if (computedStyle.width==="40px"){
        blowCircle.style.width=array[1]
        blowCircle.style.height=array[1]
    } else if (computedStyle.width==="80px"){
        blowCircle.style.width=array[2]
        blowCircle.style.height=array[2]
    } else if (computedStyle.width==="160px"){
        blowCircle.style.width=array[3]
        blowCircle.style.height=array[3]
    } else if (computedStyle.width==="320px"){
        blowCircle.style.width=array[0]
        blowCircle.style.height=array[0]
    }



})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
    var ulNode = document.querySelector("#userList")
    var liNodeList = ulNode.querySelectorAll(".inactive")


    //clearChildren(ulNode,".inactive")
    var clearInactive = function(container,liNodes) {
        for (var i = 0; i < liNodes.length; i ++) {
            var liNode = liNodes[i]
                if (liNode.classList.contains('inactive')) {
                    container.removeChild(liNode)
                }
        }
    }

clearInactive(ulNode, liNodeList)
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
    var squaresNode=document.querySelector("#reverse-squares .answer-box" )

    var allSquares=document.querySelectorAll("span")
    console.log(allSquares)
    var newArray=[]

    for(var i=allSquares.length-1;i>=0; i--){
        console.log(allSquares[i])
        squaresNode.appendChild(allSquares[i])

    }

    console.log(newArray)

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var tasks=document.querySelectorAll("#tasks li")

  function reverseString(str) {
        return str.split("").reverse().join("")
}

  for (var i=0; i<tasks.length; i++){
    tasks[i].textContent=reverseString(tasks[i].textContent)
    console.log(tasks[i].textContent)
  }
  console.log(tasks.length)
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var img=document.querySelector("#city-img")

  console.log([img.src])
  var array = img.src.split("/")

  var val = parseInt(array[array.length-1])
  val=val%10+1
  console.log(val)
  array[array.length-1]=val
  img.src=array.join("/")

})