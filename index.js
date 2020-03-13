var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicInfo = function (_React$Component) {
    _inherits(BasicInfo, _React$Component);

    function BasicInfo() {
        _classCallCheck(this, BasicInfo);

        return _possibleConstructorReturn(this, (BasicInfo.__proto__ || Object.getPrototypeOf(BasicInfo)).apply(this, arguments));
    }

    _createClass(BasicInfo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "basicInfoArea" },
                React.createElement(
                    "div",
                    { className: "center" },
                    React.createElement(
                        "h1",
                        null,
                        "Elias Cho"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Github: github.com/TurtleBCA"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Youtube: www.youtube.com/user/Aquaboost123/featured"
                    )
                )
            );
        }
    }]);

    return BasicInfo;
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
                React.createElement(BasicInfo, null),
                React.createElement(NavBar, { onPageButtonClick: function onPageButtonClick(page) {
                        return _this6.props.onPageButtonClick(page);
                    } })
            );
        }
    }]);

    return Header;
}(React.Component);

var Content = function (_React$Component5) {
    _inherits(Content, _React$Component5);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var pageHTML = {
                "About": React.createElement(
                    "div",
                    { className: "content" },
                    "about"
                ),
                "Music": React.createElement(
                    "div",
                    { className: "content" },
                    "music"
                ),
                "Projects": React.createElement(
                    "div",
                    { className: "content" },
                    "projects"
                ),
                "Blog": React.createElement(
                    "div",
                    { className: "content" },
                    "blog"
                )
            };

            return pageHTML[this.props.page];
        }
    }]);

    return Content;
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
                { className: "main" },
                React.createElement(Header, { onPageButtonClick: function onPageButtonClick(page) {
                        return _this9.handlePageButtonClick(page);
                    } }),
                React.createElement(Content, { page: this.state.page })
            );
        }
    }]);

    return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));