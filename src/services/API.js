const API_LINK ="https://dev-i-wam.pantheonsite.io/wp-json/acf/v3/";

export const Api ={
    async getEvents()
    {
        const rawResponse = await fetch(API_LINK+'events/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getAnnonces()
    {
        const rawResponse = await fetch(API_LINK+'annonce/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },


    async postAnnonces(data)
    {
        const rawResponse = await fetch(API_LINK+'annonce/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data})
            }

        );
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getAvisUtilisateurs()
    {
        const rawResponse = await fetch(API_LINK+'avis_utilisateurs/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getQuestions()
    {
        const rawResponse = await fetch(API_LINK+'questions/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getUsers()
    {
        const rawResponse = await fetch('https://dev-i-wam.pantheonsite.io/wp-json/wp/v2/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },


}

