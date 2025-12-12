FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY scan.js . 
COPY upgrade.js .
COPY test.js .

RUN npm install

CMD ["sh", "-c", "node scan.js && node upgrade.js && node test.js"] 