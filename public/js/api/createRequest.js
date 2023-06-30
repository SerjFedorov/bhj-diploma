/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  let URL = options.url;
  let formData;

  function encodeURL(data) {
    return `?${Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`;
  }

  if (options.method === 'GET' && options.data) {
    URL += encodeURL(options.data);
  } else if (options.data) {
    formData = new FormData();
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(`${key}`, `${value}`);
    }
  }
  try {
    xhr.open(options.method, URL, true);
    xhr.send(formData);
  } catch (err) {
    options.callback(err, xhr.response);
    console.log('Error create req');
  }
  xhr.addEventListener('load', () => {
    options.callback(null, xhr.response);
  });
};
