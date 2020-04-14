
  var assert = require('assert');

describe( "mathematics function", function(){
    // suite level timeout, this specifies whole execution should get completed with in 5000 ms.
    this.timeout(5000);
    var a = 20;
    var b = 10;

    /*    
    //hooks level timeout with done functiona call.
    before("hooks level timeout" , function(done) {
        this.timeout(500);// maximum timeout
         setTimeout(done, 3000);//we are setting 3 sec timeout. this will fail, 
         //hence other tests will not get execute.
        console.log("it will execute before all tests.");
    });
    */

    before("before all tests" , function() {
        console.log("it will execute before all tests.");
    });

     
    after("after all tests" , function() {
        console.log("it will execute after all tests.");
    });

    beforeEach("before each tests" , function() {
        console.log("it will execute before each tests.");
    });

    afterEach("after each tests" , function() {
        console.log("it will execute after each tests.");
    });


    it("add" , function() {
        var c = a+b;
        assert.equal(c, 30);
    });

    it("sub" , function() {
        var c = a-b;
        assert.equal(c, 10);
    });


    // only this test will be excuted from this whole file, others will not be executed.
    //This is exclusive test.
  /*  it.only("multi" , function() {
        var a = 20;
        var b = 30;
        var c = a*b;
        assert.equal(c, 600);
    });
*/

it("multi" , function() {
    var c = a*b;
    assert.equal(c, 200);
});

/* only this test will be skipped and others will be executed, status would be pending.
this feature is inclusive .
    it.skip("devide" , function() {
        var a = 20;
        var b = 10;
        var c = a/b;
        assert.equal(c, 2);
    });
});
*/

//its execution status would be pending 
it("this test is without call back function, it is called pending test feature.");

it("devide" , function() {
    var c = a/b;
    assert.equal(c, 2);
});

//Test case level time out 
it("timeout for test level" , function(done) {
    this.timeout(500) //this specifies that this test case should get execute with in 500 mili seconds.
    setTimeout(done, 3000);// this is timeout for 3 seconds, 
    //hence test will fail because we are expecting to complete with in 500 ms.

    var c = a/b;
    assert.equal(c, 2);
});

});