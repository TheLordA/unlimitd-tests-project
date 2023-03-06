FROM node:16.13-slim as builder

WORKDIR /app

COPY package.json package-lock.json ./

COPY . ./

RUN npm install 
RUN npm run build


FROM node:16.13-slim
ENV TZ="Europe/Paris"

WORKDIR /app

COPY --from=builder /app .

EXPOSE 4000 3001

CMD ["npm", "run", "prod"]
