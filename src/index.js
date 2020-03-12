class Name extends React.Component {
    render() {
        return (
            <div className="nameArea">
                <h1>Elias Cho</h1>
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
                <Name />
                <NavBar onPageButtonClick={page => this.props.onPageButtonClick(page)} />
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        const pageHTML = {
            "About": <div>about</div>,
            "Music": <div>music</div>,
            "Projects": <div>projects</div>,
            "Blog": <div>blog</div>,
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
            <div className="Main">
                <Header onPageButtonClick={page => this.handlePageButtonClick(page)}/>
                <Body page={this.state.page}/>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));