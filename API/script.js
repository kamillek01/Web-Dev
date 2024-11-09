document.getElementById("getHeroesBtn").addEventListener("click", function() {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => response.json())
      .then(heroes => {
        console.log(`Fetched ${heroes.length} heroes`);
  
        
        const selectedHeroes = heroes.slice(0, 12); 
  
        displayHeroes(selectedHeroes); 
      })
      .catch(error => {
        console.error("Error fetching heroes:", error);
      });
  });
  
  function displayHeroes(heroes) {
    const heroContainer = document.getElementById("heroContainer");
    heroContainer.innerHTML = ""; 
  
    heroes.forEach(hero => {
      const heroCard = document.createElement("div");
      heroCard.classList.add("hero-card");
  
      const heroImage = document.createElement("img");
      heroImage.src = hero.images?.md || "https://via.placeholder.com/300x450?text=No+Image"; 
      heroImage.alt = hero.name;
      heroImage.classList.add("hero-image");
  
      const heroName = document.createElement("h2");
      heroName.innerText = hero.name;
  
      const heroAttributes = document.createElement("div");
  
     
      const attributes = [
        ...Object.entries(hero.powerstats || {}),
        ...Object.entries(hero.appearance || {}),
        ...Object.entries(hero.biography || {}),
        ...Object.entries(hero.work || {}),
        ...Object.entries(hero.connections || {})
      ];
  
     
      while (attributes.length < 10) {
        attributes.push(["Unknown", "N/A"]);
      }
  
    
      attributes.slice(0, 10).forEach(([key, value]) => {
        const attribute = document.createElement("p");
        attribute.innerHTML = `<strong>${key}:</strong> ${value || "N/A"}`;
        heroAttributes.appendChild(attribute);
      });
  
      
      heroCard.appendChild(heroImage);
      heroCard.appendChild(heroName);
      heroCard.appendChild(heroAttributes);
      heroContainer.appendChild(heroCard);
    });
  }
  