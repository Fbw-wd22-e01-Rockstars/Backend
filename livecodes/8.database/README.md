##### 1. Create a database "persons"

```
use persons
```

##### 2. Create a collection "info" in "persons" database

```
db.createCollection('info');
```

##### 3. Insert a person to the collection "info" with the following structure:

```
db.info.insertOne({
    "address": {
        "building": "1007",
        "street": "Morris Park Ave",
        "zipcode": "10462"
    },
    "first_name": "Tom",
    "last_name": "Joe",
    "age": 39
})
```

##### 4. Insert 4 persons to the collection "info" with the above structure

```
db.info.insertMany([{
    "address": {
       "building": "2",
       "street": "Street One",
       "zipcode": "12345"
    },
    "first_name": "John",
    "last_name": "Doe",
    "age": 30
}, {
    "address": {
       "building": "4",
       "street": "Street Two",
       "zipcode": "12345"
    },
    "first_name": "Jane",
    "last_name": "Doe",
    "age": 40
}, {
    "first_name": "Fulano",
    "last_name": "de Tal",
    "age": 19
} , {
    "first_name": "Ciclana",
    "last_name": "de Tal",
    "age": 88
}
])
```

##### 5. Update 1st persons address and his/her first_name

```
db.info.updateOne({_id: ObjectId("603665d2f70e4d51b419a164")}, { $set : {
    "address.building": "1021",
    age: 29
    }
})
```

##### 6. Add new row to the 1st person: "gender": "male/female"

```
db.info.updateOne({_id: ObjectId("603665d2f70e4d51b419a164")}, { $set : {gender: "male"} })
```

##### 7. Delete from the collection "info" 4th person's document by his/her first name ('Ciclana')

```
db.info.remove({ first_name: 'Ciclana' })
```

##### 8. Find document(s) from "info" collection who's age is greater than 30

```
db.info.find( {age: {$gt: 30}}).pretty()
```

##### 9. Find document(s) from "info" collection who's age is less than 30

```
db.info.find( {age: {$lt: 30}}).pretty()
```

##### 10. Find document(s) from "info" collection who's age is less than 30 but more than 20

```
db.info.find( {age: {$lt: 30, $gt: 20} }).pretty()
```

##### 11. Rename 2nd person's name

```
db.info.update({ first_name: 'John' }, { $set : {first_name: "Joao"} })
```

##### 12. Display the fields address, first_name, last_name but exclude the field age for all the documents in the collection "info"

```
db.info.find({}, {age: 0, _id: 0} ).pretty()
```
