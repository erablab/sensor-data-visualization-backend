FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

WORKDIR  mkdir -p /usr/src/app/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
