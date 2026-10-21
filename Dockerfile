# ------------------------------------------------------------
# Dockerfile -------------------------------------------------
#
# docker build -t hapi . 
# && 
# docker run -it --rm -d -v $(pwd):/workspaces/hapi-dummy -p 3000:3000 --name hapi hapi bash 
# && 
# docker exec hapi yarn install 
# && 
# docker exec hapi yarn serve
# ------------------------------------------------------------
FROM node:14
ENV NODE_ENV development

# Necessary modules
# RUN apk add git
# RUN yarn install
# RUN yarn install --production --silent

# Mount/Copy Project asset
VOLUME /project
WORKDIR /project
# COPY ["package.json"]
# COPY . .

# Starting
EXPOSE 3000


