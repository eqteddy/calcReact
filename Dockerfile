FROM node:18-alpine as BUILD_STAGE
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as FINAL_STAGE
COPY --from=BUILD_STAGE ./app/dist/ /usr/share/nginx/html
EXPOSE 80 
CMD [ "nginx" , "-g", "daemon off;" ]