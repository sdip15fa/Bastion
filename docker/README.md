# Deploy with docker compose

## Setup

```bash
cp settings.example.yaml settings.yaml
cp .env.example .env
```

Please configure everything in both `settings.yaml` and `.env`.

## Start

### Build from source

```bash
docker-compose up -d --build
```

### Use a prebuilt image

```bash
docker-compose up -d
```
