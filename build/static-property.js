'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo() {
    _classCallCheck(this, Foo);

    console.log(Foo.baz);
};

Foo.baz = 'default';

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
    }

    return Bar;
}(Foo);

Bar.baz = 'Wow';


new Bar();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0YXRpYy1wcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJGb28iLCJjb25zb2xlIiwibG9nIiwiYmF6IiwiQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxHLEdBQ0YsZUFBYztBQUFBOztBQUNWQyxZQUFRQyxHQUFSLENBQWFGLElBQUlHLEdBQWpCO0FBQ0gsQzs7QUFIQ0gsRyxDQUtLRyxHLEdBQU0sUzs7SUFHWEMsRzs7Ozs7Ozs7OztFQUFZSixHOztBQUFaSSxHLENBQ0tELEcsR0FBTSxLOzs7QUFHakIsSUFBSUMsR0FBSiIsImZpbGUiOiJzdGF0aWMtcHJvcGVydHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb28ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggRm9vLmJheiApO1xuICAgIH1cblxuICAgIHN0YXRpYyBiYXogPSAnZGVmYXVsdCc7XG59XG5cbmNsYXNzIEJhciBleHRlbmRzIEZvbyB7XG4gICAgc3RhdGljIGJheiA9ICdXb3cnO1xufVxuXG5uZXcgQmFyKCk7XG5cbiJdfQ==
