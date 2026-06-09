FROM node:24-alpine

# 1. Create and switch to a dedicated app directory
WORKDIR /app

# 2. Copy dependency files first
COPY package.json package-lock.json ./

# 3. Install dependencies inside /app
RUN npm install

# 4. Copy your source code AFTER installing dependencies
COPY index.js index.js

CMD ["node", "index"]