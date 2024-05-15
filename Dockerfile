FROM node:lts-alpine
# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal

ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./", "tests/mainPageTests.spec.js/"]
RUN npm install --production --silent && mv node_modules ../
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]



 




