# Picture Swarm: A User-Generated Stock Photography Site

## Project Links

- [PictureSwarm.com](http://pictureswarm.com/)

- [Heroku Deploy](https://picture-swarm.herokuapp.com/)

- [Trello Board](https://trello.com/b/o5BEvcB9/picture-swarm)

## Overview
For my capstone project, I created a user-generated stock photography site.

When users arrive on the site, they can browse through photos or search for a specific item. If a user has an uploader account, he/she can add new pictures, which upload to the Clouindary API service and storage. Once the image is created, the uploader is able to edit or delete the image, as well as add new tags, and remove those tags. At each step of the process, Devise Auth tokens are used to ensure that only the uploader has access to these site elements. 

### User Accounts

The user tiers are as follows:
* Not Signed In
* Basic User
* Uploader
* Admin (Future Development)

Even if a user is not signed in, he/she can come to the site, see the available photos, and search through the photos. At the point when a user goes to an individual photo's show page, he/she is invited to sign up or log in before downloading the high-res image. 

Once signed in with a basic user account, the user may download images at will. 

If a user has an Uploader account, he/she is able to create new photos via image upload, edit them, delete them, and add the appriate tags, or delete tags if necessary. 

Though the admin view does not currently exist, future development plans would allow an admin to go in, modify a user's account type, and see download data for the pictures.

### Search

Currently search operates through title and description using built in functionality from Active Record and PostgreSQL. Fuzzy search options are coming to future versions using the gem textacular. 

### Image Upload
Using the Cloudinary API, images are uploaded to their service, and once successfully uploaded, the secure URL is stored on the object itself. Future development includes using Cloudinary's API to return low-res thumbnail previews only when not signed in, in addition to watermarking images for not signed in. 

## Technologies Used

* HTML5
* CSS3
* Bootstrap
* Javascript
* React
* Rails
* Devise
* Postgresql
* Design - Sketch, Bootstrap
* Project Planning & User Stories - Trello
* Visual Studio Code


## Wireframe


### Sketch wireframes

![Wireframe 1](https://res.cloudinary.com/pictureswarm/image/upload/v1505662048/Picture-Swarm-Homepage_wxvw3c.png)

![Wireframe 2](https://res.cloudinary.com/pictureswarm/image/upload/v1505662112/PictureSwarm-ShowPage_po1tjx.png)

<!-- ## Future Development

*
*
* -->