import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9d1c1457ecbf02ea628a5af1d508f48f25df0b4512c23cf4fc089c918f8cde9b'
    }
});