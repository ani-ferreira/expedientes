# Gestión de expedientes

> A webapp for law firms to keep track of every move they make on their files.

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Video demo](#video-demo)
- [Setup](#setup)
- [Room for Improvement](#room-for-improvement)

## General Information

Inside the workflow of a law firm, it can happen (if they are working on many cases) that they lose track of the status of each one.

In some of those law firms, updates are normally recorded in writing or saving data in several excel sheets, but these methods can be very slow and cumbersome when the amount of work increases.

This web app would allow them to have all the updates they need in one place, plus it is very easy and intuitive to use.

## Technologies Used

- Client

```
    "@reduxjs/toolkit": "^1.7.1",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.4",
    "bootstrap": "^4.6.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "redux": "^4.1.2",
    "sweetalert2": "^11.2.1",
    "web-vitals": "^1.1.2"
```

- Server

```
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "concurrently": "^6.2.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.6"
```

## Features

- Registration and protected login as editor or admin
- Create, read, edit and delete updates (editor and admin)
- Updates saved in MondoDB
- Admin can register a new user as editor or admin

## Video demo

https://user-images.githubusercontent.com/73915239/156864194-337ecd3f-7e5b-4b1c-bfc5-d9d03db6eedc.mp4


## Setup

Clone this repository to your desktop and `run npm install` to install all the dependencies.

Once the dependencies are installed, you can run `npm run dev` to start the application. You will then be able to access it at localhost:3000.

## Room for Improvement

To do:

- Add a datepicker to the form that displays a calendar along with a date input field
- Display some message for the user to know they are logged out (when JWT expires). At the moment they are just being redirected to login page.
