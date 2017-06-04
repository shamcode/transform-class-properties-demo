'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo() {
    _classCallCheck(this, Foo);

    this.baz = 'default';

    console.log(this.baz);
};

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.baz = 'Wow', _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Bar;
}(Foo);

new Bar();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luc3RhbmNlLXByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIkZvbyIsImJheiIsImNvbnNvbGUiLCJsb2ciLCJCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLEcsR0FFRixlQUFjO0FBQUE7O0FBQUEsU0FEZEMsR0FDYyxHQURSLFNBQ1E7O0FBQ1ZDLFlBQVFDLEdBQVIsQ0FBYSxLQUFLRixHQUFsQjtBQUNILEM7O0lBR0NHLEc7Ozs7Ozs7Ozs7Ozs7O29MQUNGSCxHLEdBQU0sSzs7OztFQURRRCxHOztBQUlsQixJQUFJSSxHQUFKIiwiZmlsZSI6Imluc3RhbmNlLXByb3BlcnR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9vIHtcbiAgICBiYXogPSAnZGVmYXVsdCc7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmJheiApO1xuICAgIH1cbn1cblxuY2xhc3MgQmFyIGV4dGVuZHMgRm9vIHtcbiAgICBiYXogPSAnV293Jztcbn1cblxubmV3IEJhcigpO1xuXG4iXX0=
