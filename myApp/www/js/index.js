/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
      app.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', app.doStartingStuff, false);
    document.addEventListener('offline', function() {
      document.getElementById('console').innerHTML = ('just went offline silly');
    }, false);
    document.addEventListener('online', function() {
      document.getElementById('console').innerHTML = ('nice one, back online');
    }, false);
  },
  doStartingStuff: function() {
    document.getElementById('ajaxBtn').addEventListener('touchstart', app.updateTime, false);
    document.getElementById('connection').addEventListener('touchstart', app.connectionLog, false);
    document.getElementById('bigCall').addEventListener('touchstart', app.bigCall, false);
  },
  updateTime: function(){
    (navigator.connection.type == 'none')? app.localCall() : app.apiCall()
  },
  localCall: function(){
    document.getElementById('time').innerHTML = 'here it comes!';
    setTimeout(function(){
      document.getElementById('time').innerHTML = localStorage.getItem('time');
    }, 2000);
  },
  apiCall: function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://vcs.hhd.com.au:4000/api/time');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          localStorage.setItem('time', xhr.responseText + ' from web');
          document.getElementById('time').innerHTML = xhr.responseText;
        } else {
          console.log('Error: ' + xhr.status);
          console.log(xhr);
        }
      }
    };
  },
  bigCall: function(){
    var start = new Date;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4000/api/test');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          localStorage.setItem('testData', xhr.responseText);
          document.getElementById('console').innerHTML = 'success in ' + ((new Date) - start)/1000 + 'sec';
        } else {
          console.log('Error: ' + xhr.status);
          console.log(xhr);
        }
      }
    };
  },
  connectionLog: function() {
    console.log(navigator.connection);
    document.getElementById('console').innerHTML = (navigator.connection.type);
  }
};
