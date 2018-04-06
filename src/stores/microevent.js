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
