# Nadia

Garden Reservation, Project from Linkedin Learning Course

The intention of this project was to learn how to improving my knowledge of testing and code quality

## Getting Started

```
npm install
npm start
```

The database is SQLITE3 that is run in a docker container, and the volume for the docker container is stored in dev.sqlite3.db

To get the docker container started, run the following command

```
docker pull keinos/sqlite3:latest

docker run --rm -it -v "$(pwd):/workspace" keinos/sqlite3 sqlite3 /workspace/dev.sqlite3.db

```

\*Note you need to mount the working directory, as a volume to the container

## Development

This project uses [EditorConfig](https://editorconfig.org) to standardize
text editor configuration.

## Testing

This projects uses the [Jest Framework](https://jestjs.io).

To run the tests use the following commands:

```
npm test
```

- The right way vs wrong way to test callbacks

  ```
    function toTest(callback) {
      setImmediate(() => callback('yay'));
    }
    test('the wrong way to test call backs', () => {
      function callback(value) {
        expect(value).toBe('nooo')
      }

      toTest(callback)
    })
  ```

  - why this is the wrong way

    - if the above test was to be used then it would pass, but it should fail, but this method does not handle errors, also the test completes when the function toTest has completed execution and not when the test for comparing values is completed

  - The correct way to testing asynchronous

    ```
    function toTest(callback) {
      setImmediate(() => callback('yay));
    }

    test('the right way to test callbacks', done => {
      function callback(value) {
        try{
          expect(value).toBe('nooo');

          done();
        } catch(error) {
          done(error);
        }
      }

      toTest(callback)
    })
    ```

    - the difference in the above version and previous version is that by using the done function, you can get the results of the asynchronous function but if there is an error the trycatch block will allow you to use the done function to get the specific error caused by the callback thereby enabling better debugging output. Which is very critical for a large codebase

    - Mocking functions and modules
      - to allow for unit test that are atomic as possible you can use mocking in jest to allow for testing of functions that rely on others
      - to mock properly you need to make a back up of the original function or module and then once you have created the mock function, then you restore the original function from the backup you made

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
- Using the .eslintignore
  - Even if you list a directory to ignore, if you have eslint builtin to you VSCODE, then it will still give you errors for that folder when you open up specific files
