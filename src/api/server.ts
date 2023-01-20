let token = 'e579bffd8ea674ac109e62b1ad0ed0bc32e045de7b2fff7a';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://josias-flask-phonebook.glitch.me/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },


    create: async(data: any = {}) => {
        const response = await fetch(`https://josias-flask-phonebook.glitch.me/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://josias-flask-phonebook.glitch.me/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    }, 
    
    delete: async(id:string) => {
        const response = await fetch(`https://josias-flask-phonebook.glitch.me/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
