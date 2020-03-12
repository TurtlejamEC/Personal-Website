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
            <button className="pageButton">
                {this.props.text}
            </button>
        );
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div className="navBar">
                <PageButton text="About"/>
                <PageButton text="Music"/>
                <PageButton text="Projects"/>
                <PageButton text="Blog"/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Name />
                <NavBar />
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        const pageHTML = {};

        return this.props.page;
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: "about"};
    }

    render() {
        return (
            <div className="Main">
                <Header />
                <Body page=this.state.page />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));