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
                    React.createElement(
                        "p",
                        null,
                        "Hey! I don\u2019t know how you got here, but thanks for visiting! My name is Elias Cho, and I like to do a lot of things. On a broad level, my interests range in the areas of math, programming, music, and art. I guess in a way, they are all related."
                    ),
                    React.createElement(
                        "table",
                        null,
                        React.createElement(
                            "tbody",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    { style: { padding: "1% 0%" } },
                                    React.createElement("img", { src: "src/img/AboutMathProgramming.png", className: "featherEdges", style: { float: "right", width: "30em", borderRadius: "2%", verticalAlign: "middle" } }),
                                    React.createElement(
                                        "h2",
                                        null,
                                        "Math/Programming"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "I might as well put these two together since they are so closely related. I\u2019ve always been interested in math and programming, so computer science is kind of like having both at the same time (and yes I do mean the mathematical branch). Graph theory is definitely my favorite topic in this. :D In my freetime, I usually spend time on competitive programming, developing some sort of project like a game or this website, or learning about something new in this field. I\u2019ve recently taken up an interest in machine learning and data science. It\u2019s another cool bridge between the two worlds! And I guess it can also lend itself to art too in terms of data visualization. And then maybe I can analyze audio data to make a bridge with music\u2026 oh boy."
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "You can check out my various projects in the projects page. And if I feel like it, I\u2019ll update the blog on what I\u2019m working on so you can check out what I\u2019m currently doing. :)"
                                    )
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    { style: { padding: "1% 0%" } },
                                    React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/6foJM5OuH2k", frameBorder: "0",
                                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true, className: "featherEdges", style: { float: "right", borderRadius: "2%", verticalAlign: "middle" } }),
                                    React.createElement(
                                        "h2",
                                        null,
                                        "Music"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Music has been the biggest part of my life. I started playing piano since I was 4 years old, and although I took a year or two of break in my beginner stages, I\u2019m otherwise a somewhat serious pianist. I\u2019ve done and won competitions every year up to this year, during which I did no competitions to focus on school and more technical aspects to prepare for college. I\u2019ve made the decision to not become a concert pianist, but I\u2019ll always keep music in my life! That is a promise."
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "I also love to compose and improvise (much more than practicing). Although all of my training has been classical, I\u2019ve delved into the world of electronic music. I\u2019ve used Ableton Live as my DAW for at least a few years now. have a Youtube channel where I upload my compositions and various things I feel like uploading. Feel free to check out my work! :D"
                                    )
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    { style: { padding: "1% 0%" } },
                                    React.createElement("img", { src: "src/img/BlenderDragon.png", className: "featherEdges", style: { float: "right", width: "20em", borderRadius: "2%", verticalAlign: "middle" } }),
                                    React.createElement(
                                        "h2",
                                        null,
                                        "Art"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Honestly, I\u2019m not good at drawing, but I wish I were. I haven\u2019t practiced or learned nearly enough to become a traditional or digital artist. But I have my interests in 3D modeling, so I\u2019ve worked with Blender a little bit. I use Blender mostly to make assets for my games, but I\u2019ve also used Blender to make videos for my songs on Youtube, as well as other various animations for fun. Consequently, I\u2019ve learned a little bit about color and composition along the way."
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Along the lines of art, I do enjoy the creative process of worldbuilding and writing. I have many stories, worlds, and characters to share that I\u2019ve built up over many years in my head. I hope to share them all with you someday!"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Additionally, I\u2019m somewhat interested in linguistics. I haven\u2019t delved too deeply in it yet, but I\u2019m working on creating my own language while working towards fluency with Spanish and Korean!"
                                    )
                                )
                            )
                        )
                    )
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