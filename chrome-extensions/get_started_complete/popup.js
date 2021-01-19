// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.windows.getCurrent((currentWindow) => {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, (activeTabs) => {
      activeTabs.map((tab) => {
        chrome.tabs.executeScript(
          tab.id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
      })
    })
  })
};
