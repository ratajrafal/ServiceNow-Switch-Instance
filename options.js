// Saves options to chrome.storage
function save_options() {
  var f = document.getElementById("instances");  
  var n = f.elements.length;
  
  chrome.storage.sync.set({
    Instance1 : f.elements[0].value,
    Instance2 : f.elements[1].value,
    Instance3 : f.elements[2].value,
    Instance4 : f.elements[3].value,
    Instance5 : f.elements[4].value,
    Instance6 : f.elements[5].value,
    Instance7 : f.elements[6].value,
    Instance8 : f.elements[7].value,
    Instance9 : f.elements[8].value,
    Instance10 : f.elements[9].value

  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Window will close.';
	
    setTimeout(function() {
      status.textContent = '';
	    window.close();
    }, 2500);
	
  });

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  
  var f = document.getElementById("instances");  
  
      chrome.storage.sync.get('Instance1', function (obj) {
        console.log('Instance1', obj);
		f.elements[0].value = JSON.stringify(obj).replace('{"Instance1":"','').replace('"}',''); 
    });
	
      chrome.storage.sync.get('Instance2', function (obj) {
        console.log('Instance2', obj);
		f.elements[1].value = JSON.stringify(obj).replace('{"Instance2":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance3', function (obj) {
        console.log('Instance3', obj);
		f.elements[2].value = JSON.stringify(obj).replace('{"Instance3":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance4', function (obj) {
        console.log('Instance4', obj);
		f.elements[3].value = JSON.stringify(obj).replace('{"Instance4":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance5', function (obj) {
        console.log('Instance5', obj);
		f.elements[4].value = JSON.stringify(obj).replace('{"Instance5":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance6', function (obj) {
        console.log('Instance6', obj);
		f.elements[5].value = JSON.stringify(obj).replace('{"Instance6":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance7', function (obj) {
        console.log('Instance7', obj);
		f.elements[6].value = JSON.stringify(obj).replace('{"Instance7":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance8', function (obj) {
        console.log('Instance8', obj);
		f.elements[7].value = JSON.stringify(obj).replace('{"Instance8":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance9', function (obj) {
        console.log('Instance9', obj);
		f.elements[8].value = JSON.stringify(obj).replace('{"Instance9":"','').replace('"}',''); 
    });
      chrome.storage.sync.get('Instance10', function (obj) {
        console.log('Instance10', obj);
		f.elements[9].value = JSON.stringify(obj).replace('{"Instance10":"','').replace('"}',''); 
    });
	
	
	 
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	