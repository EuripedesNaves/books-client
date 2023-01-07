import axios from 'axios'

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: "https://dead-erin-bighorn-sheep-vest.cyclic.app/"
        })
        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers = {
                        'Authorization': `Bearer ${token}`
                    }
                }
                return config
            }
        )
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    localStorage.removeItem('token')
                }
                throw error
            }
        )
    }

    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/login', loginInfo)
            localStorage.setItem('token', data.token)
            return data
        } catch (error) {
            console.log(error, `Could not login`)
        }
    }

    register = async (registerInfo) => {
        try {
            const { data } = await this.api.post("/register", (registerInfo));
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    getBooks = async () => {
        try {
            const { data } = await this.api.get('/allBooks')
            return data
        } catch (error) {
            console.log(error)
        }
    }

    getBook = async (id, book) => {
        try {
            const { data } = await this.api.get(`/uniqueBook/${id}`, book)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    addBook = async (title, author, synopsis, releaseYear, genre) => {
        try {
            const { data } = await this.api.post('/book', { title, author, synopsis, releaseYear, genre })
            return data
        } catch (error) {
            console.log(error)
        }
    }

    updateBook = async (id, title, author, synopsis, releaseYear, genre) => {
        try {
            await this.api.put(`/updateBook/${id}`, {title, author, synopsis, releaseYear, genre})
        } catch (error) {
            console.log(error)
        }
    }

    deleteBook = async (id, book) => {
        try {
            await this.api.delete(`/deleteBook/${id}`, book)
        } catch (error) {
            console.log(error)
        }
    }

    uploadImage = async (id, file) => {

        const formData = new FormData()
        formData.append('image', file)
        try {
            const { data } = await this.api.put(`/book/${id}/image-upload`, formData)
            return data

        } catch (error) {
            console.log(error)
        }
    }

}

export default new Api();