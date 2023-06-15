const cards = document.querySelectorAll('.cardre')
cards.forEach(cardre => cardre.addEventListener('click', showInformations))

function showInformations() {
  this.removeEventListener('click', showInformations)
  this.addEventListener('click', hideInformations)
  
  this.querySelector('.cardre-content-wrapper').style.display = 'block'
  this.querySelector('.cardre-content-wrapper').style.opacity = 0
  
  this.querySelector('.cardre-content').style.animationName = 'show'
  
  setTimeout(() => {
    this.querySelector('.cardre-content h2').style.display = 'block'
    this.querySelectorAll('.cardre-content p').forEach(paragraph => paragraph.style.display = 'block')
    
    this.querySelector('.cardre-content-wrapper').style.opacity = 1
  }, 1000)
}

function hideInformations() {
  this.addEventListener('click', showInformations)
  
  this.querySelector('.cardre-content-wrapper').style.display = 'none'
  this.querySelector('.cardre-content-wrapper').style.opacity = 0

  this.querySelector('.cardre-content h2').style.display = 'none'
  
  this.querySelectorAll('.cardre-content p').forEach(paragraph => paragraph.style.display = 'none')
  
  this.querySelector('.cardre-content').style.animationName = 'hide'   
}