import { storeAPI } from "../../../../api/storeAPI";

export const seachAllProducts = async () => {
  const response = await storeAPI.get("/products");
  return response.data;
};

export const getOne = async ({productId}) => {
  const response = await storeAPI.get(`/products/${productId}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await storeAPI.post('/products', {...product, image: 'https://api.lorem.space/image/shoes?w=150&h=150'});
  return response.data;
};

export const updateProduct = async ({productId, ...product}) => {
  const response = await storeAPI.patch(`/products/${productId}`, {...product});
  return response.data;
};

export const removeProduct = async ({productId}) => {
  const response = await storeAPI.delete(`/products/${productId}`);
  return response.data;
};