/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 26/11/2022
*/
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {getOne, seachAllProducts, addProduct, removeProduct, updateProduct} from "../services/StoreApiService";
import Swal from 'sweetalert2';
 
// Custom Toast
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// Get all products - Hook
export const useSearachProducts = () => {
  const { data, isLoading, isError, error } = useQuery(['PRODUCTS_CACHE_KEY_LIST'], seachAllProducts);
  return {data, isLoading, isError, error};
};

// Get one product - Hook
export const useGetOneProduct = (productId) => {
  const { data, isLoading, isError, error } = useQuery(['PRODUCTS_CACHE_KEY_ONE', productId], getOne(productId));
  return {data, isLoading, isError, error};
};
 
// Add product - Hook
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, error } = useMutation(addProduct, {
    onSuccess: () => {
      Toast.fire({
        title: 'Success!',
        text: 'The prouct has been added successfully',
        icon: 'success',
      });
      queryClient.invalidateQueries('PRODUCTS_CACHE_KEY_LIST');
    }
  });
 
  return {addProduct: mutateAsync, isLoading, isError, error};
};

// Update product - Hook
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, error } = useMutation(updateProduct, {
    onSuccess: ({data}) => {
      Toast.fire({
        title: 'Success!',
        text: 'The prouct has been updated successfully',
        icon: 'success',
      });
      queryClient.invalidateQueries('PRODUCTS_CACHE_KEY_LIST');
      queryClient.invalidateQueries(['PRODUCTS_CACHE_KEY_ONE', data?.id]);
    }
  });
 
  return {updateProduct: mutateAsync, isLoading, isError, error};
};

// Remove product - Hook
export const useRemoveProduct = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, isError, error } = useMutation(removeProduct, {
    onSuccess: () => {
      Toast.fire({
        title: 'Success!',
        text: 'The prouct has been removed successfully',
        icon: 'success',
      });
      queryClient.invalidateQueries('PRODUCTS_CACHE_KEY_LIST');
    }
  });
 
  return {removeProduct: mutateAsync, isLoading, isError, error};
};