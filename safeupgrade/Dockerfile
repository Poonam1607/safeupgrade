FROM node:18-bookworm

WORKDIR /app

COPY scan.js .
COPY upgrade.js .
COPY test.js .
COPY final_report.js .

CMD ["sh", "-c", "node scan.js && node upgrade.js"]