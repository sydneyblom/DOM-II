// Your code goes here
const navTextColor = document.querySelectorAll('.nav-link').forEach(item => {
      item.addEventListener('click', event => {
        item.style.color = 'midnightblue';
        item.style.transition = 'all 0.5s';
      })
    })

    const logoScale = document.querySelector('.logo-heading');
logoScale.addEventListener('mouseover', () => {
    logoScale.style.transform = "scale(1.1)";
    logoScale.style.transition = 'all 0.5s';
    event.stopPropagation();
});


const bodyLtBlue = document.querySelector('body');
bodyLtBlue.addEventListener('mouseenter', e => {
    bodyLtBlue.style.backgroundColor ='lightsteelblue';
});


const headerColor = document.querySelector('.main-navigation');
headerColor.addEventListener('mouseleave', e => {
    headerColor.style.backgroundColor ='cornflowerblue';
    event.stopPropagation();
});



const destHeader = document.querySelectorAll('.destination h4').forEach(item => {
    item.addEventListener('mouseout', event => {
        item.style.fontSize = "220%";
    })
  })

  
  const buttonChange = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('dblclick', event => {
        item.style.fontSize = "200%";
    })
  });

  const textMain = document.querySelectorAll('.text-content').forEach(item => {
    item.addEventListener('mousemove', event => {
        item.style.color= "white";
    })
  })

  const contDest = document.querySelector('.content-destination');
  contDest.addEventListener('mousedown', e => {
    contDest.style.transform = "scale(1.2)";
    event.stopPropagation();
  });


  const newDesc = document.querySelector('.intro h2');
  newDesc.addEventListener('wheel', e => {
    newDesc.textContent = "Join the fun!"
  });


  const introImage = document.querySelector('.intro img');
  introImage.addEventListener('mouseup', e => {
    introImage.style.transform = "scale(.81)";
  });

