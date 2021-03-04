import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-6ca51.cloudfunctions.net/api', // the API URL (cloud function)
    // baseURL: 'http://localhost:5001/clone-6ca51/us-central1/api', // Development API
});

export default instance