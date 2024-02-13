import axios from 'axios';

const URL = `https://pixabay.com/api/`;
const API_KEY = '40876649-e14b6ea7b41694cd36b83fc87';

export const onSearch = (name, page) => {
  const response = axios.get(`${URL}`, {
    params: {
      key: API_KEY,
      q: name,
      page: `${page}`,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  console.log(response);
  return response;
};
