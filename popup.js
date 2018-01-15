// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, (tabs) => {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}


/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTab(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

   

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof tab.url == 'string', 'tab.url should be a string');
    //console.assert(typeof tab.url != 'string', 'tab.url is a string');
	//console.log(tab.url);
    callback(tab);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, (tabs) => {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

 
 

function load_dropdown() {
  
	var sel = document.getElementById('dropdown');



 // Instance1
	chrome.storage.sync.get('Instance1', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance1":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	

			sel.appendChild(opt);
		}
    });
  // Instance2
	chrome.storage.sync.get('Instance2', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance2":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance3
	chrome.storage.sync.get('Instance3', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance3":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance4
	chrome.storage.sync.get('Instance4', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance4":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance5
	chrome.storage.sync.get('Instance5', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance5":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance6
	chrome.storage.sync.get('Instance6', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance6":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance7
	chrome.storage.sync.get('Instance7', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance7":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance8
	chrome.storage.sync.get('Instance8', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance8":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance9
	chrome.storage.sync.get('Instance9', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance9":"','').replace('"}',''); 
		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });
 // Instance10
	chrome.storage.sync.get('Instance10', function (obj) {	
		var myVal = JSON.stringify(obj).replace('{"Instance10":"','').replace('"}',''); 

		if ('' != myVal) {
			var opt = document.createElement('option');
			opt.innerHTML = myVal;
			opt.value = myVal;	
		
			sel.appendChild(opt);
		}
    });

}
document.addEventListener('DOMContentLoaded', load_dropdown);


// add listners 
document.addEventListener('DOMContentLoaded', () => {
	getCurrentTab((tab) => {
	  var dropdown = document.getElementById('dropdown');
		dropdown.addEventListener('change', () => {
			chrome.tabs.getSelected(null, function(tab) {	
				
				var dropdown = document.getElementById("dropdown");
				
				var myNewUrl =  tab.url.replace(/.*.service-now.com/, 'https://'+dropdown.value+'.service-now.com');

				chrome.tabs.update(tab.id, {url: myNewUrl});
				window.close();
			});		    
		});
	});
});