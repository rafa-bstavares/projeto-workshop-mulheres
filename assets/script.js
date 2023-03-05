let faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        if(!(item.classList.contains("open"))){
            item.querySelector(".container-resposta").style.maxHeight = "7rem"
            item.querySelector(".container-resposta").style.height = "7rem"
            item.querySelector("img").style.transform = "rotate(90deg)"
            item.classList.add("open")
        }else{
            item.querySelector(".container-resposta").style.maxHeight = "0"
            item.querySelector(".container-resposta").style.height = "0"
            item.querySelector("img").style.transform = "rotate(0deg)"
            item.classList.remove("open")
        }
    })      
})