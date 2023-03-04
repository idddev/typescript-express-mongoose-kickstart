FROM node:latest

# Instalar dependencias
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Transpilar código fuente
RUN npm run build

# Exponer puerto
EXPOSE ${SERVER_PORT}

# Iniciar la aplicación
CMD ["npm", "start"]
