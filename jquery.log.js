jQuery.log = function(message, alertbox) {

	//changer cette variable pour neutraliser tous les $.log(...)
	var logging_activated = true;

	//toggle to "true" to log caller name
	//( usefull for finding back which $.log call is outputing something
	var show_caller_name = false;

	var _message = message;

	if(typeof(message) == 'object'){
		// Deep copy == clone
		var new_obj = {};
		if(_message instanceof Array){
			new_obj = [];
		}

		_message = jQuery.extend(true, new_obj, message);
	}


	if(logging_activated){
		if(window.console) {
			if(show_caller_name){
				var callerFunc = arguments.callee.caller.toString();
				var callerFuncName = (callerFunc.substring(callerFunc.indexOf("function") + 8, callerFunc.indexOf("(")) || "anonymous")
				console.log(['caller: ' + callerFuncName , _message]);
			}else{
				console.log(_message);
			}
		} else if (alertbox === true) {
			alert(_message);
		}
	}

	//return this;
};
