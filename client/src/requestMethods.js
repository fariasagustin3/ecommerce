import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODFlZWRjNmQ1NGM2MDc3NDM3YWI0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDg2NzMyOSwiZXhwIjoxNjcwOTUzNzI5fQ.9Jkzer-EV_PU3QTMkW0Xf3uax4NfE5TB3dfS9sFhwDY";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: 'Bearer ' + TOKEN }
});
