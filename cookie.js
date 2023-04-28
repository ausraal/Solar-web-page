document.addEventListener("DOMContentLoaded", () => {
    const cookieBox = document.querySelector('.cookieBox');
    const acceptBtns = document.querySelectorAll('.button');

    const executeCodes = () => {
        //if cookie contains ALDOSTATYBA it will be returned and below code won't execute
        if (document.cookie.includes("ALDOSTATYBA")) {
            cookieBox.classList.add("hide");
            cookieBox.classList.remove("show");
            return;   
        };
        cookieBox.classList.add("show");
    };
    
    executeCodes();
    acceptBtns.forEach(acceptButton => {
            acceptButton.addEventListener("click", () => {
                 //if button has id 'acceptBtn'
                if(acceptButton.id == 'acceptBtn') {
                    document.cookie = "cookieBy= ALDOSTATYBA; max-age=" + 60 * 60 * 24 * 30;
                }
                    
                cookieBox.classList.add('hide');
                cookieBox.classList.remove('show');
            });
                  
    });
            
});
       
    
             


