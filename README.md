# How to run the code

how to run my code in your own computer :)

## Here is the link to the Postman I created

[My Postman link](https://documenter.getpostman.com/view/28599086/2s9YJW5RJp)

## Clone my repo and install npm

join with me by run the terminal and code below

```javascript
git clone https://github.com/Beru088/Sequelize.git
```

```javascript
npm install
```

## Create database in your **MySQL**

using Sequelize to create new DB in you mysql

```javascript
npx sequelize db:create
```

## Adding Table from *migrations folder* in your database

create a new table using Sequelize CLI method

```javascript
npx sequelize db:migrate
```

## Adding dummy data in your *users* table

I already created a dummy data for you :)

```javascript
npx sequelize db:seed:all
```

## Run the sequelize code

run the `app.js` using nodemon npm

```javascript
npx nodemon app
```
