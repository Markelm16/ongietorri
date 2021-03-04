var routes = {};

var output = document.getElementById('output');

function route(path, controller) {
    routes[path] = {controller: controller};
}

function executeRoute(path) {
    var split = path.split(';');
    var pathName = split[0];
    split.shift();
    if (routes[pathName]) {
        routes[pathName].controller(split);
    }
    else {
        open("https://www.google.com/search?q=" + path);
    }
}

function searchEngine(path, url, queryurl) {
    route(path, (args) => {
        if (args.length > 0) {
            open(queryurl.replace('{QUERY}', args[0]));
        }
        else {
            open(url);
        }
    });
}

function link(path, url) {
    route(path, (args) => {
        open(url);
    });
}

searchEngine('tw', 'https://twitter.com', 'https://twitter.com/search?q={QUERY}')
searchEngine('r', 'https://reddit.com', 'https://reddit.com/r/{QUERY}')
searchEngine('4c', 'https://4chan.org', 'https://boards.4chan.org/{QUERY}/')
searchEngine('ig', 'https://instagram.com', 'https://instagram.com/{QUERY}/')

searchEngine('yt', 'https://youtube.com', 'https://www.youtube.com/results?search_query={QUERY}');
//route('math', (args) => {
 //   output.innerHTML = Parser.evaluate("2 ^ x", { x: 3 });;
//});

link('guide', 'guide/')
link('whats', 'https://web.whatsapp.com/');
link('gh', 'https://github.com');
link('xtend', 'https://arizmendikastola.alexiaclassroom.com/local/docencia/actual/index.php');
link('drive', 'https://drive.google.com')
link('gm', 'https://mail.google.com')

route('tr', (args) => {
    open(`https://translate.google.com/?sl=${args[0]}&tl=${args[1]}&text=${args[2]}`)
})

route('h', (args) => {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var h = today.getHours();
var m = today.getMinutes();

today = yyyy + '/' + mm + '/' + dd + '   ' + h + ':' + m;
    output.innerHTML = today;
})

route('w', (args) => {
    var lang = args[1];
    if (!lang) lang = 'en';
    if (args[0]) {
        open(`https://${lang}.wikipedia.org/wiki/${args[0]}`);
    }
});