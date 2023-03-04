import { galleryItems } from './galery-items';
import { refs } from './js/refs';
import { renderGalleryMarkup } from './js/render-functions';
import { onGalleryItemClick, onCloseModalBtnClick } from './js/handlers';

console.log(galleryItems);
renderGalleryMarkup(galleryItems);
refs.gallery.addEventListener('click', onGalleryItemClick);
refs.closeModalButton.addEventListener('click', onCloseModalBtnClick);
