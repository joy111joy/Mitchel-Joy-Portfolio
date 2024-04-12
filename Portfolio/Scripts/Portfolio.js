window.onload = function() {
    const ResponsePhonePics = ["PortfolioPics/NewPhone2.png", "PortfolioPics/NewPhone.png"];

    const Phone = document.getElementById("Phone");
    const button1 = document.getElementById("BTN1");
    
    let isRotated = false;
    
    button1.onclick = function() {
        if (!isRotated) {
            Phone.style.transform = "rotateZ(90deg)";
    
            isRotated = true;
        } else {
            Phone.style.transform = "rotateZ(0deg)";
            isRotated = false;
        }
    }
    
    Phone.addEventListener('transitionend', function() {
        if (isRotated) {
            Phone.src = ResponsePhonePics[1];
        } else {
            Phone.src = ResponsePhonePics[0];
        }
    });



    function checkVisibility() {
        const sections = document.querySelectorAll('section');
        const windowBottom = window.pageYOffset + window.innerHeight;
    
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
    
            if (windowBottom > sectionTop && window.pageYOffset < sectionBottom) {
                section.classList.add('fadeIn');
            } else {
                section.classList.remove('fadeIn');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    window.addEventListener('load', checkVisibility);




    document.getElementsByClassName('TopBTN').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}








