const jsonfile = "json/companies.json";
fetch(jsonfile)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject[0]);
    let container = document.querySelector("div.listGrid");
    let section = document.createElement('section');
    let Name = document.createElement('h2');
    let Logo = document.createElement('h2');
    let Type = document.createElement('h2');
    let Address = document.createElement('h2');
    let Phone = document.createElement('h2');
    let Link = document.createElement('h2');

    section.setAttribute("id", "tableTitle");
    Logo.setAttribute("id", "logoImage");
    Address.setAttribute("id", "localAddress");
    Name.textContent = "Name";
    Logo.textContent = "Logo";
    Type.textContent = "Type";
    Address.textContent = "Address";
    Phone.textContent = "Phone";
    Link.textContent = "Link";

    section.appendChild(Name);
    section.appendChild(Logo);
    section.appendChild(Type);
    section.appendChild(Address);
    section.appendChild(Phone);
    section.appendChild(Link);
    container.appendChild(section);
    for (let i = 0; i < jsObject.length; i++ ) {

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let type = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
    
        card.setAttribute("class", "card");
        name.setAttribute("class", "businessName");
        type.setAttribute("class", "businessType");
        address.setAttribute("class", "businessAddress");
        phone.setAttribute("class", "businessPhone");
        website.setAttribute("class", "businessSite");

        name.textContent = jsObject[i].Name;
        logo.setAttribute('src', jsObject[i].Logo);
        logo.setAttribute('alt', jsObject[i].name);
        type.textContent = jsObject[i].Type;
        address.textContent = jsObject[i].Address;
        phone.textContent = jsObject[i].Phone;
        website.setAttribute("href", jsObject[i].Website)
        website.textContent = "Website";

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(type);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        container.appendChild(card);
    }
  });


  const list = document.querySelector(".list");
  const grid = document.querySelector(".grid");
  let container =  document.querySelector(".listGrid");

  list.addEventListener("click", () => {
    container.classList.remove("gridCard");
    container.classList.add("listGrid");
    document.getElementById("tableTitle").style.display = "grid";
  });

  grid.addEventListener("click", () => {
    container.classList.remove("listGrid");
    container.classList.add("gridCard");
    document.getElementById("tableTitle").style.display = "none";
  });


  /*function listView(){
    let container =  document.querySelector(".gridCard");
    container.classList.remove("gridCard");
    container.classList.add("listGrid");
    document.getElementById("tableTitle").style.display = "grid";
    container.style.display = "block";
    document.getElementById("tableTitle").style.display = "grid";
    let cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "grid";
    }
  }

  function gridView(){
    let container =  document.querySelector(".listGrid");
    container.classList.remove("listGrid");
    container.classList.add("gridCard");
    document.getElementById("tableTitle").style.display = "none";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    document.getElementById("tableTitle").style.display = "none";
    let cards = document.querySelectorAll(".card");
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "block";
    }
  }*/
    