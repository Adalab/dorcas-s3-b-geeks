//userSelections para recoger en un array las selecciones del usuario
let userSelections = [];

//arrayOptions para crear las option del select
let arrayOptions = {};

fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
  .then(response =>{
    return response.json();
  })
  .then(json=> {
    arrayOptions = json.skills;
    //Llamada a la función que crea el contenido la primera vez
    addContentToHtml(0);
  });

//función para crear y añadir contenido al html
const addContentToHtml = index => {
  console.log(`newIndex${index}`);

  //Apuntar al padre de Select, el div
  const parentDivSelect = document.querySelector('.js__select-container');

  //Declaraciones de constiables de select y su contenido
  const newParentSelect = document.createElement('div');
  const newSelect = document.createElement('select');

  //Declaraciones constiables boton más div que lo contiene
  const newSelectButton = document.createElement('div');
  const newSelectButtonContent = document.createElement('i');

  //Insercion contenido en option, e insercion de option como contenido de select. Insercion de select dentro del div que es su padre
  newParentSelect.appendChild(newSelect);
  parentDivSelect.appendChild(newParentSelect);
  newParentSelect.className = `item__select-container position-${index}`;
  newSelect.className = `item__select position-${index}`;
  // newSelect.classList.add('item__select');
  newSelect.setAttribute('name', 'skills');

  //Insercion clase font-awesome en <i>, insercion <i> en <div>
  newSelectButtonContent.classList.add('fas', 'fa-plus', 'js__add');
  newSelectButtonContent.setAttribute('data-value', index);
  newSelectButton.appendChild(newSelectButtonContent);
  newSelectButton.classList.add('item__select-button');
  newParentSelect.appendChild(newSelectButton);

  //Añadir options
  for (const arrayOption of arrayOptions) {
    const newOption = document.createElement('option');
    newOption.setAttribute('number', arrayOption);
    newOption.setAttribute('value', arrayOption);
    const optionContent = document.createTextNode(arrayOption);
    newOption.appendChild(optionContent);
    newSelect.appendChild(newOption);
    newOption.classList.add('js__option');
  }

  changeButton();
};


//función para cambiar el signo del botón dependiendo de las seleciones del usuario
const changeButton = () => {
  const button = document.querySelectorAll('.js__add');
  for (let i = 0; i < button.length; i++) {
    if (userSelections.length === i) {
      button[i].classList.add('fa-plus');
      button[i].removeEventListener('click', removeSelect);
      button[i].addEventListener('click', addSelect);
    } else {
      button[i].classList.remove('fa-plus');
      button[i].classList.add('fa-minus');
      button[i].removeEventListener('click', addSelect);
      button[i].addEventListener('click', removeSelect);
    }
  }

};

//Función para añadir el contenido (hasta que las selecciones del usuario sean 3) y cambiar el signo del último botón
const addSelect = () => {
  console.log('estoy poniendo');
  userSelections = document.querySelectorAll('.item__select-container');

  let newIndex = 0;
  for (let i = 0; i < 3; i++) {
    let createdElements = document.querySelectorAll(`.position-${i}`);
    //console.log('createdElements.position' + i + "=" + createdElements.length);
    if (createdElements.length === 0) {
      newIndex = i;
    }
  }

  if (userSelections.length < 3) {
    addContentToHtml(newIndex);
  } else if (userSelections.length === 3) {
    changeButton();
  }
  addContentToCard();
};


//Función para quitar el contenido (de momento sólo quita el primer campo no el correspondiente al botón que se pincha)
const removeSelect = event => {
  console.log('estoy quitando');

  const clickedElement = event.currentTarget;
  const elementNumber = clickedElement.getAttribute('data-value');
  const plusButton = document.querySelectorAll('.fa-plus');
  const createdElements = document.querySelectorAll(`.position-${elementNumber}`);

  for (const createdElement of createdElements) {
    createdElement.remove();
  }

  userSelections = document.querySelectorAll('.item__select-container');

  if (plusButton.length === 0) {
    addContentToHtml(elementNumber);
  }
  //addContentToCard();
};

//constiables para crear la lista de habilidades en la preview de la tarjeta y darle clases
const skills = document.querySelector('.skills');
const skillsList = document.createElement('ul');

skills.appendChild(skillsList);
skillsList.classList.add('skills__list', 'text__skills');

//Función para crear el contenido de las habilidades en la preview de la trajeta.
const addContentToCard = () => {
  const selects = document.getElementsByTagName('select');
  const newSkillsItem = document.querySelectorAll('.skills__item');

  for (const newSkillItem of newSkillsItem) {
    skillsList.removeChild(newSkillItem);
  }


  for (let i = 0; i < userSelections.length; i++) {
    const userSelectionPosition = userSelections[i].classList[1];
    const optionContent = selects[i].value;
    const skillsItem = document.createElement('li');
    const skillsContent = document.createTextNode(optionContent);
    skillsItem.appendChild(skillsContent);
    skillsItem.classList.add(userSelectionPosition);
    skillsList.appendChild(skillsItem);
    skillsItem.classList.add('skills__item');
  }
};
