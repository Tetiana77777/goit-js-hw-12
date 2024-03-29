import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const form = document.querySelector('.form');
const inputForm = document.querySelector('.input-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.btn-load-more');

let inputValue;
let numberPage = 1;
let maxPage = 0;
const pageSize = 15;

form.addEventListener('submit', handleSubmit);
btnLoadMore.addEventListener('click', loadMoreClick);

//====================================================
async function handleSubmit(e) {
  e.preventDefault();

  inputValue = inputForm.value.trim();
  gallery.innerHTML = '';
  numberPage = 1;

  if (!inputValue) return;

  const data = await getImage(inputValue, numberPage);
  maxPage = Math.ceil(data.total / pageSize);

  const markup = imageTemplate(data.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  checkBtnStatus();
}
// ====================================================
async function loadMoreClick() {
  numberPage += 1;
  const data = await getImage(inputValue, numberPage);
  const markup = imageTemplate(data.hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  checkBtnStatus();
  // inputForm.reset();
}

//=======================================================
function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}

function checkBtnStatus() {
  if (numberPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}

// function handleSubmit(event) {
//   event.preventDefault();
//   const imageSearch = inputForm.value.trim();
//   if (imageSearch === '') return;

//   gallery.innerHTML = '';
//   gallery.insertAdjacentHTML('afterend', '<div class="loader"></div>');
//   btnLoadMore.classList.add('hidden');

//   getImage(imageSearch)
//     .then(data => {
//       const markup = imageTemplate(data.hits);
//       gallery.insertAdjacentHTML('beforeend', markup);

//       const lightbox = new SimpleLightbox('.gallery-link', {
//         captionsData: 'alt',
//         captionsDelay: 250,
//       });
//       lightbox.refresh();
//       if (data.hits.length === 0) {
//         iziToast.error({
//           maxWidth: '432px',
//           height: '48px',
//           color: 'red',
//           position: 'topRight',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//       }
//     })
//     .catch(error => {
//       iziToast.error({
//         maxWidth: '432px',
//         height: '48px',
//         color: 'red',
//         position: 'topRight',
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//       });
//     })
//     .finally(() => {
//       form.reset();
//     });
// }
