class BasicInfo extends React.Component {
    render() {
        return (
            <div className="basicInfoArea">
                <div className="center">
                    <h1>Elias Cho</h1>
                    <p>Github: github.com/TurtleBCA</p>
                    <p>Youtube: www.youtube.com/user/Aquaboost123/featured</p>
                </div>
            </div>
        );
    }
}

class PageButton extends React.Component {
    render() {
        return (
            <button className="pageButton" onClick={this.props.onPageButtonClick}>
                {this.props.text}
            </button>
        );
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <PageButton text="About" onPageButtonClick={() => this.props.onPageButtonClick("About")}/>
                <PageButton text="Music" onPageButtonClick={() => this.props.onPageButtonClick("Music")}/>
                <PageButton text="Projects" onPageButtonClick={() => this.props.onPageButtonClick("Projects")}/>
                <PageButton text="Blog" onPageButtonClick={() => this.props.onPageButtonClick("Blog")}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <BasicInfo />
                <NavBar onPageButtonClick={page => this.props.onPageButtonClick(page)} />
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        const pageHTML = {
            "About": <div className="content">about</div>,
            "Music": <div className="content">music</div>,
            "Projects": <div className="content">projects</div>,
            "Blog": <div className="content">blog</div>,
        };

        return pageHTML[this.props.page];
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: "About"};
    }

    handlePageButtonClick(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <div className="main">
                <Header onPageButtonClick={page => this.handlePageButtonClick(page)}/>
                <Content page={this.state.page}/>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));