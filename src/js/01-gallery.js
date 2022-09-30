// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('div.gallery');
galleryContainer.insertAdjacentHTML("beforeend", createGalleryCard(galleryItems));

function createGalleryCard(obj = {}) {
    let galleryCards = '';
    obj.forEach(({preview, original, description}) => 
    {
    const galleryCard= `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
galleryCards += galleryCard;
});
return galleryCards;
}


let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt',
    captionPosition:'bottom', captionDelay: 250});