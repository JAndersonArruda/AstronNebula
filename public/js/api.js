// api.js
const apiServer = 'http://localhost:3000/api/apod'; // Altere para a URL do seu servidor intermediário

const riqueriImgeAPI = async () => {
    try {
        const response = await fetch(apiServer);
        const json = await response.json();

        const url = json.url;
        const name = json.title;
        const description = json.explanation;

        return { url, name, description };
    } catch (err) {
        throw new Error(err.message);
    }
};

export default riqueriImgeAPI;
