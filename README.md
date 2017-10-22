## Usage


```
curl 'https://us-central1-faker-function.cloudfunctions.net/addDocument?name=text&value=Hello!'
```

reports ID and contents of document added to messages collection:
```
{"id":"jf6yi2eFSxNlLPfuBt9Q","doc":{"text":"Hello!"}}```


```
curl 'https://us-central1-faker-function.cloudfunctions.net/addFake'  # default name=text
curl 'https://us-central1-faker-function.cloudfunctions.net/addFake?name=phrase'
```

reports ID and contents of document added to messages collection:
```
{"id":"jf6yi2eFSxNlLPfuBt9Q","doc":{"phrase":"calculating the system won't do anything, we need to parse the back-end HTTP port!"}}```



## Dev Setup

```
npm install -g typescript
```