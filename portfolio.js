import allGallery from "./gallery-items.js";

const galleryItemsContainer = document.querySelector('ul.js-gallery');
const lightboxModalBlock = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImgRef = document.querySelector('img.lightbox__image');
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


closeModalBtn.addEventListener('click', removeOpenImgClass);
overlayLightbox.addEventListener('click', removeOpenImgClass);
window.addEventListener('keydown', onEscKeyPress);


function onGalleryItemsContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.dataset.source) {
    return
  }

  addOpenImgClass();
  putSrcRef(evt.target.dataset.source);
  onEscKeyPress(evt) 

};

function putSrcRef(src) {
  lightboxImgRef.src = src;
};

function addOpenImgClass() {
  lightboxModalBlock.classList.add('is-open');
  //arrowSlides();
  //window.addEventListener('keydown', arrowSlides);
};


function removeOpenImgClass() {
  lightboxModalBlock.classList.remove('is-open');
  overlayLightbox.classList.remove('is-open');
  lightboxImgRef.src = "";
  // window.removeEventListener('keydown', arrowSlides);
};

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    removeOpenImgClass();
  }
};




//-------------------------------

// const imgInOpemOverlay = document.querySelector('lightbox__image');
// const imgArray = [...allGallery];
// let currentIndex = 1;

// const arrowSlides = (evt) => {
//   if (!evt) {
//     return
//   }
//      if (evt.code === 'ArrowLeft' && currentIndex > 0) {
//       currentIndex -= 1;

//     } if (evt.code === 'ArrowRight' && currentIndex !== imgArray.length -1) {
//       currentIndex += 1;
//   }
//   currentIndex += 0;
  
//   setModalImg(currentIndex);
  
// };

// console.log(arrowSlides());

// function setModalImg(index) {
//   imgArray[index];
//   lightboxImgRef.src = imgArray[index].original
//     console.log(currentIndex)
// }
// console.log(setModalImg(currentIndex));

//-------------------------------

//(evt.target.nodeName !== 'IMG')    evt.target.dataset.source 
// document.body.classList.add('is-open');
//   console.log(evt.target.dataset.source);
