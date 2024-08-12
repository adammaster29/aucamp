
const btnWhatsapp = () => {
    const nuevobtnWhatsapp = document.querySelector('#nombreAsociacion');
    let whatsapp = document.createElement('i');
    whatsapp.classList.add('whatsapp', 'bx', 'bxl-whatsapp', 'bx-flashing', 'bx-rotate-270');
    whatsapp.id = 'whatsappId';
    nuevobtnWhatsapp.append(whatsapp);
    
    // Añadir el EventListener después de crear el elemento
    whatsapp.addEventListener('click', () => {
        return  window.open('https://app.netlify.com/teams/adammaster29/sites', '_blank');
        //  window.location.href = 'https://app.netlify.com/teams/adammaster29/sites' 
    });
};
btnWhatsapp()





// **************************practice*************************************

// metodo map()

// const arr = ['a','e','i','o','u'];


// function cambioArr(){

//     let result = arr.map(nuevo => nuevo.toUpperCase())
//     return result;
// }

// console.log(arr);
// console.log(cambioArr());


// metodo filter()

// const arr = ['a','e','i','o','u'];

// function filtrado(){

//     let result = arr.filter(nuevo => nuevo !== 'a')
//     return result;
// }
// console.log(filtrado())
