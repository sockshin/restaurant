const menu = () => {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');     
    menuContainer.id = "body";

    //******MENU ITEM OBJECT MAKER*********
    const menuFactory = (item, description, cost) => {
        return {item, description, cost}
    }

    //******APPETIZERS********
    let peanutButter = menuFactory("Peanut Butter", "Three Triscuits covered in gooey Peanut Butter", "$2")
    let pbj = menuFactory("PB&J", "Three Triscuits covered in gooey Peanut Butter and fresh homemade jelly", "$2.50")
    let creamCheese = menuFactory("Cream Cheese", "Two Triscuit sandwiches stuffed full of smooth cream cheese", "$4")
    let tomatoBasil = menuFactory("Tomato Basil", "Three Triscuits each stacked with fresh mozarella, tomato, basil and a drizzle of balsamic vinegar", "$4")
    let cheddar = menuFactory("Grilled Cheese", "Two Triscuit sandwiches stuffed full of melted Cheddar cheese", "$4")
    let appChoices = [peanutButter, pbj, creamCheese, tomatoBasil, cheddar]


    //******MAIN COURSES********
    let falefel = menuFactory("Falefel", "Six pieces of Falefel served on top of Triscuits lathered with spicy honey hummus", "$7")
    let jerk = menuFactory("Jerk Chicken", "Tender pieces of grilled Jerk chicken served on top of coconut Triscuits and tangy cucumber", "$7.50")
    let meatballs = menuFactory("Meatballs", "Six 'garlic bread' Triscuit meatball sammies dripping with homemade marinara sauce", "$6.50")
    let carne = menuFactory("Carne Asada", "Grilled steak with Mexican spices, pineapple lime relish, ciliantro and onion on Triscuits", "8.50")
    let buffalo = menuFactory("Buffalo Chicken", "Tender pieces of Triscuit breaded chicken covered in spicy Buffalo sauce served with celery sticks and Ranch Dressing", "$7.50")
    let bbq = menuFactory("Pulled Pork", "Slow applewood smoked pulled pork, pickled red onion, BBQ sauce served on Triscuits", "$7.50")
    let entreeChoices = [falefel, jerk, meatballs, carne, buffalo, bbq]

    //******DESSERTS********
    let chocolateDipped = menuFactory("Chocolate Covered Strawberry", "Three Triscuits dipped in decadent chocolate, topped with fresh sliced strawberries", "$3")
    let whiteRasp = menuFactory("White Chocolate Raspberry", "Three Triscuits dipped in white chocolate, topped with fresh raspberries", "$3")
    let puppyChow = menuFactory("Puppy Chow", "Three Triscuits covered in peanut butter, chocolate and powdered sugar", "$2.50")
    let baklava = menuFactory("Baklava", "Three Triscuits soaked in cinnimon honey syrup coated in crushed pistachios", "$3.50")
    let carmelApple = menuFactory("Carmel Apple", "Three Triscuits dipped in fresh carmel with honeycrisp apple slices", "$2")
    let dessertChoices = [chocolateDipped, whiteRasp, puppyChow, baklava, carmelApple]



    const menuMaker = (menuSectionItems, title) => {

        let newContainer = document.createElement('div');

        newContainer.classList.add('container')
        menuContainer.appendChild(newContainer)
        let containerHeader = document.createElement('h3');
        containerHeader.textContent = title;
        newContainer.appendChild(containerHeader)

        let ulEl = document.createElement('ul');
        newContainer.appendChild(ulEl)
        menuSectionItems.forEach((item) => {
            let itemEl = document.createElement('li');
            itemEl.classList.add('content');
            let itemName = document.createElement('h4')
            itemEl.appendChild(itemName)
            itemName.textContent = `${item.item}`
            let ItemDescription = document.createElement('p')
            ItemDescription.textContent = `${item.description}`
            let Cost = document.createElement('p')
            Cost.textContent = `${item.cost}`
            itemEl.appendChild(ItemDescription) 
            itemEl.appendChild(Cost)
            ulEl.appendChild(itemEl) //add the li to the ul
        })
    }

    menuMaker(appChoices, "Appetizers")
    menuMaker(entreeChoices, "Entrees")
    menuMaker(dessertChoices, "Desserts")
    return menuContainer;


}

export default menu;