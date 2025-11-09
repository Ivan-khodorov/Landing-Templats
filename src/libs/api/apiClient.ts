export const apiClient = {
  get: (url: string) => fetch(url).then(res => res.json())
};
