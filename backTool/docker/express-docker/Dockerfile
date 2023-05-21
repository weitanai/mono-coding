FROM node:16

# Create app directory
COPY . .


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

WORKDIR /

# Bundle app source

EXPOSE 8099
CMD [ "node", "server.js" ]