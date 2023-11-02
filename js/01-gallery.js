import { galleryItems } from "./gallery-items.js";

function generateGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryElementA = document.createElement("a");
  galleryElementA.classList.add("gallery__link");
  galleryElementA.setAttribute("href", item.original);

  galleryElementA.addEventListener("click", (event) => {
    event.preventDefault();
  });

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", item.preview);
  image.setAttribute("data-source", item.original);
  image.setAttribute("alt", item.description);

  galleryItem.appendChild(galleryElementA);
  galleryElementA.appendChild(image);

  return galleryItem;
}

function renderGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const originalImageSrc = event.target.getAttribute("data-source");

      basicLightbox
        .create(
          `
          <img src="${originalImageSrc}">
        `
        )
        .show();
    }
  });

  galleryItems.forEach((item) => {
    const galleryItem = generateGalleryItem(item);
    galleryContainer.appendChild(galleryItem);
  });
}

window.addEventListener("load", renderGallery);
