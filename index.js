var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { blogOverlayContent } from "./blogPostOverlayContent.js";
import { projectOverlayContent } from "./projectPostOverlayContent.js";
import { BlogPostInfo, blogPostInfoArray } from "./blogPostInfo.js";
import { ProjectPostInfo, projectPostInfoArray } from "./projectPostInfo.js";
import { aboutPageContent } from "./aboutPageContent.js";
import { musicPageContent } from "./musicPageContent.js";

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
                "div",
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

var Post = function (_React$Component5) {
    _inherits(Post, _React$Component5);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "post", onClick: this.props.onPostClick },
                React.createElement("img", { src: this.props.imgSrc, style: { float: "right", width: "10em" } }),
                React.createElement(
                    "p",
                    null,
                    this.props.page === "Blog" ? this.props.date : ""
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.description
                )
            );
        }
    }]);

    return Post;
}(React.Component);

var Content = function (_React$Component6) {
    _inherits(Content, _React$Component6);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var _this9 = this;

            var posts = void 0;
            if (this.props.page === "Projects") {
                posts = projectPostInfoArray.map(function (post, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        React.createElement(Post, { page: _this9.props.page, onPostClick: function onPostClick() {
                                return _this9.props.handlePostClick(index);
                            }, id: index, imgSrc: post.thumbnailSrc, title: post.title, description: post.description })
                    );
                });
            } else if (this.props.page === "Blog") {
                posts = blogPostInfoArray.map(function (post, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        React.createElement(Post, { page: _this9.props.page, onPostClick: function onPostClick() {
                                return _this9.props.handlePostClick(index);
                            }, id: index, imgSrc: post.thumbnailSrc, date: post.stringDate(), title: post.title, description: post.description })
                    );
                });
            }

            var pageHTML = {
                "About": React.createElement(
                    "div",
                    { className: "content" },
                    aboutPageContent
                ),
                "Music": React.createElement(
                    "div",
                    { className: "content" },
                    musicPageContent
                ),
                "Projects": React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(
                        "ul",
                        { className: "postList" },
                        posts
                    )
                ),
                "Blog": React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(
                        "ul",
                        { className: "postList" },
                        posts
                    )
                )
            };

            return pageHTML[this.props.page];
        }
    }]);

    return Content;
}(React.Component);

function Overlay(props) {
    var content = props.page === "Projects" ? projectOverlayContent[props.id === -1 ? 0 : props.id] : blogOverlayContent[props.id === -1 ? 0 : props.id];
    var overlay = React.createElement(
        "div",
        { className: "overlay" },
        React.createElement("div", { className: "darkBackground" }),
        React.createElement("img", { src: "src/img/x.png", style: { display: "block", float: "right", width: "5em", borderRadius: "2%" },
            onClick: props.onOverlayXClick }),
        React.createElement(
            "div",
            { className: "postOverlayContentWrapper", style: { padding: "2%" } },
            content
        )
    );

    return overlay;
}

var Main = function (_React$Component7) {
    _inherits(Main, _React$Component7);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this10 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this10.state = {
            page: "About",
            overlay: -1
        };
        return _this10;
    }

    _createClass(Main, [{
        key: "handlePageButtonClick",
        value: function handlePageButtonClick(newPage) {
            this.setState({
                page: newPage
            });
        }
    }, {
        key: "handlePostClick",
        value: function handlePostClick(newOverlay) {
            this.setState({
                overlay: newOverlay
            });
        }
    }, {
        key: "handleOverlayXClick",
        value: function handleOverlayXClick() {
            this.setState({
                overlay: -1
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this11 = this;

            var overlay = React.createElement(
                "div",
                { className: "OverlayWrapper", style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", overflowY: "scroll", display: this.state.overlay === -1 ? "none" : "block" } },
                React.createElement(Overlay, { page: this.state.page, id: this.state.overlay, onOverlayXClick: function onOverlayXClick() {
                        return _this11.handleOverlayXClick();
                    } })
            );
            var actual = React.createElement(
                "div",
                { className: "NonOverlayWrapper" },
                React.createElement(Header, { onPageButtonClick: function onPageButtonClick(page) {
                        return _this11.handlePageButtonClick(page);
                    } }),
                React.createElement(Content, { page: this.state.page, handlePostClick: function handlePostClick(newOverlay) {
                        return _this11.handlePostClick(newOverlay);
                    } })
            );

            document.body.style.overflow = this.state.overlay === -1 ? "visible" : "hidden";

            return React.createElement(
                "div",
                { className: "main" },
                overlay,
                actual
            );
        }
    }]);

    return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));