// JavaScript Document
const knopkaart = document.getElementById("knopkaart");
const knopterug = document.getElementById("knopterug");

// Klikken op de kaart
knopkaart.addEventListener('click', () => {
    document.getElementById("achtergrondkaart").style.visibility = 'visible';
    document.getElementById("kaart").style.visibility = 'visible';
    document.getElementById("pijl2").style.visibility = 'visible';
    document.getElementById("vlag1").style.visibility = 'visible';
    document.getElementById("vlag2").style.visibility = 'visible';
    document.getElementById("vlag3").style.visibility = 'visible';
    document.getElementById("vlag4").style.visibility = 'visible';
    document.getElementById("vlag5").style.visibility = 'visible';
    document.getElementById("vlag6").style.visibility = 'visible';
    document.getElementById("boots").style.visibility = 'visible';
    document.getElementById("rots").style.visibility = 'visible';
    document.getElementById("eekhoorn").style.visibility = 'visible';
    document.getElementById("vulkaan").style.visibility = 'visible';
    document.getElementById("teller").style.visibility = 'visible';
    document.getElementById("h2").style.visibility = 'visible';
    document.getElementById("h1").style.visibility = 'hidden';
});

// Klikken op de pijl terug
knopterug.addEventListener('click', () => {
    document.getElementById("achtergrondkaart").style.visibility = 'hidden';
    document.getElementById("kaart").style.visibility = 'hidden';
    document.getElementById("pijl2").style.visibility = 'hidden';
    document.getElementById("vlag1").style.visibility = 'hidden';
    document.getElementById("vlag2").style.visibility = 'hidden';
    document.getElementById("vlag3").style.visibility = 'hidden';
    document.getElementById("vlag4").style.visibility = 'hidden';
    document.getElementById("vlag5").style.visibility = 'hidden';
    document.getElementById("vlag6").style.visibility = 'hidden';
    document.getElementById("boots").style.visibility = 'hidden';
    document.getElementById("rots").style.visibility = 'hidden';
    document.getElementById("eekhoorn").style.visibility = 'hidden';
    document.getElementById("vulkaan").style.visibility = 'hidden';
    document.getElementById("teller").style.visibility = 'hidden';
    document.getElementById("h2").style.visibility = 'hidden';
    document.getElementById("h1").style.visibility = 'visible';
});


// Cursor met pijl
const image = document.getElementById("cursor");

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Update the image position to follow the cursor
  image.style.left = mouseX - 128 + 'px';
  image.style.top = mouseY - 58 + 'px';
});

//teller
const teller = document.getElementById('teller');


// Pop up 1
const showPopupButton1 = document.getElementById('vlag1');
const popup1 = document.getElementById('popup1');
const closeButton1 = document.getElementById('closeButton1');

showPopupButton1.addEventListener('click', () => {
  popup1.style.display = 'block';
});

closeButton1.addEventListener('click', () => {
  popup1.style.display = 'none';
  teller.innerHTML = "1 - 6";
});

// Pop up 2
const showPopupButton2 = document.getElementById('vlag2');
const popup2 = document.getElementById('popup2');
const closeButton2 = document.getElementById('closeButton2');

showPopupButton2.addEventListener('click', () => {
  popup2.style.display = 'block';
});

closeButton2.addEventListener('click', () => {
  popup2.style.display = 'none';
  teller.innerHTML = "2 - 6";
});

// Pop up 3
const showPopupButton3 = document.getElementById('vlag3');
const popup3 = document.getElementById('popup3');
const closeButton3 = document.getElementById('closeButton3');

showPopupButton3.addEventListener('click', () => {
  popup3.style.display = 'block';
});

closeButton3.addEventListener('click', () => {
  popup3.style.display = 'none';
  teller.innerHTML = "3 - 6";
});

// Pop up 4
const showPopupButton4 = document.getElementById('vlag4');
const popup4 = document.getElementById('popup4');
const closeButton4 = document.getElementById('closeButton4');

showPopupButton4.addEventListener('click', () => {
  popup4.style.display = 'block';
});

closeButton4.addEventListener('click', () => {
  popup4.style.display = 'none';
  teller.innerHTML = "4 - 6";
});

// Pop up 5
const showPopupButton5 = document.getElementById('vlag5');
const popup5 = document.getElementById('popup5');
const closeButton5 = document.getElementById('closeButton5');

showPopupButton5.addEventListener('click', () => {
  popup5.style.display = 'block';
});

closeButton5.addEventListener('click', () => {
  popup5.style.display = 'none';
  teller.innerHTML = "5 - 6";
});

// Pop up 6
const showPopupButton6 = document.getElementById('vlag6');
const popup6 = document.getElementById('popup6');
const closeButton6 = document.getElementById('closeButton6');

showPopupButton6.addEventListener('click', () => {
  popup6.style.display = 'block';
});

closeButton6.addEventListener('click', () => {
  popup6.style.display = 'none';
  teller.innerHTML = "6 - 6";
});

// Boots animatie
const boots = document.getElementById('boots');
const rots = document.getElementById('rots');

rots.addEventListener('click', () => {
    boots.style.animation = 'bootsAnimation 3s ease-in-out forwards';
}
);

// Eekhoorn animatie
const eekhoorn = document.getElementById('eekhoorn');
const vulkaan = document.getElementById('vulkaan');

vulkaan.addEventListener('click', () => {
    eekhoorn.style.animation = 'eekhoornAnimation 3s ease-in-out forwards';
}
);


// Zwieber animatie
const zwieber = document.getElementById('zwieber');
const audio = document.getElementById('geluid');

const bal = document.getElementById('bal');
bal.addEventListener('click', () => {
    zwieber.style.visibility = 'visible';
    zwieber.style.animation = 'zwieber 3s ease-in-out forwards';
    audio.play();
}
);

const banaan = document.getElementById('banaan');
banaan.addEventListener('click', () => {
    zwieber.style.visibility = 'visible';
    zwieber.style.animation = 'zwieber 3s ease-in-out forwards';
    audio.play();
}
);

const schaar = document.getElementById('schaar');
schaar.addEventListener('click', () => {
    zwieber.style.visibility = 'visible';
    zwieber.style.animation = 'zwieber 3s ease-in-out forwards';
    audio.play();
}
);

const zonnebril = document.getElementById('zonnebril');
zonnebril.addEventListener('click', () => {
    zwieber.style.visibility = 'visible';
    zwieber.style.animation = 'zwieber 3s ease-in-out forwards';
    audio.play();
}
);




