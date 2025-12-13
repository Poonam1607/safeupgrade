FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY scan.js . 
COPY upgrade.js .
COPY test.js .
COPY final_report.js .

RUN npm install

CMD ["sh", "-c", "node scan.js && node upgrade.js && npm test && node final_report.js"]