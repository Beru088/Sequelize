# How to run the code
how to run my code in your own computer :)

## Here is the link to the Postman I created
[My Postman link](https://documenter.getpostman.com/view/28599086/2s9YJW5RJp)

## Install npm
```javascript
npm install
```

## Create database in your **MySQL**
```javascript
npx sequelize db:create
```

## Adding Table from *migrations folder* in your database
```javascript
npx sequelize db:migrate
```

## Adding dummy data in your *users* table
```javascript
npx sequelize db:seed:all
```

## Run the sequelize code
```javascript
npx nodemon app.js
```
