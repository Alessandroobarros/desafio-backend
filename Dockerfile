FROM node:14.18.1-alpine

# RUN apk add --update --no-cache tzdata
# ENV TZ=America/Bahia

WORKDIR /api

ENV PORT=3000

EXPOSE 3000

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]
RUN npm install --production --loglevel verbose

COPY . .

CMD ["node", "server.js"]
