export function imageTemplate(images) {
  return images
    .map(
      image =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${image.largeImageURL}">
             <img
               loading="lazy"
               class="gallery-image"
              //  width="1280"
              //  height="152"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${image.likes}</p>
             </li>
             <li><h3>Views</h3><p>${image.views}</p>
               </li>
               <li><h3>Comments</h3><p>${image.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${image.downloads}</p>
                   </li>
             </ul>
           </li>`
    )
    .join('');
}
