import axios from "axios"
import { BASE_URL, GET_PRODUCT_API } from "../../constant"

// get
export const getProduct = () => { 
  return axios.get(BASE_URL + GET_PRODUCT_API).then((res) => {
    const status = res.status
    const data = res.data 
    return {
      status, 
      data
    }
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
}

// delete
export const DeleteProduct = (productId) => {
  console.log("ok reducre", productId.id);
  return axios.delete(`${BASE_URL}${GET_PRODUCT_API}/${ productId.id}`)
    .then((res) => {
      const status = res.status;
      const data = productId.id;
      console.log(data);
      return {
        status,
        data,
      };
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

