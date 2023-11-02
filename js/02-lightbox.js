import { galleryItems } from "./gallery-items.js";

function generateGalleryItem(item) {
  const galleryItem = document.createElement("li");
  const galleryItemA = document.createElement("a");
  galleryItemA.classList.add("gallery__item");
  galleryItemA.setAttribute("href", item.original);
  galleryItemA.setAttribute("alt", item.description);

  galleryItemA.addEventListener("click", (event) => {
    event.preventDefault();
  });

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", item.preview);
  galleryItem.appendChild(galleryItemA);
  galleryItemA.appendChild(image);

  return galleryItem;
}

function renderGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const galleryItem = generateGalleryItem(item);
    galleryContainer.appendChild(galleryItem);
  });

  const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "self",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}

window.addEventListener("load", renderGallery);
