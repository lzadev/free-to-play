import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": "3bcd739527mshbce3e04616d0273p150a24jsne24d41cff18e",
  },
});

export default axiosInstance;
