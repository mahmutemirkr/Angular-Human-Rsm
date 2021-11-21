const {writeFile} = require('fs');

require('dotenv').config();

const isProd = process.env.NODE_ENV == "production";

const targetPath = isProd
?'./src/environments/environment.prod.ts'
:'./src/environments/environment.ts';

const envFileContent = `
export const environment = {
    production: ${isProd},
    BASE_URL: "${process.env.BASE_URL}"
  };
`;

writeFile(targetPath, envFileContent, (err)=>{
    if(err){
        throw console.error(err);
    }
})