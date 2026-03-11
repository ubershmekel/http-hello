# http-hello

A minimal Node.js HTTP server that responds with `<html><body>hello</body></html>`.

## Requirements

- Node.js (any modern version) — for running locally
- Docker — for running in a container

## Run locally

```bash
node server.js
```

Server starts on port `3000` by default. Override with the `PORT` environment variable:

```bash
PORT=8080 node server.js
```

## Run with Docker

Build the image:

```bash
docker build -t http-hello .
```

Run the container:

```bash
docker run -p 3000:3000 http-hello
```

Override the port:

```bash
docker run -e PORT=8080 -p 8080:8080 http-hello
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
.
├── server.js    # HTTP server
├── Dockerfile   # Container definition
└── README.md
```
