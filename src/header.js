//import TriscuitPic from './triscuit.jpg';
import './style.css';
const header = () => {  
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header'); 
// Add the image to our existing div.
        
        let tabs = ["hoasdfasdfme", "menu", "contact"]

        tabs.forEach((tab) => {

            let newTab = document.createElement('a');
            newTab.classList.add('navTab');
            newTab.textContent = tab 
            headerContainer.appendChild(newTab)
            newTab.addEventListener("mouseup", () => {
                console.log(newTab.textContent)
                const element = document.getElementById('home');
                element.remove()
            })
        })
      
//  const myIcon = new Image(); 
//  myIcon.src = TriscuitPic; 
//  headerContainer.appendChild(myIcon); 
         return headerContainer;
        



}

export default header;