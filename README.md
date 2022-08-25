# smart-invitation

## Goal

In this example application, we have a simple form (HTML). The idea is to hook up the form with the data and send a request to generate an invitation.
Once the invitation is created, we want to see a message stating that the invitation is being generated. At this point, we want to start a polling service that will check if the newly created invitation has a value for `invitationUrl`.
Once we have this value, the polling service should stop and the message will be updated with the correct `invitationUrl`

### Steps

- Get the current `user`'s data to pre-fill the form. (`firstName` and `lastName`)
- Fetch the companies to display their names in the dropdown.
- Hook up the form with the data.
  - The data model for this form will be `invitation` and should be posted after all fields are filled.
  - `firstName` and `lastName` will be pre-filled.
  - Link the selected `company` to the `invitation`.
  - Block the form from being sent withouth the **terms of service** agreement checkbox being checked.
- After the form is sent, show a confirmation message (you can use [this markup](#Confirmation-markup))
- You will see that the record is created, but the `invitationUrl` is empty. This will be populated after some time. Therefore we need to start a polling service. Keep polling every second untill the `invitationUrl` is populated.
- Once we have the `invitationUrl`, change the title, and swap out the content in the `card-body` for new content incluing the `invitationUrl`

### Bonus

- Make resolve any deprication warnings (if any show up)
- Write a basic test to cover the functionality
- Fetch the current user dynamically (there are 5 users in the DB)

### Example

Please see below an example of a working application.

<img src="./example.gif">

### Confirmation markup

```html
<div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
  <div class="wrapper wrapper--w790">
    <div class="card card-5">
      <div class="card-heading">
        <h2 class="title">Your invitation is being generated</h2>
      </div>
      <div class="card-body">
        <p class="text">
          You invitation is being generated, this page will be updated with the details of the invitation soon
        </p>
        <div class="d-flex justify-center">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="p-t-20">
          <a href="/" class="btn btn--radius-2 btn--red">Back</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## React

This project has been initated with [create-react-app](https://create-react-app.dev/).
All API requests are caught by [MSW](https://mswjs.io/docs/)

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd smart-invitation-react`
- `yarn install`

## Running / Development

- `yarn start`
- Visit your app at [http://localhost:3000](http://localhost:3000).
