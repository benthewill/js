var anyton = function (ton, parameters, init_count) {
	if (!init_count) {
	  init_count = 1; // Singleton.
	}
  
	var instances = [];
  
	this.create_instance = function () {
	  if (instances.length < init_count) {
		instances.push(new ton(...parameters)); // No pun intended.
	  }
  
	  return instances[instances.length - 1];
	};
  };
  
  
  var dummy_object = function () {};
  dummy_object = new anyton(dummy_object, []);
  
  var a = dummy_object.create_instance();
  var b = dummy_object.create_instance();
  
  console.log(a === b);