var toggle = false;

chrome.browserAction.onClicked.addListener(function(tab) {

	toggle = !toggle;

  if(toggle){
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    		chrome.browserAction.setIcon({path: "on.png", tabId: tab.id}); 
        chrome.tabs.sendMessage(tabs[0].id, {text:"1"}, function(response) {
      		if(reponse.type == "1"){
       			console.log('test received');
      		}
    		});
  	});
  }
  else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
        chrome.tabs.sendMessage(tabs[0].id, {text:"0"}, function(response) {
          if(reponse.type == "0"){
            console.log('test received');
          }
        });
    });
  }				
});

chrome.tabs.onUpdated.addListener(function(tab) {
  if(toggle){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.browserAction.setIcon({path: "on.png", tabId: tab.id}); 
        chrome.tabs.sendMessage(tabs[0].id, {text:"1"}, function(response) {
          if(reponse.type == "1"){
            console.log('test received');
          }
        });
    });
  }
  else {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
        chrome.tabs.sendMessage(tabs[0].id, {text:"0"}, function(response) {
          if(reponse.type == "0"){
            console.log('test received');
          }
        });
    });
  }       
});
