const headings = document.querySelectorAll(".question__title");
const answers = document.querySelectorAll(".question__answer");
const toggles = document.querySelectorAll(".btn");


let index_js = 1;

toggles.forEach( (button) => {
    button.addEventListener("click", () =>{
        index_js = button.getAttribute("index");
        if(answers[index_js].classList.contains("question__answer-active")){
            headings[index_js].classList.remove("bold");
            answers[index_js].classList.remove("question__answer-active");
            answers[index_js].classList.add("hidden");
            toggles[index_js].classList.remove("btn-active"); //for button
        }
        else{
            headings[index_js].classList.add("bold");
            answers[index_js].classList.remove("hidden");
            answers[index_js].classList.add("question__answer-active");
            toggles[index_js].classList.add("btn-active"); //for button
        }
    })
})

