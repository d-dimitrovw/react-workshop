const baseURL = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseURL);
        const result = await response.json();
        const users = Object.values(result);
        return users;
    },

    async create(userData) {
        const {country, city, street, streetNumber, postData} = userData;
        
        postData.adress = {
            country,
            city,
            street,
            streetNumber,
        };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString(); 
        
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = response.json();

        return result;
    }
}