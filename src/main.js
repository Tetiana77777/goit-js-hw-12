import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const form = document.querySelector('.form');
const inputForm = document.querySelector('.input-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const imageSearch = inputForm.value.trim();
  if (imageSearch === '') return;

  gallery.innerHTML = '<div class="loader"></div>';

  getImage(imageSearch)
    .then(data => {
      const markup = imageTemplate(data.hits);
      gallery.innerHTML = markup;

      const lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
      lightbox.refresh();
      if (data.hits.length === 0) {
        iziToast.error({
          maxWidth: '432px',
          height: '48px',
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        maxWidth: '432px',
        height: '48px',
        color: 'red',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      form.reset();
    });
}
