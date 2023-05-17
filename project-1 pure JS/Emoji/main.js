const starel = document.querySelectorAll(".fa-star")
const srreg = document.querySelectorAll(".fa-regular")
const colors = ["red","orange","lightblue","lightgreen","green"]
done(4) // for happy
starel.forEach((star,index)=> {
  star.addEventListener("click",()=> {
    done(index)
  })
})
function done(index) {
  starel.forEach((star,i)=> {
    if(i< index + 1) {
      star.classList.add("active")
    } else {
      star.classList.remove("active")
    }
  })
  srreg.forEach((sr)=> {
    sr.style.transform = `translatex(-${index * 50}px)`
    sr.style.color = colors[index]
  })
}


