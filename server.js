let express = require("express");
let app = express();
let port = 3000;

app.listen(port, () => {
    console.log('Leserveurestenroute');
    console.log(`Serveurlisteningathttp://localhost:${port}`);
})

app.get('/', (req, res, next) => {
    res.send("<h1>Bien le bonjour tout le monde :)</h1><img src='https://i.pinimg.com/736x/6f/74/c5/6f74c58a3841a6cd6b1477835d759051.jpg' alt='Image Pin' width='300px'>");
}
);