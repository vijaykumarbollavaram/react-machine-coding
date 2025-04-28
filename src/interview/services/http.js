const HTTP_BASE_URL = 'https://jsonplaceholder.typicode.com'

const http = {
    get: function(url) {
        return fetch(`${HTTP_BASE_URL + url}`)
    }
}

export default http;