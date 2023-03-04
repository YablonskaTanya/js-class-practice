import { closeModal, openModal } from './modal';

export function onGalleryItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  openModal();
  console.dir(e.target);
}

export function onCloseModalBtnClick(e) {
  closeModal();
}
