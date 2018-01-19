// Saves options to chrome.storage
function write_options() {
  var f = document.getElementById("instances");  
  var instanceT = {
    Instance1 : f.elements[0].value,
    Instance2 : f.elements[1].value,
    Instance3 : f.elements[2].value,
    Instance4 : f.elements[3].value,
    Instance5 : f.elements[4].value,
    Instance6 : f.elements[5].value,
    Instance7 : f.elements[6].value,
    Instance8 : f.elements[7].value,
    Instance9 : f.elements[8].value,
    Instance10 : f.elements[9].value  };
	
  chrome.storage.sync.set(instanceT, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Window will close.';
	
    setTimeout(function() {
      status.textContent = '';
	    window.close();
    }, 2100);
	
  });

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function read_options() {
  // Use default value color = 'red' and likesColor = true.
  
	var f = document.getElementById("instances");  
	var instanceT = {};
	chrome.storage.sync.get( instanceT['Instance1'], function (obj) {
		for (i =1 ; i< 11; i++) {	
		var instanceVal = eval(obj)['Instance'+i]; 
		if (typeof instanceVal === "undefined")		{
			f.elements[i-1].value = '';
			}else {
				f.elements[i-1].value = instanceVal;
			}
		}
	});		
}

document.addEventListener('DOMContentLoaded', read_options);

document.getElementById('save').addEventListener('click',  write_options);
	