const baseURL = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseURL);
        const result = await response.json();
        const users = Object.values(result);
        return users;
    },

    async create(userData) {
        const postData = transformUserData(userData);
        
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const result = response.json();

        return result;
    },

    async getOne(userId) {
        const response = await fetch(`${baseURL}/${userId}`);
        const user = await response.json();

        return user;
    },

    async delete(userId) {
        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'DELETE',
        });

        const result = await response.json();
        return result;
    },

    async update(userId, userData) {
        const postData = transformUserData(userData);
        postData._id = userId;
        postData.updatedAt = new Date().toISOString();
        
        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const result = await response.json();

        return result;
    },
}

function transformUserData(userData) {
    const {country, city, street, streetNumber, ...transformedData} = userData;
        
        transformedData.address = {
            country,
            city,
            street,
            streetNumber,
        };
        transformedData.createdAt = new Date().toISOString();
        transformedData.updatedAt = new Date().toISOString();

        return transformedData;
}