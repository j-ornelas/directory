FROM node:10-alpine
WORKDIR /usr/directory-server/
RUN npm install --global nodemon typescript
COPY package*.json /usr/directory-server/
RUN npm install
COPY . /usr/directory-server/
EXPOSE 3000
CMD ["npm", "start"]
