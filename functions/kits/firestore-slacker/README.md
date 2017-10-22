

## Usage

Configure
```
firebase functions:config:set firestore-slacker.default.path='messages/{id}'
```

TypeScript:
```
import * as fsfaker from 'firestore-faker'
export let addFake = fsfaker.addFake;
```

## TODO

- refactor to support multiple configs

TypeScript:
```
import addFake from 'firestore-faker'
export let addFake = fsfaker.addFake('default');
export let altFake = fsfaker.addFake('alt');
```
```
firebase functions:config:set firestore-faker.alt.collection='altmessages'
```
