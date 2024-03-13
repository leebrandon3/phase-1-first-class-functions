function receivesAFunction(spy){
    return spy();
}
function returnsANamedFunction(){
    return function named(){

    }
}
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}