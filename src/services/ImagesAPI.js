import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `?key=29770100-1ae097b1dc8cc9c4855e1a138&page=${page}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await JSON.parse(response.request.response);
    console.log(data);
    return data;
  } catch (error) {
    Notify.warning(
      `We're sorry, but you've reached the end of search results.`
    );
  }
};
