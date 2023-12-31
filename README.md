# JAA's Personal Portfolio, 2024
My personal portfolio built with Next.js and developed in a Docker container.

- bootstrapped with NextJS with `tailwindcss`. 
- `.devcontainer` is for Dev container in VS Code.
- `.docker`  contains Docker files

# Development

## Requirements:
- Docker Desktop installed
- VS Code with Dev Containers extension

## Initialize:
- To start developing, clone this repository using `git clone <url>`
- Open the repository in VS Code and run `docker compose up -d` in terminal
- On the lower-left of VS Code, click the "><" button and select "Reopen in Container"
- To restart the server, just restart the docker container

**Note** that if there are changes in the docker files, run `docker compose build` then `docker compose up -d`. 