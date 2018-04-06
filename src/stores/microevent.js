/*
Copyright (c) 2011 Jerome Etienne, http://jetienne.com 
 
Permission is hereby granted, free of charge, to any person obtaining 
a copy of this software and associated documentation files (the 
"Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, 
distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to 
the following conditions: 

 
The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software. 


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/

var MicroEvent	= function(){};
MicroEvent.prototype	= {
	mbind	: function(event, obj, fct){
		MicroEvent._events = MicroEvent._events || {};
		MicroEvent._events[event] = MicroEvent._events[event] || [];
		MicroEvent._events[event].push(fct);
		MicroEvent._objs = MicroEvent._objs || {};
		MicroEvent._objs[event] = MicroEvent._objs[event] || [];
		MicroEvent._objs[event].push(obj);
	},
	munbind	: function(event, obj, fct){
		MicroEvent._events = MicroEvent._events || {};
		if( event in MicroEvent._events === false  )	return;
		MicroEvent._events[event].splice(MicroEvent._events[event].indexOf(fct), 1);
		MicroEvent._events[event].splice(MicroEvent._objs[event].indexOf(obj), 1);
	},
	mtrigger	: function(event /* , args... */){
		console.log('before', MicroEvent._events);
		MicroEvent._events = MicroEvent._events || {};
		if( event in MicroEvent._events === false  )	return;
		for(var i = 0; i < MicroEvent._events[event].length; i++){
			MicroEvent._events[event][i].apply(MicroEvent._objs[event][i], Array.prototype.slice.call(arguments, 1));
		}
	}
};

/**
 * mixin will delegate all MicroEvent.js function in the destination object
 *
 * - require('MicroEvent').mixin(Foobar) will make Foobar able to use MicroEvent
 *
 * @param {Object} the object which will support MicroEvent
*/
MicroEvent.mixin	= function(destObject){
	var props	= ['mbind', 'munbind', 'mtrigger'];
	for(var i = 0; i < props.length; i ++){
		if( typeof destObject === 'function' ){
			destObject.prototype[props[i]]	= MicroEvent.prototype[props[i]];
		}else{
			destObject[props[i]] = MicroEvent.prototype[props[i]];
		}
	}
	return destObject;
}

// export in common js
if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= MicroEvent;
}
