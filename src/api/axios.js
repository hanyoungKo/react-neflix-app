import axios from "axios";

const instance = axios.create({
    baseURL:"http://api.themoviedb.org/3",
    params:{
        api_key: "f6e5ff1bdc3a95876445df6afd16866b",
        language:"ko-KR"
    }
});

export default instance;
