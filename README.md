
# Frontend Docker Project


[1. For more docker commands and information](https://github.com/Dixit-Patel-1990/Docker)

[2. How to run this project](#Frontend_With_Docker)

# Frontend_With_Docker

To run react app inside docker container in your local follow following steps,

#### 1. Create an account on https://hub.docker.com/

#### 2. Download Docker desktop and make sure engine is running. We can verify it by running following command on console,
```cmd
docker version
```
This should print something on console.

#### 3. Clone this app by running
```cmd
git clone https://github.com/Dixit-Patel-1990/Frontend.git
```

#### 4. To create container from Dockerfile.dev
```cmd
docker build -f Dockerfile.dev -t dixitpatel1008/frontend .
```

In the command above we are doing two things,

    1. By default docker build command expects "Dockerfile" that we do not have on PWD so we explicitly need to tell docker by "-f" flag that use "Dockerfile.dev"

    2. With "-t" we are tagging our build with <my_docker_id>/<container_id> so that we do not have to run "docker ps" command to get container id and than run the container.

#### 5. Run the app on localhost:3000 by starting the docker container through following command,
```cmd
docker run -p 3000:3000 dixitpatel1008/frontend
```

In this command we are mapping port inside container(right side of colon) to the outside port(your localhost(leftside of colon))

#### 6. Open browser window and type "localhost:3000" you should be able to see the app.

Till this point of time the app will not reload the realtime data but it will just load data stored while creating a build inside container.

To refresh the app in realtime for development purposes we need to use "docker volume" for that we have 2 options.
    
##### 1. Change the docker run command to make use of docker volume like below
```cmd
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app dixitpatel1008/frontend
```

We can also use "./" instead of "$(pwd)"

##### 2. Create docker-compose.yml file and add docker volume in there.

```cmd
version: '3'
services:
  web:
    build: 
      context: ./
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - ./:/app
```

use command below to run the container through docker-compose
```cmd
docker-compose up
```

Till this point we are able to get realtime data on localhost:3000 but this is still not perfect.

If we want to run test files of our application if we overwrite default command of "npm run start" by

```cmd
docker build -f Dockerfile.dev dixitpatel1008/frontend .

docker run -it dixitpatel1008/frontend npm run test
```

It will run all the exisiting test cases. If we add or remove tests it will not update number of tests in realtime because we have created specific container to run test cases by running above two commands that does not have "docker volume setup". So to update the test results in realtime as we add or remove tests we have two ways 

    1. Setup container inside docker-compose.yml that essentially runs our test cases with "docker  volume" setup so that anytime we update test cases it will reload. use command "docker-compose up --build" to run all containers

    - There is a downside to this approach. we can not pass additional commands to our terminal to run specific test cases.

    2. Run "docker-compose up" than open new terminal window than run "docker ps" to get running containers and to pass additional commands to running container use "docker exec -it <container_id_from_docker_ps> npm run test" this will give you relatime update without "docker volume" setup.

    - Downside to this approach is we need to remember commands and procedure.

## Authors
- [@Dixit Patel](https://github.com/Dixit-Patel-1990/Docker)
