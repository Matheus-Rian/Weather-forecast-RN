import axios from 'axios'

//https://api.hgbrasil.com/weather?key=1b0d9edf&lat=-23.682&lon=-46.875

export const key = '1b0d9edf';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api;
// export default não precisa de chaves em volta, enquanto o export normal sim