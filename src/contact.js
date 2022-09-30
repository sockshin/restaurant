const contact = () => {

  
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('home');     
    contactContainer.id = "body"

    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container')
    contactContainer.appendChild(aboutContainer)
    let about = document.createElement('div');
    about.classList.add('content');
    about.textContent = "PLEASE DO NOT CONTACT US, WE SELL FANCY TRISCUITS." 
    aboutContainer.appendChild(about)

     return contactContainer;
    



}

export default contact;