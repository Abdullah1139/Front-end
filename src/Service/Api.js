import axios from 'axios';

const url = "http://localhost:1139";

export const register =async (registrationData) => {

  // await axios.post(`${url}/registration`, registrationData);

}

export const login = async (loginDetails) => {
  console.log(loginDetails)
  return await axios.post(`${url}/registration`, loginDetails)
}

export const sellerRegister =async (registrationData) => {

  console.log(registrationData)
    await axios.post(`${url}/sellerRegistration`, registrationData);
  
  }

export const createProduct= async (product)  => {
  console.log("APII")
  await axios.post(`${url}/product`, product)
}
// export const fetchData = () => {
//   axios.get(url); // Replace `url` with a valid URL to fetch data from
// }
