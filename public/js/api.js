const apiApod = 'https://api.nasa.gov/planetary/apod'
const apiLibraryImage = 'https://images-api.nasa.gov'


const fetch_api_key = async () => {
    const responseApiKey = await fetch('/api-key/');
    const jsonApiKey = await responseApiKey.json();
    return jsonApiKey.api_key;
};

const fetchApod = async () => {
    try {
        const api_key = await fetch_api_key();
        const response = await fetch(`${apiApod}?api_key=${api_key}`);
        const json = await response.json();

        const url = json.url;
        const name = json.title;
        const description = json.explanation;
        return { url, name, description };
    } catch (err) {
        console.error('Erro na solicitação da API da NASA - Apod:', err.message);
    }
}

const fetchLibraryImage = async (search, page) => {
    try {
        const response = await fetch(`${apiLibraryImage}/search?q=${search}&page=${page}&media_type=image`)
        const json = await response.json();
    
        const data = json.collection.items; // .links.href, para os links das imagens;
        const pages = json.collection.links; // .rel, para o tipo; .href, para a proximapagina;
        return { data, pages };
    } catch (err) {
        console.error('Erro na solicitação da API da NASA - Library:', err.message);
    }
}

export { fetchApod, fetchLibraryImage };
