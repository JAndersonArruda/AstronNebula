const api_key = 'lSDf73qkUxwQr3rh9DE2nvWOhzErD6OUggMSzasP';

// api_key = process.env.NASA_API_KEY;


const apiApod = 'https://api.nasa.gov/planetary/apod'
const apiLibraryImage = 'https://images-api.nasa.gov'

const fetchApod = async () => {
    try {
        const response = await fetch(`${apiApod}?api_key=${api_key}`);
        const json = await response.json();

        const url = json.url;
        const name = json.title;
        const description = json.explanation;
        return { url, name, description };
    } catch (err) {
        throw new Error(err.message);
    }
}

const fetchLibraryImage = async () => {}

export { fetchApod, fetchLibraryImage };
