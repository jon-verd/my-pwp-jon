# https://github.com/BretFisher/node-docker-good-defaults/blob/69c923bc646bc96003e9ada55d1ec5ca943a1b19/Dockerfile
FROM node:16
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9230
RUN mkdir /home/node/app
WORKDIR ./home/node/app
COPY tsconfig.json ./
COPY package.json package-lock.json ./
RUN chown -R node:node ./
USER node
RUN npm install --no-optional && npm cache clean --force
CMD ["npm", "run", "dev"]