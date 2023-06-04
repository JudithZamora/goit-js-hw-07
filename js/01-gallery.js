import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const containerGallery =document.querySelector(".gallery");

const galleryMarkup= galleryItems
.map(
    (element) => 
`<li class "galery-item">
<a class "gallery__link" href="${element.original}">
<img
class="gallery__image"
src= "${element.preview}"
alt= "${element.descrption}"
/>
</a>
</li>`
)
.join("");

containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay:200,
});


console.log(galleryItems);