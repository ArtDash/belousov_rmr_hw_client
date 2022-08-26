FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/etc/nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/build .
EXPOSE 8000
ENTRYPOINT ["nginx", "-g", "daemon off;"]