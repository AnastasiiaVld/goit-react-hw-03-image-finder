import axios from 'axios';

const API_KEY = '35295302-5511e94bc4906b81bb635556d';

export const getPicturesApi = (query, page = 1) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        per_page: 12,
        page: page,
        q: query,
        key: API_KEY,
      },
    })

    .then(res => res.data);
};
