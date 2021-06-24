# hackerranktest

## Pre-requisites

- Make sure you have installed (or above) node version `10.16.3` and npm version `6.14.4`.

- Setting up 
  1. clone this reposittory
  1. after cloning the repository install dependencies
```bash

# install dependencies
npm install

```

## Open project using IDE 
  - i have been using visual studio code on mac 

## Test Execution 
Please make sure you in root directory of the project
 - There are multiple commands that can be used to run tests
  1. If you would wnat test to run in GUI mode then use command. This will launch cypress and you can see cypress test runner to execute the tests. 
  
  ```bash
    npm run test_ui
  ```
  
  2. If you would want test to run in headless mode (command line), please use below command. This is mainly used when running tests on CI runners 
  ```bash
    npm run test_headless
  ```

  3. If you want to run tests in headless mode but woulld like to generate some html reports for anlysis, then please use below command. This is helpful in case we want to integrate test reporting in teamcity or jenkins. however we could use cypress dashboard but that is paid feature so using this open source!
  ```bash
    npm run cy:run
  ```

