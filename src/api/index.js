import axios from '@/axios';

const api = {
  login(params) {
    return axios.post('/passport/login', params);
  },
  logon(params) {
    return axios.post('/passport/logon', params);
  },
  findPassword(params) {
    return axios.post('/passport/findBack', params);
  },
  changeUserInfo(params) {
    return axios.put('/passport/findBack', params);
  },
  getCode(params) {
    return axios.post('/passport/getCode', params);
  },
  getGoodsCategory(params) {
    return axios.get('/category/all', params);
  },
  goodsAdd(params) {
    return axios.post('/products/add', params);
  },
  uploadImages(params) {
    return axios.post('/upload/images', params);
  },
  editProducts(params) {
    return axios.put('/products/edit', params);
  },
  getGoodsList(appkey = 'xiaodeng_1605533370345') {
    return axios.get('/products/:id', { params: { appkey } });
  },
  deleteProduct(appkey = 'xiaodeng_1605533370345') {
    return axios.delete('/products/:id', { params: { appkey } });
  },
  addCategory(params) {
    return axios.get('/category/add', params);
  },
  editCategory(params) {
    return axios.put('/category/edit', params);
  },
  deleteCategory(appkey = 'xiaodeng_1605533370345') {
    return axios.delete('/category/:id', { params: { appkey } });
  },
};
export default api;
