import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import userGallery from "./js/pixabay-api";
import addImages from "./js/render-functions";
const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btn = document.querySelector('.load');
btn.style.display = 'none';
import { perPage } from "./js/pixabay-api";
let myPage = 1;

form.addEventListener('submit', async event => {
    event.preventDefault();
    const userSearch = event.target.elements.search.value.trim();
    loader.style.display = 'flex';
    gallery.innerHTML = '';
    try {
        const response = await userGallery(userSearch, myPage);
        if (response.hits.length === 0) {
            btn.style.display = 'none';
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        } else {
            addImages(response)
            const scroll = () => {
                const galleryItem = document.querySelector('.gallery-item');
                const itemHeight = galleryItem.getBoundingClientRect().height;
                window.scrollBy({
                    top: itemHeight * 2,
                    behavior: 'smooth'
                });
            };
            btn.style.display = 'flex';
            scroll();
        }
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
});

btn.addEventListener('click', async () => {
    try {
        const response = await userGallery(userSearch, myPage);
        const totalPages = Math.ceil(response.totalHits / perPage);
        if (myPage > totalPages) {
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, there are no more posts to load"
            });
        }
        btn.style.display = 'none';
        loader.style.display = 'flex';
        myPage += 1;
        if (response.totalHits <= 15) {
            btn.style.display = 'none';
        }
        addImages(response)
        scroll();
    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
});
