let fullTxt = document.getElementById("full-txt")
let nextBtn = document.getElementById("next-btn")
let prevBtn = document.getElementById("prev-btn")
let pageCount = document.getElementById("page-counter")

const name = "jean"
let age = "23"
let family = ["sister", "brother", "mom", "dad"]
let home = "bergen"
const homeTown = "oslo"
let yes = undefined

let currentPage = 0
let maxPage = 5

function yesIsTrue() {
yes = true
}
function yesIsFalse() {
 yes = false
}

prevBtn.addEventListener("click", function() {
    if (currentPage > 0) {
        currentPage-- ;
        updateContent();
    }
})
nextBtn.addEventListener("click", function() {
    if (currentPage < maxPage) {
        currentPage++;
        updateContent();
    }
})

function updateContent(){
pageCount.textContent = `current page: ${currentPage}`

if (currentPage === 0) {
    pageZero()
} else if (currentPage === 1) {
pageOne()
} else if (currentPage === 2) {
    pageTwo()
} else if (currentPage === 3) {
    pageThree()
} else if (currentPage === 4) {
    pageFour()
} else if (currentPage === 5) {
    pageFive()
} else {
    alert("error")
}
function pageZero() {
   let fullIntro = `This is a short story which you choose name and so on`
    fullTxt.textContent = fullIntro
}
function pageOne() {
let famList = ""
let fullIntro = ""
    for (let i = 0; i < family.length; i++) {
          famList += "my " + family[i] + ", " 
         
    }   
    fullIntro = `my name is ${name} and i am ${age}. i love everyone in my family. ${famList} we all live in ${home} and come from ${homeTown}. the big question is am i going too move?`
    fullTxt.textContent = fullIntro

}
function pageTwo() {
    
    if (yes === true) {
        let fullIntro = `yes is true`
    fullTxt.textContent = fullIntro
    } else if (yes === false) {
        let fullIntro = `yes is false`
    fullTxt.textContent = fullIntro
    } else {
        pageCount = 1
        currentPage.textContent = "current page: 1"
        pageOne()
    }
}

}