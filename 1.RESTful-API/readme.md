# RESTful API

1. RESTful API
   Our commerce services need an interface where it bridges between frontend and data source, so we decided to have a RESTful API where it supports bellowing pages.

Pages
Registration page is where new member can start their membership.
Fields submitted: email, password, name, date of birth, gender and address, subscribe to newsletter.
Profile page is where we can see their information.
Fields to display: email, name, age, gender, address and subscribe to newsletter.
Edit profile page is where members can update their information.
Fields allowed to edit: date of birth, gender, address and subscribe to newsletter.
Members can delete their account regarding PDPA policy.
Password change page is where members can set their new password by entering current password and following with new password and confirmation.
Requirements
Your program will serve a RESTful API.
Your API will be called via an HTTP client, e.g.: Postman, curl.
No need to connect to the database.
Authentication should be verified from header "Authorization" with mock value e.g.: Authorization: Bearer faketoken_user1
Validation have additional score.

## Installation

Use the package manager npm to install.

```bash

git clone https://github.com/teekawat-dev/teekawat-server-side-challenge.git

npm install

```

## RUN

```bash

npm run build

npm run start


```

## POSTMAN

[Postman](./Postman.json) 

- Open Postman.
- Select File > Import > Upload files.
- Open the Account Check JSON file that you have downloaded and extracted.
- Select Import.
