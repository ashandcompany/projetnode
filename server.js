let express = require("express");
let app = express();
let port = 3000;

app.listen(port, () => {
    console.log('Leserveurestenroute');
    console.log(`Serveurlisteningathttp://localhost:${port}`);
})

app.get('/', (req, res, next) => {
    res.send('<h1>Bonjour !</h1>');
}
);