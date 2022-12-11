import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODFlZWRjNmQ1NGM2MDc3NDM3YWI0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDc5NzA3NywiZXhwIjoxNjcwODgzNDc3fQ.pGt6iAX9ff1YJUR7fkC8BNsKZd10ZAlpCfTECpLj2rw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: 'Bearer ' + TOKEN }
});
