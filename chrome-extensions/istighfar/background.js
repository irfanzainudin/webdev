chrome.webNavigation.onCompleted.addListener(function() {
    alert("Astaghfirullah!");
}, {url: [{urlMatches : 'https://www.funimation.com/'}]});