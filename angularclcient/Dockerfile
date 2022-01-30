FROM node:latest
WORKDIR /src
ENV PORT 80
ENV NODE_ENV=production
COPY package.json package-lock.json /src/
RUN npm install --production
COPY . /src
RUN rm -rf node_modules
RUN npm install express
#COPY --from=BUILD_IMAGE /cd usr/src/app/dist ./dist
#COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
CMD ["node", "server.js","--proxy-config", "proxy.conf.json"]

# stage 2
