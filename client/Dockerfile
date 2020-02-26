FROM node:10.14.1-alpine as didi-stage
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]