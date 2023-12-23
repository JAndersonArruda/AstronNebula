const apiApod = 'https://api.nasa.gov/planetary/apod'
const apiLibraryImage = 'https://images-api.nasa.gov'

const fetchApod = async () => {
    try {
        const responseApiKey = await fetch('/api-key/');
        const jsonApiKey = await responseApiKey.json();

        const api_key = jsonApiKey.api_key;
        console.log(api_key);

        const response = await fetch(`${apiApod}?api_key=${api_key}`);
        const json = await response.json();

        const url = json.url;
        const name = json.title;
        const description = json.explanation;
        return { url, name, description };
    } catch (err) {
        console.error('Erro na solicitação da API da NASA:', err.message);
    }
}

const fetchLibraryImage = async () => {}

export { fetchApod, fetchLibraryImage };
