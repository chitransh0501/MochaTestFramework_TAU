Install npm, node and mocha globally.

Create a folder at local driver
run command "npm init": it will create package.json

create a folder test
create a javascript file and write code using mocha

modify the package.josn file , under script write as below : 
  "scripts": {
    "test": "mocha"
  }

  so that it will look for java script file under test folder and execute them using mocha.

open command prompt from this repo and run command "npm test"

------------------
There are 4 hooks , describe is like test suite, it is like test case.
Mocha is unit testing framework for java script like testng in java, nunit in c#
For assertions it has its own assert module.we can use chai library as well.

---------------
Test Featurtes :it is for describe and it both .Mocha has features to tell which tests should execute and which not : 
Exclusive(only : specific), Inclusive(skip : to ignore,status would be pending), Pending(it will be included in test results but status would be pending and not failed.)
--------------------
retry is function to retry the failed tests several times.its not recommended for unit tests.
reruns beforeeach/aftereach hooks but not before/after hooks.


timeouts : suite level, test level, hook level.
timeouts can be disabled using this.timeout(0)

----------------------
mocha reporters: 
these are mostly terminal based.

1. Spec: spec is default reporter.it gives hierarchical view.
2. DOT Matrix: series of characters which represents the test cases.

command to get report : 
mocha test/ --reporter spec
mocha test/ --reporter dot
mocha test/ --reporter json


