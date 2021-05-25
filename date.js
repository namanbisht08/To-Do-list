exports.DateHindi = function(){
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //var day = today.toLocaleDateString("en-US", options);
    return today.toLocaleDateString("hi-IN", options);
}

exports.DateEng = DateEng;
function DateEng(){
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString("en-US", options);
    //let day = today.toLocaleDateString("hi-IN", options);
}
 
//there are 6 ways to declare a function in javascript, above used both
//funtion declaration is same.