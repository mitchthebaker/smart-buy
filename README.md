# Smart-buy 

Welcome! This repository is set up with react client, Node.js REST API, and PostgreSQL database. 

## Setup

### Clone the project  

### cd into ./api-gateway and create .env file 

Inside .env, add:

```
  NODE_ENV=development
  PORT=3001

  PG_USER=admin
  PG_HOST=server_db
  PG_DB=db
  PG_PASSWORD=secret
  PG_PORT=5432
```
### cd into ./client-app and create .env file 

Inside .env, add:

```
  NODE_ENV=development
  REACT_APP_API_GATEWAY_URI=http://localhost:3001
```

### Update env variables in docker-compose.yml

```
  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4
    environment: 
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: secret
      PGADMIN_LISTEN_PORT: 80
    ports: 
      - "3201:80"
```

### Next, add a new server in pgadmin to perform queries against the database. 

Open up pgadmin at http://localhost:3201

Login with the credentials 
- PGADMIN_DEFAULT_EMAIL
- PGADMIN_DEFAULT_PASSWORD

Next, click on `Add New Server`

[Image for Add New Server](https://imgur.com/CFD67lu)

In the modal that pops up, enter a name under the General tab. 

[Image for Name in General Tab](https://imgur.com/kqWAy8r)

Click on the `Connection` tab

For `Hostname/address`, set this to `server_db` which is the container_name for server-db in docker-compose.yml. 

Next, for the port input 5432

Then, update the `Username` to `admin`.

Then, update the `Password` to `secret`.

Lastly, click save. 

[Image for Updating Connection Tab](https://imgur.com/WNdLtwQ)

### If you haven't already install docker-compose here

https://docs.docker.com/compose/install/

start the app with `docker-compose up` 

react - http://localhost:3000
nodejs - http://localhost:3001
psql - http://localhost:3201