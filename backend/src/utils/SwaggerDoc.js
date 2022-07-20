import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Docs',
      version: '1.0.0',
    },
    security: [
      {
        BearerAuth: []
      }
    ]
  },
  apis: ['./src/**/*Router.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

export default openapiSpecification;
