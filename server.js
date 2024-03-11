let express = require("express");
let app = express();
let port = 3000;
let bodyparser = require("body-parser");

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // redirect views

app.use(express.static(__dirname + '/www'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

let myobject = {
    nom: "mon objet",
    valeur: 10
}

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.get('/', (req, res, next) => {
    res.render('index.ejs', {monobjet: myobject});
});

app.get('/info', (req, res, next) => {
    res.render('info.ejs');
});

app.get('/joueurs', (req, res, next) => {
    res.render('joueurs.ejs');
});

app.post('/info',(req,res,next)=>{
    console.log(req.body.name); //body=contenu de la requete, name = nom du champ du formulaire
    res.redirect('/'); //redirige vers la page de son choix
});

app.post('/',(req,res,next)=>{
    console.log(req.body.boutton); //body=contenu de la requete, name = nom du champ du formulaire
    res.redirect('/info'); //redirige vers la page de son choix
});