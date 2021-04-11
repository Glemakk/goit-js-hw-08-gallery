import allGallery from "./gallery-items.js";

const galleryItemsContainer = document.querySelector('ul.js-gallery');
const lightboxModalBlock = document.querySelector('div.lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const imgSrcRef = document.querySelector('img.lightbox__image');
const overlayLightbox = document.querySelector('div.lightbox__overlay');

const galleryItemssMarkup = createGalleryItemssMarkup(allGallery);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemssMarkup);

galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);


function createGalleryItemssMarkup(allGallery) {
    return allGallery
        .map(({ preview, original, description }) => {
          return `
            <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
         <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
         />
        </a>
      </li>`;
        })
        .join('');
};


closeModalBtn.addEventListener('click', onCloseModal);
overlayLightbox.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);


function onGalleryItemsContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.dataset.source) {
    return
  }

  lightboxModalBlock.classList.add('is-open');
  
  imgSrcRef.src = evt.target.dataset.source;
};



function onCloseModal() {
  lightboxModalBlock.classList.remove('is-open');
  overlayLightbox.classList.remove('is-open');
  imgSrcRef.src = "";
};

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}

//(evt.target.nodeName !== 'IMG')    evt.target.dataset.source 
// document.body.classList.add('is-open');
//   console.log(evt.target.dataset.source);
