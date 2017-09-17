# Picture Swarm: A User-Generated Stock Photography Site

## Project Links

- [PictureSwarm.com](http://pictureswarm.com/)

- [Heroku Deploy](https://picture-swarm.herokuapp.com/)

- [Trello Board](https://trello.com/b/o5BEvcB9/picture-swarm)

## Overview
For my capstone project, I created a user-generated stock photography site.

When users arrive on the site, they can browse through photos or search for a specific item. 

When players come to the site, they are greeted with a deal button which, when clicked, deals four cards at random. Two cards are the player's cards and are shown face up. Two cards are the dealer's cards, but only one is shown face up.

### Game Play

The player may either hit or stay. Hitting deals another random card. Staying keeps the number of points they have. Point totals are displayed below the respective hands.

Once the player finishes, the dealer plays. The dealer automatically takes cards until it reaches 17 or higher. 

### Scoring
If either the player, or the dealer reaches 21 with their initial 2 cards, it is known as a blackjack, and play stops immediately. 

A hand totalling 22 points or higher is known as a bust, and is an immediate loss. 

## Technologies Used

* Languages - HTML5, CSS3, Javascript, jQuery
* Design - MockingBird, Materialize
* Project Planning & User Stories - Trello
* Visual Studio Code

## Features

* Deal button deals cards AND resets game
* Customizable background using CSS Variables
* Sound effects for buttons and win/loss
* Win/Loss counter 
* Responsive Design
* AI (Player Vs. Computer/Dealer)

## Wireframe




### Sketch wireframes

![Wireframe 1](https://res.cloudinary.com/pictureswarm/image/upload/v1505662048/Picture-Swarm-Homepage_wxvw3c.png)

![Wireframe 2](https://res.cloudinary.com/pictureswarm/image/upload/v1505662112/PictureSwarm-ShowPage_po1tjx.png)

## Future Development

* Create a Split Hand feature when player has two cards of the same value. 
* ~~Create a betting option where player can wager money and win or lose.~~ - DONE
* Updating betting for variable bet options. 
* Updating betting for interactive betting (doubling a bet on first two cards).