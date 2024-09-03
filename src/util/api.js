import axios from "axios";

export const baseApiUrl = import.meta.env.API_BASE_URL;
const apiToken = import.meta.env.API_TOKEN;



export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        lang: "en",
        language: 'en-US',
    },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGVkZjAxZjI2ZjQ5YWM1NzE0M2QxMThhY2ZmNzBiNiIsIm5iZiI6MTcyNTMxMTMzNy4wMzM2MzMsInN1YiI6IjY2NTcwYjQ0NjdiZDNiNWRkMDVlZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MngCUFwtNulqZSO00VEbLqVHGy0A6wEKwgogePcnWo8`,
    }
});
