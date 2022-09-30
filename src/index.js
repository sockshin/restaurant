import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

let contentDiv = document.querySelector("#content")

// CLEAR .ACTIVE CLASS FROM ALL TABS WHEN SWITCHING TABS
const clearActiveTabs = () => {
  let navTabs = document.querySelectorAll(".navTab")
  navTabs.forEach((tab) => {
    tab.classList.remove("active")
  })
}

// CALL IMPORTED FUNCTION TO GENERATE PAGE CONTENT BASED ON ACTIVE TAB
const addActiveTab = () => {
  let navTabs = document.getElementsByClassName("active")
  if (navTabs[0].textContent === "menu") {
    contentDiv.appendChild(menu());
  }
  else if (navTabs[0].textContent === "home") {
    contentDiv.appendChild(home());
   }
  else {
    contentDiv.appendChild(contact());
  }
}


const header = () => {
  
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');        
        let tabs = ["home", "menu", "contact"]

        tabs.forEach((tab) => {
            let newTab = document.createElement('a');
            newTab.classList.add('navTab');
            if (tab === "home"){ newTab.classList.add('active')}
            newTab.textContent = tab 
            headerContainer.appendChild(newTab)
// REMOVE BODY ELEMENT FROM PAGE, CLEAR ACTIVE TAB, CALL NEW BODY/TAB FUNCTION
            newTab.addEventListener("mouseup", () => {
              const contentElement = document.getElementById('body');
              contentElement.remove()
              clearActiveTabs()
              newTab.classList.add('active');
              addActiveTab();
            })
        })

        return headerContainer
      }
    
// INITIAL LOADING PAGE
     contentDiv.appendChild(header());
     contentDiv.appendChild(home());
  



