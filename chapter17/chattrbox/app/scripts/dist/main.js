(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChapApp = function ChapApp() {
  _classCallCheck(this, ChapApp);

  console.log('Hello ES6!');
};

var ChatMessage = function () {
  /**
   * case1
  constructor(message, user, timestamp) {
    this.message = message;
    this.user = user || 'batman';
    this.timestamp = timestamp || (new Date()).getTime();
  }
  */
  /**
   * case2
  constructor(message, user = 'batman', timestamp = (new Date().getTime())) {
    this.message = message;
    this.user = user;
    this.timestamp = timestamp;
  }
  */
  /**
   * case2
  constructor({message: m, user: u, timestamp: t}) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  */
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChapApp;

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNKLG1CQUFjO0FBQUE7O0FBQ1osVUFBUSxHQUFSLENBQVksWUFBWjtBQUNELEM7O0lBR0csVztBQUNKOzs7Ozs7OztBQVFBOzs7Ozs7OztBQVFBOzs7Ozs7OztBQVFBLDZCQUlHO0FBQUEsUUFIUSxDQUdSLFFBSEQsT0FHQztBQUFBLHlCQUZELElBRUM7QUFBQSxRQUZLLENBRUwsNkJBRlMsUUFFVDtBQUFBLDhCQURELFNBQ0M7QUFBQSxRQURVLENBQ1Ysa0NBRGUsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUNmOztBQUFBOztBQUNELFNBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7Ozs7Z0NBQ1c7QUFDVixhQUFPO0FBQ0wsY0FBTyxLQUFLLElBRFA7QUFFTCxpQkFBVSxLQUFLLE9BRlY7QUFHTCxtQkFBVyxLQUFLO0FBSFgsT0FBUDtBQUtEOzs7Ozs7a0JBR1ksTzs7Ozs7QUNqRGY7Ozs7OztBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJjbGFzcyBDaGFwQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIEVTNiEnKTtcbiAgfVxufVxuXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gIC8qKlxuICAgKiBjYXNlMVxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB1c2VyLCB0aW1lc3RhbXApIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMudXNlciA9IHVzZXIgfHwgJ2JhdG1hbic7XG4gICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXAgfHwgKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgfVxuICAqL1xuICAvKipcbiAgICogY2FzZTJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgdXNlciA9ICdiYXRtYW4nLCB0aW1lc3RhbXAgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkpKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICB9XG4gICovXG4gIC8qKlxuICAgKiBjYXNlMlxuICBjb25zdHJ1Y3Rvcih7bWVzc2FnZTogbSwgdXNlcjogdSwgdGltZXN0YW1wOiB0fSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgdGhpcy51c2VyID0gdTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XG4gIH1cbiAgKi9cbiAgY29uc3RydWN0b3Ioe1xuICAgIG1lc3NhZ2U6IG0sXG4gICAgdXNlcjogdSA9ICdiYXRtYW4nLFxuICAgIHRpbWVzdGFtcDogdCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgfSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgdGhpcy51c2VyID0gdTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XG4gIH1cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyIDogdGhpcy51c2VyLFxuICAgICAgbWVzc2FnZSA6IHRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXBBcHA7XG4iLCJpbXBvcnQgQ2hhcEFwcCBmcm9tICcuL2FwcCc7XG5uZXcgQ2hhcEFwcCgpO1xuIl19
