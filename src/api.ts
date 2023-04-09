import axios from 'axios';

const httpAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllPosts: async () => {
    let response = await httpAxios.get(`/posts`);
    return response.data;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await httpAxios.post(`/posts`, {
            title, body, userId
        });
        return response.data;
    
    }
}