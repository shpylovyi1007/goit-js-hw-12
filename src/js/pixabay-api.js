import axios from 'axios';

const userGallery = async userSearch => {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: '43654443-0aa2ac279d0400a8e119738dd',
            q: userSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    })
    return response.data;
};

export default userGallery;

