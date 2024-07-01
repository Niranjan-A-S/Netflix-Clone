FROM node:20.14-alpine as base

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package*.json .

RUN yarn install

EXPOSE 3000

FROM base as builder

WORKDIR /app

COPY . .

RUN npx prisma generate

RUN yarn build

FROM base as production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder  /app/.next ./.next

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/public ./public

CMD ["yarn", "start"]
