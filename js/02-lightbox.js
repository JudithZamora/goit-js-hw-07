import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer =document.querySelector('ul.gallery');
const imagenMarkup = createGalleryItem(galleryItems);

function createGalleryItem(element) {
    return element
    .map(({preview, original, description }) => {
        return`
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
        join('');
    };

    galleryContainer.insertAdjacentHTML('beforeend', imagenMarkup);

    const galleryHandler = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:200});
    galleryHandler.on('show.simplelightbox', function(e){
        alert("¿Quieres visualizar la imagen?")
        let name = prompt('Escribe tu nombre', '');
        let img = e.target.childNodes
        img[1].alt = img[1].alt + ': ' + name;
    })

