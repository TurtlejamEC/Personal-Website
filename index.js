var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Name = function (_React$Component) {
    _inherits(Name, _React$Component);

    function Name() {
        _classCallCheck(this, Name);

        return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).apply(this, arguments));
    }

    _createClass(Name, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "nameArea" },
                React.createElement(
                    "h1",
                    null,
                    "Elias Cho"
                )
            );
        }
    }]);

    return Name;
}(React.Component);

var PageButton = function (_React$Component2) {
    _inherits(PageButton, _React$Component2);

    function PageButton() {
        _classCallCheck(this, PageButton);

        return _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).apply(this, arguments));
    }

    _createClass(PageButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "pageButton", onClick: this.props.onPageButtonClick },
                this.props.text
            );
        }
    }]);

    return PageButton;
}(React.Component);

var NavBar = function (_React$Component3) {
    _inherits(NavBar, _React$Component3);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                { className: "navBar" },
                React.createElement(PageButton, { text: "About", onPageButtonClick: function onPageButtonClick() {
                        return _this4.props.onPageButtonClick("About");
                    } }),
                React.createElement(PageButton, { text: "Music", onPageButtonClick: function onPageButtonClick() {
                        return _this4.props.onPageButtonClick("Music");
                    } }),
                React.createElement(PageButton, { text: "Projects", onPageButtonClick: function onPageButtonClick() {
                        return _this4.props.onPageButtonClick("Projects");
                    } }),
                React.createElement(PageButton, { text: "Blog", onPageButtonClick: function onPageButtonClick() {
                        return _this4.props.onPageButtonClick("Blog");
                    } })
            );
        }
    }]);

    return NavBar;
}(React.Component);

var Header = function (_React$Component4) {
    _inherits(Header, _React$Component4);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var _this6 = this;

            return React.createElement(
                "div",
                { className: "header" },
                React.createElement(Name, null),
                React.createElement(NavBar, { onPageButtonClick: function onPageButtonClick(page) {
                        return _this6.props.onPageButtonClick(page);
                    } })
            );
        }
    }]);

    return Header;
}(React.Component);

var Body = function (_React$Component5) {
    _inherits(Body, _React$Component5);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: "render",
        value: function render() {
            var pageHTML = {
                "About": React.createElement(
                    "div",
                    null,
                    "about"
                ),
                "Music": React.createElement(
                    "div",
                    null,
                    "music"
                ),
                "Projects": React.createElement(
                    "div",
                    null,
                    "projects"
                ),
                "Blog": React.createElement(
                    "div",
                    null,
                    "blog"
                )
            };

            return pageHTML[this.props.page];
        }
    }]);

    return Body;
}(React.Component);

var Main = function (_React$Component6) {
    _inherits(Main, _React$Component6);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this8 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this8.state = { page: "About" };
        return _this8;
    }

    _createClass(Main, [{
        key: "handlePageButtonClick",
        value: function handlePageButtonClick(newPage) {
            this.setState({
                page: newPage
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            return React.createElement(
                "div",
                { className: "Main" },
                React.createElement(Header, { onPageButtonClick: function onPageButtonClick(page) {
                        return _this9.handlePageButtonClick(page);
                    } }),
                React.createElement(Body, { page: this.state.page })
            );
        }
    }]);

    return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));