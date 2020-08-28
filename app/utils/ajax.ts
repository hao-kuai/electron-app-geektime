import ajax, { AxiosResponse } from 'axios';

interface Resolve {
  (result: AxiosResponse): void;
}

export function getListData() {
  const url = 'http://localhost/api/list';

  return new Promise((resolve: Resolve, reject) => {
    ajax
      .get(url)
      .then((result: AxiosResponse) => resolve(result))
      .catch((error) => {
        reject(error);
      });
  });
}

export function getDetailData(url: string) {
  return new Promise((resolve, reject) => {
    ajax
      .get(url)
      .then((result: AxiosResponse) => resolve(result))
      .catch((error) => {
        reject(error);
      });
  });
}
