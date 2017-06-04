'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);

        console.log(this.baz);
    }

    _createClass(Foo, [{
        key: 'baz',
        get: function get() {
            return 'default';
        }
    }]);

    return Foo;
}();

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
    }

    _createClass(Bar, [{
        key: 'baz',
        get: function get() {
            return 'Wow';
        }
    }]);

    return Bar;
}(Foo);

new Bar();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dldHRlci5qcyJdLCJuYW1lcyI6WyJGb28iLCJjb25zb2xlIiwibG9nIiwiYmF6IiwiQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7QUFDRixtQkFBYztBQUFBOztBQUNWQyxnQkFBUUMsR0FBUixDQUFhLEtBQUtDLEdBQWxCO0FBQ0g7Ozs7NEJBRVM7QUFDTixtQkFBTyxTQUFQO0FBQ0g7Ozs7OztJQUdDQyxHOzs7Ozs7Ozs7Ozs0QkFDUTtBQUNOLG1CQUFPLEtBQVA7QUFDSDs7OztFQUhhSixHOztBQU1sQixJQUFJSSxHQUFKIiwiZmlsZSI6ImdldHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmJheiApO1xuICAgIH1cblxuICAgIGdldCBiYXooKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCc7XG4gICAgfVxufVxuXG5jbGFzcyBCYXIgZXh0ZW5kcyBGb28ge1xuICAgIGdldCBiYXooKSB7XG4gICAgICAgIHJldHVybiAnV293JztcbiAgICB9XG59XG5cbm5ldyBCYXIoKTtcblxuIl19
