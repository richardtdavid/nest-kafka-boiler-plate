# NESTJS API BOILER-PLATE

This is a boiler-plate to setup an api using nestjs. This boiler-plate features:

- endpoints for api health

**Note**: `This is a boiler-plate`

## Tech

- nestjs
- kafkajs
- date-fns
- pg
- typeorm
- express
- typescript

## Setup

Begin setup by installing the dependencies:

```
yarn
```

To run the API, begin by running `docker-compose`.

```
docker-compose up --build
```

This should:

1. start up the postgres database
2. run flyway to apply the _same_ migration files that captain would apply
3. start the API in development mode - automatic restart on file changes
4. start zookeer
5. start kafa broker
6. start kafkadrop ui 

### Testing

You can run `unit` tests:

```
yarn test
```

You can also run a small set of _integration_ tests:

**Note**: only try these commands locally while running this project's `docker-compose.yml`

```
yarn test:e2e
```

## Deployments

Deployments follow this approach:

1. `dev` environment ⇚ `develop`
2. `stage` environment ⇚ `master`
3. `prod` environment ⇚ tag on `master`

Feature development can be performed in a `f/*` branch. Any branch prefixed with `f/` will:

1. perform compilation checks
2. run the unit tests

## Environments

- dev
- stage
- production
