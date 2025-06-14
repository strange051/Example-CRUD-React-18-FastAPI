import axios from 'axios'

let http = axios.create({
  baseURL: 'https://api-789248146868.europe-west1.run.app/api',
  headers: {
    'Content-type': 'application/json'
  }
})

export default http