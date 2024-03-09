FROM node:20
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npx", "tsc", "-w", "node", "index.js"]