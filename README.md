# ToDo List MongooDB NodeJS Backend API

This Repository contains a Project which has the MondoDB Node Backend for ToDo List.\
This Project is created using a Modular approach, where various functionalities are divided into various Modules.

# Api End Points:

The Endpoint to get All the Tasks is:

    /todoList/tasks

Here, if only /todoList/tasks endpoint is used, then we will get all the Tasks.

The Endpoint to get a single Task or multiple Tasks using Query Parameters is:

    /todoList/tasks?QueryParameter=Value

    /todoList/tasks?QueryParameter1=Value1&QueryParameter2=Value2

Here, if there are any Query Parameters after the /todoList/tasks endpoint, then we will get the Tasks which will match those Query Parameters.

The Endpoint to get a single Task or multiple Tasks or all Tasks using Select Query Parameters is:

    /todoList/tasks?QueryParameter=Value&select=Value

    /todoList/tasks?select=Value

Here, if there are any Select Query Parameters after the /todoList/tasks endpoint, then we will get the Tasks which will contain only those matching fields.\
We will have to use the **select** keyword to specify the select query values.

The Endpoint to get a single task by Id is:

    /todoList/tasks/taskId

Here, the taskId will be replaced by the actual Id which will be used to search for the Task.

The Endpoint to create a new task is:

    /todoList/tasks

The request body for the post request to create a new Task will contain the JSON data.

The Endpoint to delete a task by Id is:

    /todoList/tasks/taskId

Here, the taskId will be replaced by the actual Id which will be used to search for the Task to be deleted.

The Endpoint to update/patch a task by Id is:

    /todoList/tasks/taskId

Here, the taskId will be replaced by the actual Id which will be used to search for the Task to be updated.\
The request body for the patch request to update a Task will contain the JSON data.

# Data Source:

The Tasks Data is stored in a MongoDB Database.\
Currently, a local MongoDB is used for Storing the Data.

# Main Component:

The Main Component is responsible for starting the Node Express Server on Localhost at the specified Port Number.\
The other function of the Main Component is to redirect any request on "/todoList/tasks" to the Routes Component.

# Routes Component:

The Routes Component is used to process any request received on "/todoList/tasks".\
Depending on the request route(path) & the http request type, the router will redirect the process to it's equivalent Controllers.

# Controllers Component:

The Controllers Component is used to process the request, perform some operations depending on the type of request, & sending back a response, either a Success Response or an Error Response.\
The Controller for the Endpoint "/todoList/tasks" will return all the Task Objects if the Tasks are present, otherwise it will return an Error Message.\
It can also take additional Query Parameters as well as Select Query after "/todoList/tasks" Endpoint.\
If the Task Object or multiple Task Objects have the matching Query Parameters, then those Task Objects are returned, otherwise it will return an Error Message.\
If the request has Select Query in it, then the Task Object will only have those matching Fields in the Response.\
The Controller for the Endpoint "/todoList/tasks/blogId" will return the Task Object with matching Id if the Task is present, otherwise it will return an Error Message.\
The Controller for the Endpoint "/todoList/tasks" will create a new Task Object if the request body is valid, otherwise it will return an Error Message.\
The Controller for the Endpoint "/todoList/tasks/blogId" will delete the Task Object with matching Id if the Task is present, otherwise it will return an Error Message.\
The Controller for the Endpoint "/todoList/tasks/blogId" will update/patch the Task Object with matching Id if the request body is valid & if the Task is present, otherwise it will return an Error Message.\
The Controllers use Helper Functions to generate a Success Message or an Error Message.

# Helper Functions Component:

The Helper Functions Component will be used to provide various helper functions to the Controllers.\
The Send Response Helper Function will generate a Response Message for a Successful Request.\
It takes the Status Code, Message & Blog Data as Parameters to generate the Response Message.\
The Send Error Helper Function will generate a Response Message for an Unsuccessful Request.\
It takes the Error Object as the Parameter to generate the Error Message.\
The App Error Class Helper Function will generate an Error which will be used by the Send Error Helper Function.\
It takes the Status Code, Error Status & Message as Parameters to generate an Error Object.

# Middlewares:

The Validation Middleware is used to check if the Request Body is Valid or not.\
If it's valid, then the Execution continues, otherwise it will return an Error Message.

<!-- # Demo: -->

<!-- Live Demo of the NodeJS Blogs Backend API can be found here:\
https://node-todoList-backend.herokuapp.com/todoList/tasks/ -->
