function receivesAFunction(cb){
    cb()
}
const cba = () => {console.log('hello') ;}

// receivesAFKunction(cba)


function returnsANamedFunction(){
    return function named(){
        console.log("sdfvs")
    }
}

// returnsANamedFunction()

function returnsAnAnonymousFunction(){
   return function(name) {
        console.log(name);
    };
}

// ff()('i')