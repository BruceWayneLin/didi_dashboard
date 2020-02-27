FROM node:10.14.1-alpine as didi-server
WORKDIR app
COPY . ./
RUN cd ./ && npm install
RUN cd ./client
RUN npm install
# RUN npm install -g @vue/cli
RUN npm rebuild node-sass --force
RUN npm run build
EXPOSE 5000
# COPY ./wait-for-it.sh ./wait-for-it.sh
# RUN chmod +x ./wait-for-it.sh
CMD ["npm", "run", "start"]