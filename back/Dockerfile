FROM node:15
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install
RUN npm run build-ts
CMD ["node", "build/app.js"]