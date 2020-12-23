FROM node:alpine
ENV CI=true
 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
 
CMD ["npm", "start"]

# docker build -t yinglu91/ts-auth1 .