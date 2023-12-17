
# ********** BASE **********
FROM node:21-alpine AS base
RUN apk update && apk upgrade && apk add git
WORKDIR /app

# ********** DEPENDENCIES **********
FROM base AS deps
COPY package*.json /app/
RUN npm install
ENV NEXT_TELEMETRY_DISABLED 1

# ********** DEVELOPMENT **********
FROM deps AS dev
CMD ["npm", "run", "dev"]

# ********** INTERMEDIATE **********
FROM deps AS inter
COPY . .
EXPOSE 3000

# ********** PRODUCTION **********
FROM inter AS prod
RUN npm run build
CMD [ "npm", "start" ]
