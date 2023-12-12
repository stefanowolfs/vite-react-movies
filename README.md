# Moovie Project

The idea is pretty simple and the intent here is to make a very simple project that uses what is the recommended to use with react in 2023 to keep up to date with all new tech trends regarding this stack.

## Business Structure

The site will make movie titles available to be purchased by new users. Users can make a wishlist and purchase titles, as well as, see what they had order previously.

When a user purchase a movie it will be removed from his wishlist and will not be suggested anymore to improve UX.


## Data Modeling

User Example
```json
{
  "id": "a85eb085-09d4-4ddd-aaa7-07741c2efc1a",
  "name": "John Wick",
  "wishes": ["dd8974b9-1416-40eb-9c85-bc3570f6c794", "ddf7f177-9aeb-419a-9b2d-ad2149fd6650"]
}
```

Movie Example
```json
{
  "id": "dd8974b9-1416-40eb-9c85-bc3570f6c794",
  "title": "The Rain that Felled",
  "studio": "Global Films",
  "cover": "rain_felled.png",
  "synopsis": "This enthusiastic movie shows in depth how can a rain drop change a man's life forever.",
  "ratings": [
    {"name": "IMDb", "score": 8.5, "logo": "imdb_icon.png"},
    {"name": "Rotten Tomatoes", "score": 2.5, "logo": "rotten_tomatoes.png"}
  ]
}
```

Cart Example
```json
{
  "id": "90afcee9-f70e-4393-835f-5e2c50dcb898",
  "user_id": "a85eb085-09d4-4ddd-aaa7-07741c2efc1a",
  "movies": ["43135d7f-78b6-483c-a40b-2600a367028c"]
}
```

Purchases Example
```json
{
  "id": "90afcee9-f70e-4393-835f-5e2c50dcb898",
  "user_id": "a85eb085-09d4-4ddd-aaa7-07741c2efc1a",
  "movies": ["43135d7f-78b6-483c-a40b-2600a367028c"]
}
```

## Libs & Tools
Routing: todo
Http Calls: todo
