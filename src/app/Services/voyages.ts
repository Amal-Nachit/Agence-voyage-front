import axios from "axios";

export async function getAllVoyages() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/voyages`;
  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}

export async function getVoyageById(id: string) {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/voyage/${id}`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}
