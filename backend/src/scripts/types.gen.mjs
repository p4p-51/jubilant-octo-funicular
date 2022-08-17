/**
 * Script used to convert OpenAPI schema into typescript types
 */


import * as fs from "fs";
import openapiTS from "openapi-typescript";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Docs",
      version: "1.0.0",
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./src/**/*.ts"], // files containing annotations as above
};

const spec = swaggerJsdoc(options);

const generate = async () => {
  const output = await openapiTS(spec, {
    prettierConfig: "./.prettierrc.json",
  });

  fs.writeFile("./src/interfaces/api.ts", output, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

generate();
