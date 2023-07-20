(function () {
    emailjs.init('ZblN2QAvghlIxrSTO');
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector('.send_email').addEventListener("click", (e) => {
        e.preventDefault();
        console.log(document.querySelector('.contact-form'))
        emailjs.sendForm(
            'service_j9eatkd','template_afnpx34', document.querySelector('.contact-form'))
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            });
    })
    
})();