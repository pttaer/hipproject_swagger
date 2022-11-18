const express = require('express')
const app = express();
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const port = process.env.PORT || 5000

//=========================================================================================================================================================
//API ROUTES

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'Customer API',
            description: 'Customer API Information',
        },
        contact: {
            name: 'Amazing Developer'
        },
        servers: [{
            url: 'https://hipproback.herokuapp.com'
        }
        ],
    },
    // ['.routes/*.js]
    apis: ['document/user.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Routes

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - name
 *                  - username
 *                  - password
 *                  - email
 *                  - skillset
 *                  - uni
 *                  - bio
 *                  - phone
 *                  - avatar
 *              properties:
 *                   name:
 *                      type: string
 *                      description: The name of the user
 *                   username:
 *                      type: string
 *                      description: The username of user
 *                   password:
 *                      type: string
 *                      description: User's password
 *                   email:
 *                      type: string
 *                      description: Email of the user
 *                   skillset:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: Skills of the user
 *                   uni:
 *                      type: string
 *                      description: University of user
 *                   bio:
 *                      type: string
 *                      description: Short description that user describe him/her self
 *                   phone:
 *                      type: number
 *                      description: Phone numbers of user
 *                   avatar:
 *                      type: string
 *                      description: User's avatar
 *              example:
 *                      name: Hai Anh
 *                      username: Nguyen Vu Hai Anh (K16 HCM)
 *                      password: 123
 *                      email: haianh12122002@gmail.com
 *                      skillset: [Front End, Back End]
 *                      uni: FPT
 *                      bio: I'm Vengence
 *                      phone: 921202845
 *                      avatar: https://i.postimg.cc/BbmqGfkR/My-project-12.jpg
 */

/**
 * @swagger
 * components:
 *      schemas:
 *          Project:
 *              type: object
 *              required:
 *                  - name
 *                  - location
 *                  - startDate
 *                  - endDate
 *                  - shortDesc
 *                  - field
 *                  - uni
 *                  - amount
 *                  - desc
 *                  - userID
 *                  - application
 *                  - participant                 
 *                  - status
 *              properties:
 *                   name:
 *                      type: string
 *                      description: The name of the user
 *                   location:
 *                      type: string
 *                      description: The username of user
 *                   startDate:
 *                      type: string
 *                      description: User's password
 *                   endDate:
 *                      type: string
 *                      description: Email of the user
 *                   shortDesc:
 *                      type: string
 *                      description: University of user
 *                   field:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: Skills of the user
 *                   uni:
 *                      type: string
 *                      description: Short description that user describe him/her self
 *                   amount:
 *                      type: string
 *                      description: Phone numbers of user
 *                   desc:
 *                      type: string
 *                      description: User's avatar
 *                   userID:
 *                      type: string
 *                      description: User's avatar
 *                   application:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: Skills of the user
 *                   participant:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: Skills of the user
 *                   status:
 *                      type: string
 *                      description: User's avatar
 *              example:
 *                      name: The dream house project
 *                      location: Ho Chi Minh
 *                      startDate: 16/12/2022
 *                      endDate: 16/1/2023
 *                      shortDesc: The project to build house for homeless people
 *                      field: [Architech, Software]
 *                      uni: FPT
 *                      amount: 
 *                      participant: [Hai Anh, Huu Thanh]
 *                      status: accepted
 */

/**
 * @swagger
 * components:
 *      schemas:
 *          Application:
 *              type: object
 *              required:
 *                  - prjId
 *                  - applicantId
 *                  - prjName
 *                  - userField
 *                  - prjField
 *                  - userUni
 *                  - prjDescription
 *                  - status
 *              properties:
 *                   prjId:
 *                      type: string
 *                      description: The name of the user
 *                   applicantId:
 *                      type: string
 *                      description: The username of user
 *                   prjName:
 *                      type: string
 *                      description: User's password
 *                   userField:
 *                      type: string
 *                      description: Email of the user
 *                   userUni:
 *                      type: array
 *                      items:
 *                          type: string
 *                      description: Skills of the user
 *                   prjDescription:
 *                      type: string
 *                      description: University of user
 *                   status:
 *                      type: string
 *                      description: Short description that user describe him/her self
 *              example:
 *                      prjId: Hai Anh
 *                      applicantId: Nguyen Vu Hai Anh (K16 HCM)
 *                      prjName: 123
 *                      userField: haianh12122002@gmail.com
 *                      prjField: [Front End, Back End]
 *                      userUni: FPT
 *                      prjDescription: I'm Vengence
 *                      status: 921202845
 */

/**
 * @swagger
 * tags:
 *      name: User
 *      description: The user managing API
 */

/**
 * @swagger
 * tags:
 *      name: Project
 *      description: The user managing API
 */

/**
 * @swagger
 * tags:
 *      name: Application
 *      description: The user managing API
 */



/**
 * @swagger
 * /api/prj/getbyid:
 *  get:
 *      description: Use to request a project by id
 *      tags: [Project]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the project Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Project'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/prj/getallprj:
 *  get:
 *      description: Use to request all project 
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/admingetall:
 *  get:
 *      description: Use to request all project by admin
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/getbyuser:
 *  get:
 *      description: Use to request all project of the user id
 *      tags: [Project]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the project user Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Project'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/prj/sortdesc:
 *  get:
 *      description: Use to request all project in sorted descending
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/sortasc:
 *  get:
 *      description: Use to request all project in sorted ascending
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/search:
 *  get:
 *      description: Use to search for a project
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/searchName:
 *  get:
 *      description: Use to search project by name
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Project'
 */

/**
 * @swagger
 * /api/prj/create:
 *  post:
 *      description: Use to create a new project
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/prj/update:
 *  put:
 *      description: Update a project
 *      tags: [Project]
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/prj/approve:
 *  put:
 *      description: Make project status to approved
 *      tags: [Project]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the project Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Project'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/prj/decline:
 *  put:
 *      description: Make project status to declined
 *      tags: [Project]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the project Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Project'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/prj/delete:
 *  delete:
 *      description: Delete a project
 *      tags: [Project]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the project Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Project'
 *          '400':
 *              description: The user was not found
 */



/**
 * @swagger
 * /api/appl/getbyid:
 *  get:
 *      description: get application by id
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/appl/getall:
 *  get:
 *      description: Use to request all applications
 *      tags: [Application]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Application'
 */

/**
 * @swagger
 * /api/appl/getallappl:
 *  get:
 *      description: Use to request all applications from a user
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/Application'
 */

/**
 * @swagger
 * /api/appl/getallrc:
 *  get:
 *      description: Use to request all recieved application from the other user
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/appl/create:
 *  post:
 *      description: Use to create a new application
 *      tags: [Application]
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/appl/accept:
 *  put:
 *      description: Use to accept an application
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/appl/reject:
 *  put:
 *      description: Use to reject an application
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/appl/delete:
 *  delete:
 *      description: use to delete application
 *      tags: [Application]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the application's Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/Application'
 *          '400':
 *              description: The user was not found
 */



/**
 * @swagger
 * /api/user/getbyid:
 *  get:
 *      description: Use to get user by id
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the user Id
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/User'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/user/getbyemail:
 *  get:
 *      description: Use to get user by email
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: email
 *            schema:
 *              type: string
 *            required: true
 *            description: the user email
 *      responses:
 *          '200':
 *              description: A successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                         ref: '#/components/schemas/User'
 *          '400':
 *              description: The user was not found
 */

/**
 * @swagger
 * /api/user/getalluser:
 *  get:
 *      description: Use to get all users in the database
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 *      content:
 *          application/json:
 *          schema:
 *              type: array
 *              items:
 *                  ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/user/create:
 *  post:
 *      description: Use to create a user
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /api/user/update:
 *  put:
 *      description: Use to update a user profile
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 */

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})