import axios from 'axios';

export async function getImage(inputValue, numberPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43094925-102acc99687b818cc3e092daf',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: numberPage,
  });
  const url = `${BASE_URL}?${params}`;

  const response = await axios.get(url);
  return response.data;

  // return axios.get(url).then(
  //   response => response.data
  // if (!response.ok) {
  //   throw new Error(response.status);
  // }
  // return response.json();
  // );
}
