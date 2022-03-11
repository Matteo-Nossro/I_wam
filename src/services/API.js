const API_LINK ="https://dev-i-wam.pantheonsite.io/wp-json/acf/v3/";

const  Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
export const Api ={
    async getEvents()
    {
        const rawResponse = await fetch(API_LINK+'events/', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
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
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
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
                    'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
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
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
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
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getAllUsers()
    {
        const rawResponse = await fetch('https://dev-i-wam.pantheonsite.io/wp-json/acf/v3/users/', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',

                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },

    async getUserById(id)
    {
        const rawResponse = await fetch('https://dev-i-wam.pantheonsite.io/wp-json/acf/v3/users/'+id, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
                'Accept': 'application/json',
                Authorization : 'Basic base64encoded <matteo:matteo>'
            },
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;

    },


    async setUserById(userInfos,id)
    {

        const rawResponse = await fetch('https://dev-i-wam.pantheonsite.io/wp-json/acf/v3/users/'+id, {
            method: 'POST',

            body: JSON.stringify(userInfos),
            headers: {
                'Access-Control-Allow-Origin': 'https://dev-i-wam.pantheonsite.io',
                'Accept': 'application/json',
                'Authorization' : 'Basic base64encoded <matteo:matteo>'
            },

        });

    },



}

