import {THE_CAT_API} from '../constants';

export const fetchSlingAcademy = (offset = 0) => {
  return fetch(
    `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}`,
  ).then(res => res.json());
};

export const getSlingAcademy = id => {
  return fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`).then(
    res => res.json(),
  );
};

export const fetchCatAPI = (page = 1) => {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${THE_CAT_API}&page=${page}`,
  ).then(res => res.json());
};

export const getCatAPI = id => {
  return fetch(`https://api.thecatapi.com/v1/images/${id}`).then(res =>
    res.json(),
  );
};
