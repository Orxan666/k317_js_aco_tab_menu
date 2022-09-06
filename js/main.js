// var a=[10,20,30,40,50];
// var c = a.filter(x=>x>20);
// console.log(c)
// --------------------------
// TAB MENU START

// TAB MENU END
 var btn = document.querySelectorAll(".accordion button")
var p = document.querySelectorAll(".accordion p")
for (let i = 0; i < btn.length; i++) { 
    btn[i].onclick = function () {
        // for (let j = 0; j < p.length; j++) {
        //     p[j].classList.remove("active")

        // }
        this.nextElementSibling.classList.toggle("active")

    }

}
// 

// var btn1 = document.querySelector(".btn1")
// var btn2 = document.querySelector(".btn2")
// var btn3 = document.querySelector(".btn3")
// var p1 = document.querySelector(".p1")
// var p2 = document.querySelector(".p2")
// var p3 = document.querySelector(".p3")
// btn1.onclick = function (  ) {
//     p1.style = "display:block"
//     p2.style = "display:none"
//     p3.style = "display:none"
// }
// btn2.onclick = function () {
//     p1.style = "display:none"
//     p2.style = "display:block"
//     p3.style = "display:none"
// }
// btn3.onclick = function () {
//     p1.style = "display:none"
//     p2.style = "display:none"
//     p3.style = "display:block"
// }
// btn.onclick = function () {
//     p1.style = "display:none"
//     p2.style = "display:none"
//     p3.style = "display:block"
// }

var tabbtn = document.querySelectorAll(".tab button")
var tabp = document.querySelectorAll(".tab p")
for (let i = 0; i < tabbtn.length; i++) {
    tabbtn[i].onclick = function () {   
        for (let j = 0; j < tabp.length; j++) {
            tabp[j].classList.remove("active")
        }    
        var btni = this.getAttribute("data-btn")
        tabp[btni].classList.add("active")
    }
}