
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
COPY index.ts ./
RUN chown -R node:node ./
USER node
RUN npm install --no-optional && npm cache clean --force
RUN npx tsc index.ts
CMD ["npm", "run", "dev"]