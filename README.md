# CS465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The Angular project structure is different from that of Express HTML customer-facing page because Angular is very reusable and maintainable. Angular uses components, services, and modules. Angular is good for client-side administration with SPA. Express is much better suited for server-side multi page applications. Express usually has model, views, and controllers for their set up of an application, which is much more straight forward. They both have their advantages and disadvantages when coming to making a web application.

## Why did the backend use a NoSQL MongoDB database?
NoSQL Databases have many advantages such as flexible data models, they scale horizontally, fast queries, and easy to work with.

# Functionality

## How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
JSON transmits data from the backend of the server to the frontend. JSON is used for the main purpose of storing data. JavaScript can have functions JSON cannot. JSON is supported by many languages but JavaScript is not.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
One instance is when we started using the database instead of having everything hard coded into the website. This made it easier to edit, and create new trips when needed. This would be very beneficial in a real website because it makes it easier for the administration to create and delete trips as well has maintain what is up on the website.

# Testing

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
I used Postman to make sure that the endpoints were secure and the HTTP requests were what they should be. The GET, POST, PUT, and DELETE requests are used to retrieve, modify, and create things on the database. The backend takes care of what has to be done when receiving these requests. Endpoints show the admin and end user what needs to be shown on the website. The endpoint transmits data from the user of the endpoint to the server side of the application. Endpoints should also be tested and show errors when they occur. Security is done by making sure the user has access to their role in the application. An example would be to have an admin have the delete, create, and edit buttons when they login. A normal user would only be allowed to book or view the trips. This allows for people to be authenticated and not allow for bad actors to infiltrate the system and wreak havoc.  

# Reflection

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has helped a lot with my professional goals. Before this class I would say I still did not understand how everything came together in a web application but now I have a better grasp of the concept. I learned a lot of problem solving and troubleshooting skills in this project. The project was a great way to figure many things out and learn about MEAN applications. It showed me exactly all the steps needed to make a web application, and what would work at a real-world level. I think knowing these things have made me more marketable but there is always more to learn and I will try to hone my skills so that I can become someone that is very marketable.
