# ongietorri

a minimalist welcome page for your browser
feel free to fork and customize it

![Main Page](https://i.imgur.com/AWZaiCO.png)

## router
You can edit routes in routes.js

### search engines

`searchEngine('tw' /*route name*/, 'https://twitter.com' /*url*/, 'https://twitter.com/search?q={QUERY}' /*url with query placeholder*/);`

### links

`link('gm' /*route name*/, 'https://mail.google.com' /*url*/)`

### custom routes
```
route('w' /*route name*/, (args /*every argument after the route name*/) => {
    var lang = args[1];
    if (!lang) lang = 'en';
    if (args[0]) {
        open(`https://${lang}.wikipedia.org/wiki/${args[0]}`);
    }
});
```
