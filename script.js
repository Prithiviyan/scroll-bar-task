var scroll_event = document.getElementById("scroll_events")
var changeImage = document.querySelector(".image")
var setImage = document.querySelector(".setImage")




scroll_event.addEventListener("scroll",()=>{

    console.log(scroll_event.scrollTop)

    let contentTop=scroll_event.scrollTop;

    if(contentTop<456){
        setImage.src ="/foodie-links.webp";
        changeImage.classList.remove('cl1');
        
        }else if (contentTop>=457 || contentTop < 957
            ) {
                setImage.src ="/foodie-shop.webp";
                changeImage.classList.add('cl1');
                changeImage.classList.remove('cl2');
                } else if(contentTop>958) {
                    setImage.src="/foodie-brand.webp";
                    changeImage.classList.add('cl2');

    }
})