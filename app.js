const lists = document.querySelectorAll(".list")
const arrows = document.querySelectorAll(".arrow")

let counterclick = 0;
arrows.forEach((arrow, i) => {
    
    const number = lists[i].querySelectorAll(".listimg").length;

    console.log(number)


    arrow.addEventListener("click", () => {


        if ((number - 4) <= counterclick ){

            lists[i].style.transform = "translateX(0)";
            counterclick = 0;

            


        } else {
            

            counterclick++;
            lists[i].style.transform = `translateX(${lists[i].computedStyleMap().get("transform")[0].x.value - 320}px)`;
        }

    });

});


const ball =document.querySelector(".toggleball")
const items =document.querySelectorAll(".content,.mc,.side,.toggle,.modes")

ball.addEventListener("click",()=>{
    items.forEach((item)=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});








