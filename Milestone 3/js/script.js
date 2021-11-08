const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
	   type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// stampare tutte icone dentro al container
const myContainer = document.getElementById('myContainer');

initIconsDOM();

// creare eventi al click di animal, vegetable, user e anche all

const filterSelector = document.querySelector('.form-select');

console.log(filterSelector);

filterSelector.addEventListener('change', (event) => {

   const value = event.target.value;
   console.log(value);

   printSelectedIcon(value);
});

//////FUNZIONI//////// 

/**
 * funzione che appende dentro al container tutti gli oggetti dell'array, in formato HTML
 */
function initIconsDOM() {
   
   icons.forEach(icon => {
      
      myContainer.append(getIcon(icon));

   });
}

/**
 * funzione che estrapola le informazione dall'oggetto e le inserisce dentro un divElement
 * @param {Object} icon 
 * @returns 
 */
function getIcon(icon) {
   
   const {name, prefix, family, color} = icon

   const iconBox = document.createElement('div');
   iconBox.className = 'card_icon';

   iconBox.innerHTML = `
      <i class="${family} ${prefix}${name} ${color}"></i>
      <span class="caption">${name}</span>
   `;

   return iconBox;
}

/**
 * funzione che sovrascrive dentro al container gli elementi filtrati in base al valore scelto
 * @param {String} value 
 */
function printSelectedIcon(value) {
   
   myContainer.innerHTML = '';
   console.log('value',);
   if (value === '2') {
      
      const animal = icons.filter((icon) => {
         if (icon.type == 'animal') {
            // console.log(icon.type);
            return true;
         }
         return false;
      });
      // console.log(animal);
      animal.forEach(icon => {
         myContainer.append(getIcon(icon));
      })

   } else if (value === '3') {
      
      const vegetable = icons.filter((icon) => {
         if (icon.type == 'vegetable') {
            // console.log(icon.type);
            return true;
         }
         return false;
      });
      // console.log(vegetable);
      vegetable.forEach(icon => {
         myContainer.append(getIcon(icon));
      })

   } else if (value === '4') {
      
      const user = icons.filter((icon) => {
         if (icon.type == 'user') {
            // console.log(icon.type);
            return true;
         }
         return false;
      });
      // console.log(user);
      user.forEach(icon => {
         myContainer.append(getIcon(icon));
      });

   } else {
      initIconsDOM();
   }
}