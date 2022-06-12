# Nadia

Garden Reservation, Project from Linkedin Learning Course

The intention of this project was to learn how to improving my knowledge of testing and code quality

## Getting Started

```
npm install
npm start
```

The database is SQLITE3 that is run in a docker container, and the volume for the docker container is stored in dev.sqlite3.db

## Development

This project uses [EditorConfig](https://editorconfig.org) to standardize
text editor configuration.

## Lessons Learned

- For private shareable configs
  - Don't use Git submodules
  - Instead use git+ssh to add, thereby allowing you to use other repositories like a module
    - npm install git+ssh://git@github.com/ORG/eslint-config-NAME.git#TAG
- Linting Goals in Existing Project
  - Eliminate fatal errors
  - Avoid trying to fix all errors and warnings at once
    - Screws up file history
    - Inadvertenly cause bugs
  - Leave code better than you found it
