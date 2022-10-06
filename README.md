# **Cartographic Time Travel**

 Vintage maps provide the one of the best ways to glimpse the past.  They are models of world inhabited by people generations ago.  Leading craftsmen of those times created these artifacts for practical purposes, but now, surviving examples occupy a different category of human experience:  Art. My fascination with these artifacts are the origin point for this initial exploration of the creating, reading, updating, and deleting functionality so critical to the modern web development.  This project renders the beginnings of a basic online store dedicated to these artifacts.  

## **The Stack**
 In addition to Javascript this project uses MERN stack components.  NodeJS contributes server architecture, Express is the router framework for seven basic routes defining the functionality of the application.  React unifies and expresses the HTML and CSS of the front end of the application.The database is MongoDB.  

## **Application Structure**
The structure of the application uses the INDUCES conventions.  These conventions, combined with the powerful MERN stack components allows for efficently scalable utility for a user. The main display page for the maps is the Index and images of the maps that link to show pages for closer inspection.  The index also has to a page where an operator can enter data for a new map into the database for display on the index page.  
The show pages for individual maps has a link to an edit page to update the data in the database.  In addition the show pages have a currently nonfunctional 'buy' button and a functional 'delete' button that removes a map from the database.  There is also a conditionally rendered 'OUT OF STOCK' message that replaces the 'buy' button when inventory of a product is depleted.
## **Deployment and Credit**
This application was developed to as a capstone to the second curriculum module in the Per Scholas Web Development course and the code is heavily based on concepts covered in this module.  The application is currently deployed through the hosting service Cyclic and is linked [here](https://cartographictimetrave.cyclic.app/).






