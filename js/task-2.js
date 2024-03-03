const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const list = document.querySelector(".gallery");
list.style.display = 'flex'
list.style.flexWrap = 'wrap'
list.style.justifyContent= 'center' 
list.style.gap = '10px'

  


list.innerHTML = createMarkup(images) 
function createMarkup(arr) {
  return arr.map(({ url, alt }) => `<li class="photo"> <img src="${url}" alt="${alt}" class="photos" >  </li>`).join("")
 
}




const photos = document.querySelectorAll(".photos");
photos.forEach(photo => {
  photo.parentElement.style.flex = '1 0 calc(33.33% - 20px)';
  photo.parentElement.style.maxWidth = 'calc(33.33% - 20px)';
  photo.parentElement.style.marginBottom = '20px';

  photo.style.maxWidth = '500px';
  photo.style.height = '400px';
  photo.style.objectFit = 'cover';
});
list.style.listStyleType = 'none';


