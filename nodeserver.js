const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoUpdateOptions = { "upsert": true }
const cors = require('cors');

app.use(cors()); // <---- use cors middleware
app.use(express.static('./dist/my-games-tracker'));

app.use(bodyParser.json());
app.get('/', (req, res) => { res.sendFile('index.html', { root: 'dist/my-games-tracker/' }); });

app.post('/category/get', (req, resp) => {
    function callback(category) { resp.send(category); }
    baseCategoryRequest(req, resp, callback);
});

app.post('/user/get', (req, resp) => {
    console.log('Requesting /user/get');
    console.log(req.body);
    function callback(user) { resp.send(user); }
    baseUserRequest(req, resp, callback);
});

app.post('/user/update', (req, resp) => {
    function callback(user) { //have the "category" there to match the function signature
        useMongoClient(db => {
            db.collection("users")
            .updateOne({ userId: user.userId }, { $set: user }, mongoUpdateOptions)
            .then(result => resp.send({ result }));
        });
    }

    baseUserRequest(req, resp, callback);
});

//this endpoint should only be called if adding BOTH
//this is very bad API design, but I'm prioritizing data handling on the client
//because I don't want to deal with the logic in the NodeJS side
app.post('/user/addLinkedRankCard', (req, resp) => {
    console.log('Requesting /user/addLinkedRankCard');
    console.log(req.body);
    var newCategoryItem = req.body.categoryItem
    var newRankCard = req.body.rankCard;

    function callback(category, user) {
        //add categoryItem based on list size (hope there's no concurrent database transactions lol)
        newCategoryItem.itemId = category.items.length; 
        newRankCard.categoryItemId = newCategoryItem.itemId;

        //add new things to both the user and the category documents
        category.items.push(newCategoryItem);
        user.rankCardLists
            .find(x => x.listId == user.config.lastActiveListId).rankCards
            .push(newRankCard);

        useMongoClient(db => {
            let category$ = db.collection("categories")
                .updateOne({ categoryId: category.categoryId }, { $set: category }, mongoUpdateOptions);
            let user$ = db.collection("users")
                .updateOne({ userId: user.userId }, { $set: user }, mongoUpdateOptions);
            Promise.all([user$, category$]).then(() => resp.send({ result: 'success' }));
        });
    }
    
    if(newCategoryItem && newRankCard) baseRequest(req, resp, callback);
    else resp.send({ message: 'Cannot complete request, categoryItem or rankCard is missing'});
});

function baseCategoryRequest(req, resp, callback) {
    useMongoClient(db => {
        db.collection("categories")
        .findOne({ categoryId: req.body.categoryId })
        .then(result => {
            if(result) callback(result);
            else resp.send({ message: 'FindOne failed, try again' });
        });
    });
}

function baseUserRequest(req, resp, callback) {
    useMongoClient(db => {
        db.collection("users")
        .findOne({ userId: req.body.userId })
        .then(result => {
            if(result) callback(result);
            else resp.send({ message: 'FindOne failed, try again' });
        });
    });
}

function baseRequest(req, resp, callback) {
    useMongoClient(db => {
        const category$ = db.collection("categories")
            .findOne({ categoryId: req.body.categoryId });
        const user$ = db.collection("users")
            .findOne({ userId: req.body.userId });
        Promise.all([category$, user$]).then(results => {
            console.log(results[0]);
            console.log(results[1]);
            if(results[0] && results[1]) callback(results[0], results[1]);
            else resp.send({ message: 'FindOne failed, please make sure you send all required properties' });
        });
    });
}

function useMongoClient(callback) {
    const uri = "mongodb+srv://admin:scotlandyard@cluster0.hclso.mongodb.net/mygamestracker?retryWrites=true&w=majority";
    const MongoClient = require('mongodb').MongoClient;
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        if (err) console.log({ request: request.body, error: err });
        else callback(client.db("mygamestracker")); 
        client.close();
    });
}

app.post('/img/get', (req, resp) => {
    // const url = 'https://api.rawg.io/api/games?key=6d471c230d864d65b322a9e2f6a65628&search=' + req.body.rawgSearch;
    // const https = require('https');
    // https.get(url, result => {
    //     let data = '';
    //     result.on('data', chunk => { data += chunk; });
    //     result.on('end', () => {
    //         let gameData = JSON.parse(data);
    //         let images = [];
    //         // gameData.results.forEach(game => { 
    //         //     images.push({ title: game.name, thumb: game.background_image });
    //         // });
    //         gameData.results.forEach(game => { images.push(game.background_image); });
    //         resp.send({ images });
    //     });
    // })
    // .on('error', err => {
    //     console.log("Error: ", err.message);
    //     resp.send(err.message);
    // });
    
    resp.send({ message: 'NOT IN USE. Please update nodeserver.js to use this endpoint.' });
});

app.listen(process.env.PORT || 8080);