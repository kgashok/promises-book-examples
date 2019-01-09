'use strict'; 

// the HTML element in the DOM where the console 
// output is being re-directed to
var log = document.querySelector('#log');

['log','debug','info','warn','error'].forEach(function (verb) {
  console[verb] = (function (method, verb, log) {
    return function () {
      method.apply(console, arguments);
      var msg = document.createElement('div');
      msg.classList.add(verb);
      msg.textContent = verb + ': ' + argumentsForPrint(arguments);
      log.append(msg);
    };
  })(console[verb], verb, log);
  
  // thanks to https://googlechrome.github.io/samples/font-face-set/
  function argumentsForPrint(args) { 
    var alist = Array.prototype.slice.call(args);
    if (alist.length == 1 && typeof args[0] !== "string") {
      // this should really work, but doesn't! 
      //return JSON.stringify(arguments[0], null, 4); 
      //
      // real hack! May work only for FontFace object
      // where return JSON.stringify(arguments, null, 4); 
      //
      alist = ["\n"];
      var fontFace = args[0];
      for (var property in fontFace) {
        alist.push ('  ' + property + ': ' + fontFace[property] + "\n"); 
      }
    }
    return alist.join(' ');  
  }
});
