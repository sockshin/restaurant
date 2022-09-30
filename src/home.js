import TriscuitPic from './triscuit.jpg';

const home = () => {

  
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');     
    homeContainer.id = "body"    
    let aboutContainer = document.createElement('div');
    aboutContainer.classList.add('container')
    homeContainer.appendChild(aboutContainer)
    let about = document.createElement('div');
    about.classList.add('content');
    about.textContent = "We are a great team of people who like (like REALLY like) Triscuits, we are here to enhance their potential of the lovely triscuit with fun toppings." 
    aboutContainer.appendChild(about)

    const myIcon = new Image(); 
    myIcon.classList.add("container")
    myIcon.src = TriscuitPic; 
    aboutContainer.appendChild(myIcon);


    let hoursContainer = document.createElement('div');
    hoursContainer.classList.add('container');
    homeContainer.appendChild(hoursContainer)
    let hoursHeader = document.createElement('h3')
    hoursHeader.textContent = "Hours"
    hoursContainer.appendChild(hoursHeader)
    let hours = document.createElement('ul');
    hoursContainer.appendChild(hours)

// create days/hours elements and put them on page
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    days.forEach((day) => {
        let dayElement = document.createElement('li');
        dayElement.classList.add('content');
        dayElement.textContent = `${day} - ` + (day[0] === 'S' ? '10:00am-5:00pm' : '11:00am-2:00pm') //if weekend, diff hours
        hours.appendChild(dayElement)
    })

    let locationContainer = document.createElement('div');
    locationContainer.classList.add('container');
    homeContainer.appendChild(locationContainer);
    let locationHeader = document.createElement('h3');
    locationHeader.textContent = "Location";
    locationContainer.appendChild(locationHeader)
    let location = document.createElement('div');
    location.classList.add('content')
    location.textContent = "1234 Electric Cracker Drive, Triscuit Wi, 53713"
    locationContainer.appendChild(location)

    return homeContainer;

}

export default home;