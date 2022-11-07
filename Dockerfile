FROM node

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

WORKDIR  /usr/src/app/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3100

CMD ["node", "index.js"]



