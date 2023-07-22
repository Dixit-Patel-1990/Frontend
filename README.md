
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

## Authors
- [@Dixit Patel](https://github.com/Dixit-Patel-1990/Docker)