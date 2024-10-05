
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none'; 
    });
    document.getElementById(pageId).style.display = 'block';
  }
  
 
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    const hobbiesSection = document.getElementById('hobbies');
    const hobbiesOffset = hobbiesSection.offsetTop;
    if (scrollPosition + windowHeight >= hobbiesOffset) {
      hobbiesSection.style.display = 'block';
    }
  
    const factsSection = document.getElementById('facts');
    const factsOffset = factsSection.offsetTop;
    if (scrollPosition + windowHeight >= factsOffset) {
      factsSection.style.display = 'block';
    }

    const footerSection = document.getElementById('footer');
    const footerOffset = footerSection.offsetTop;
    if (scrollPosition + windowHeight >= footerOffset) {
      footerSection.style.display = 'block';
    }
  }