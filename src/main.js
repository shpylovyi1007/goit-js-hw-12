import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import userGallery from "./js/pixabay-api";
import addImages from "./js/render-functions";
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const userSearch = event.target.elements.search.value.trim();
    loader.style.display = 'flex';
    gallery.innerHTML = '';

    try {
        const response = await userGallery(userSearch);
        if (response.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        } else {
            addImages(response);
        }
    } catch (error) {
        console.log(error);
    } finally {
        loader.style.display = 'none';
    }
});
