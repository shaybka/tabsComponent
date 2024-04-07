let tab = document.querySelectorAll('.tab');
let contentContainer = document.querySelectorAll('.content-container');


tab.forEach((tab) => {

    // console.log(tab)
    tab.addEventListener("click", (e) => {
        TakeOutActive();
        e.target.classList.toggle('active');
        let currentInfo = document.querySelector('#' + e.target.getAttribute('target'));  
        if (currentInfo) {
            currentInfo.classList.add('container-active');
        } else {
            console.error('No element found for target:', e.target.getAttribute('target'));
        }
    
    }); // This closes the event listener function
}); // This closes the forEach loop


function TakeOutActive(){

    tab.forEach((tab) => {
        tab.classList.remove('active');
    });
    

    contentContainer.forEach(Info => {
        Info.classList.remove('container-active');
     })


}