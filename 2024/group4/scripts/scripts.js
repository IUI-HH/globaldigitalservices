function addListener() {
    document.getElementById('icon').addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
        toggleMenu()
        }
        
    })
}


function showMore() {
    if (document.getElementById("showMore").innerHTML == "Show Less") {
        document.getElementById("showMore").innerHTML = "Show More"
        document.getElementById("referenceList").style.display = "none"
    }
    else {
        document.getElementById("showMore").innerHTML = "Show Less"
        document.getElementById("referenceList").style.display = "block"

    }
}
function toggleMenu() {

   var x = document.getElementsByClassName("links")
   var icon = document.getElementById("icon")
        document.getElementById("mobile-links").classList.toggle('showing')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-x')
    
}




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } 
    })
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))