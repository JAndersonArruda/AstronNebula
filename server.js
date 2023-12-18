import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para permitir requisições de origens diferentes (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/api/apod', async (req, res) => {
    const apiKey = 'lSDf73qkUxwQr3rh9DE2nvWOhzErD6OUggMSzasP';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro na solicitação à API da NASA:', errorData);
            res.status(response.status).json(errorData);
            return;
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro interno no servidor:', error);

        res.status(500).json({
            error: 'Erro interno no servidor',
            details: error.message
        });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});