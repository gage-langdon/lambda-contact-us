# lambda-contact-us
Send contact-us emails easily with this micro-service using an AWS Lambda and the Serverless framework. 

![alt text](http://i68.tinypic.com/16at84n.png)

### Quick Start Into Production
(Assuming you already have serverless configured with AWS)
 1. Pull down project
 2. Configure email credentials in config.yml
 3. Install dependencies (`npm install`)
 4. deploy (`npm run deploy`)
 
### API Documentation
 ```
  POST /sendContact
   Body: 
     name: String
     email: String
     message: String
   Response:
     Success:
       statusCode: 200
       body: {success: true}
     Failure:
       statusCode: ~400
       body: Error Message
 ```
 ### Debug
  - run locally `npm run start` 
  
 ### Dependency Documentation
   - [Serverless](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
   - [Nodemailer](https://nodemailer.com/about/)

### Package Notes
Written in es6+; using babel to transpile to AWS Lambda Node version 6.10.
Package comes with ESLint and Git pre-commit support

### Contributions
Contributions, issues, and feature requests would be awesome, just submit an issue or PR! :)
