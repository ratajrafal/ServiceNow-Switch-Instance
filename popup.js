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

function read_dropdown() {
	var sel = document.getElementById('dropdown');
	var optionsT = {};
	chrome.storage.sync.get(optionsT['Instance1'], function (obj) {
		var undefinedCount = 0;
		for (i = 1; i < 11; i++) {

			var myVal = eval(obj)['Instance' + i]

				if (typeof myVal === "undefined" || myVal == "undefined") {
					undefinedCount++;
				} else {
					if ('' != myVal) {
						var opt = document.createElement('option');
						opt.innerHTML = myVal;
						opt.value = myVal;
						sel.appendChild(opt);
					}
				}
		}
		var imessage = document.getElementById('imessage');
		if (undefinedCount > 1) {
			imessage.innerHTML = "To see values in the dropbox <br>you need first to <b>configure</b> the plugin <a href='\options.html'>options</a>."
		} else {
			imessage.innerHTML = "You can configure your instances in the plugin <a href='\options.html'>options</a>";
		}
	});
}

function write_checkbox() {
	var f = document.getElementById("newtabbox");
	var checkboxState = {
		checkboxStstus: f.checked
	};
	chrome.storage.sync.set(checkboxState, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Saved';

		setTimeout(function () {
			status.textContent = '';
		}, 1300);
	});
}

function read_checkbox() {
	chrome.storage.sync.get({
		//False is the default value when first opening the extension
		'checkboxStstus': false
	}, function (items) {
		document.getElementById('newtabbox').checked =
			eval(items)['checkboxStstus'];
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#newtabbox').addEventListener('change', write_checkbox);
});

// add listners
document.addEventListener('DOMContentLoaded', read_dropdown);
document.addEventListener('DOMContentLoaded', read_checkbox);
document.addEventListener('DOMContentLoaded', () => {
	getCurrentTab((tab) => {
		var dropdown = document.getElementById('dropdown');
		dropdown.addEventListener('change', () => {
			chrome.tabs.getSelected(null, function (tab) {

				var dropdown = document.getElementById("dropdown");

					if ( dropdown.value.search("https://") == -1 ) { //  /.*.service-now.com/
						var myNewUrl = tab.url.replace(/.*\.[a-zA-Z]{3}\//, 'https://' + dropdown.value + '.service-now.com/');
					}else{
						var myNewUrl = tab.url.replace(/.*\.[a-zA-Z]{3}\//, dropdown.value+'/');
					}
						
				if (document.getElementById('newtabbox').checked) {
					chrome.tabs.create({
						url: myNewUrl
					});
				} else {
					chrome.tabs.update(tab.id, {
						url: myNewUrl
					});
				}
				window.close();
			});
		});
	});
});