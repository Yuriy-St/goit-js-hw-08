import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.body.querySelector('.gallery');
galleryEl.innerHTML = galleryItems.reduce((htmlGallery, item) => {
  return (
    htmlGallery +
    `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>
    `
  );
}, '');

const lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
