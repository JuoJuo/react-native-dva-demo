import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://api.github.com',
  // headers: {'X-Custom-Header': 'fuck'}
});

export function get(url, params = {}) {
  return myAxios.get(url, {params}).then(({ data }) => {
    return data;
  }, err => {
    console.log(err)
  });
}

// TODO
// myAxios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

export function post(url, params = {}) {
  return myAxios.post(url, params).then(({ data }) => data);
}

export function put(url, params = {}) {
  return myAxios.put(url, params).then(({ data }) => data);
}

export function del(url, params = {}) {
  return myAxios.delete(url, params).then(({ data }) => data);
}

export function patch(url, params = {}) {
  return myAxios.patch(url, params).then(({ data }) => data);
}
