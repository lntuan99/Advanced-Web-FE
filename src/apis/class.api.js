import axios from "axios"

export const getClassListApi = async (token,jwt_type) => {
    return axios
    .get("http://localhost:8002/api/v1/classroom/get-list-classroom-by-jwt-type?jwt_type="+jwt_type, 
    { headers: {"Authorization" : `Bearer ${token}`} })
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        return error
      })
  }