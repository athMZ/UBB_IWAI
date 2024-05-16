FROM node:20-alpine AS prod
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=prod /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
