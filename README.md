![Image of Snackpass](https://www.snackpass.co/static/media/logo_round_2.d74f1dd2.png)

# Snackpass Full Stack Code Challenge

Welcome to the Snackpass Challenge! We really appreciate your time to participate. 

## The Challenge

Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products. For eg, `2 burritos, a soda, and a side of chips`.

1. Design a full stack application which returns an infinite-scrolling list of trending products to the user.
2. A product can be qualified as trending if it is purchased at least once in last 48 hours
3. Each product should be displayed with two tags:
    * a recent purchase tag: `5 purchased recently`
    * a time tag `ordered 3 min ago`
4. **Use a heuristic to determine which trending products gets returned higher. Base heuristic on both recency and number of recent purchases.**

## Requirements

1. Implement a Full-Stack solution including web server, backend persistence and associated code.
2. Please submit with in 72 hours from the time you accept invitation. (If circumstances don't allow for this, please let us know early!)
3. You can use pseudocode for parts of web application. For instance, you could replace a function body with "assume this service has the following API."

## Practices

### Quality of code 

Please use best practices for writing code and publish to this repo. 

### Q & A

- Please create an issue and tag `@shrimuthu`, `@aduca98`, `@nprbst` and `@seankwalker` for any questions.
- **When you are ready to submit, please create an issue and tag `@BiancaVGreen`, `@shrimuthu`, and `@nprbst`.**

### Data

For sample data, you may use [Sample Orders](https://docs.google.com/spreadsheets/d/1xfAjSlBflehOYj4O7I2YkfcBB1b9VgSHg9X-SmRWmsE/edit#gid=280279953), or generate your own.

> Note: Remember to insert your own random timestamps to fit within 48 hours window.
 
## Solution
Please be sure to provide an explaination of:

1. How you solved the problem
2. How to setup 
3. How to run it

You may be as verbose as you would like when providing details on approach, setup etc.

_Your solution content goes here..._ <br /><br />
![image](screenshot.jpg)<br /><br />
![image](screenshot_API.jpg)<br /><br />
![image](screenshot_MongoDB.jpg)<br /><br />

Frontend: React <br />
Backend: NodeJS, Express <br />
Database: MongoDB <br />

First,  I used your order data and added a "Time" column which I generated a random date and time, range from 4/1/2021-04/30/2021. This is the
[updated data](https://docs.google.com/spreadsheets/d/1djJkH4IBVvqpRqLA-YkA36guOtpZw_3CIsPLpulbIJk/edit?usp=sharing).
Next, I imported the data into MongoDB and used NodeJS(Express, Mongoose) to query the data, and generated an REST API to display the data. Finally, I developed a frontend using React (React-bootstrap) to fetch the data and completed this full-stack application.

To run the app, for the backend server,  under the "backend" folder, run "npm start" and open http://localhost:5000/orders and see the API. For the frontend, under the root folder and run "npm install" and "npm start" and open http://localhost:3000/ to see the app.
