let express = require("express");
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // redirect views

app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(port, () => {
    console.log('Leserveurestenroute');
    console.log(`Serveurlisteningathttp://localhost:${port}`);
})

app.get('/', (req, res, next) => {
    res.render('index.ejs');
});

app.get('/info', (req, res, next) => {
    res.render('info.ejs');
});

app.get('/contact', (req, res, next) => {
    res.render('contact.ejs');
});