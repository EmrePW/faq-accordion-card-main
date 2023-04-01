const headings = document.querySelectorAll(".question__title");
const answers = document.querySelectorAll(".question__answer");
const toggles = document.querySelectorAll(".btn");


let index_js = 1;

toggles.forEach( (button) => {
    button.addEventListener("click", () =>{
        index_js = button.getAttribute("index");
        if(answers[index_js].classList.contains("active")){
            headings[index_js].classList.remove("bold");
            answers[index_js].classList.remove("active");
            answers[index_js].classList.add("hidden");
            button.style.transform = "rotate(0deg)";
        }
        else{
            headings[index_js].classList.add("bold");
            answers[index_js].classList.remove("hidden");
            answers[index_js].classList.add("active");
            button.style.transform = "rotate(180deg)";
        }
    })
})

