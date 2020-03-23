import {blogOverlayContent} from "./blogPostOverlayContent.js";
import {projectOverlayContent} from "./projectPostOverlayContent.js";
import {BlogPostInfo, blogPostInfoArray} from "./blogPostInfo.js";
import {ProjectPostInfo, projectPostInfoArray} from "./projectPostInfo.js";
import {aboutPageContent} from "./aboutPageContent.js";
import {musicPageContent} from "./musicPageContent.js";


class BasicInfo extends React.Component {
    render() {
        return (
            <div className="basicInfoArea">
                <div className="center">
                    <h1>Elias Cho</h1>
                    <p>Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/TurtleBCA">github.com/TurtleBCA</a></p>
                    <p>Youtube: <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/user/Aquaboost123/featured">youtube.com/user/Aquaboost123/featured</a></p>
                </div>
            </div>
        );
    }
}

class PageButton extends React.Component {
    render() {
        return (
            <div className="pageButton" onClick={this.props.onPageButtonClick}>
                {this.props.text}
            </div>
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

class Post extends React.Component {
    render() {
        return (
            <div className="post" onClick={this.props.onPostClick}>
                <img src={this.props.imgSrc} style={{float:"right", width:"10em"}} />
                <p>{this.props.page === "Blog" ? this.props.date : ""}</p>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        let posts;
        if (this.props.page === "Projects") {
            posts = projectPostInfoArray.map((post, index) =>
                <li key={index}>
                    <Post page={this.props.page} onPostClick={() => this.props.handlePostClick(index)} id={index} imgSrc={post.thumbnailSrc} title={post.title} description={post.description} />
                </li>);
        } else if (this.props.page === "Blog") {
            posts = blogPostInfoArray.map((post, index) =>
                <li key={index}>
                    <Post page={this.props.page} onPostClick={() => this.props.handlePostClick(index)} id={index} imgSrc={post.thumbnailSrc} date={post.stringDate()} title={post.title} description={post.description} />
                </li>);
        }

        const pageHTML = {
            "About":
                <div className="content">
                    {aboutPageContent}
                </div>,
            "Music": <div className="content">
                {musicPageContent}
            </div>,
            "Projects":
                <div className="content">
                    <ul className="postList">
                        {posts}
                    </ul>
                </div>,
            "Blog":
                <div className="content">
                    <ul className="postList">
                        {posts}
                    </ul>
                </div>,
        };

        return pageHTML[this.props.page];
    }
}

function Overlay(props) {
    let content = (props.page === "Projects") ? projectOverlayContent[(props.id === -1 ? 0: props.id)] : blogOverlayContent[(props.id === -1 ? 0: props.id)];
    let overlay = (
        <div className="overlay">
            <div className="darkBackground" />
            <img src="src/img/x.png" style={{display:"block", float:"right", width:"5em", borderRadius:"2%", cursor:"pointer"}}
                 onClick={props.onOverlayXClick}/>
            <div className="postOverlayContentWrapper" style={{padding: "2%"}}>
                {content}
            </div>
        </div>);

    return overlay;
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "About",
            overlay: -1,
        };
    }

    handlePageButtonClick(newPage) {
        this.setState({
            page: newPage
        });
    }

    handlePostClick(newOverlay) {
        this.setState({
            overlay: newOverlay
        });

    }

    handleOverlayXClick() {
        this.setState({
            overlay: -1
        });
    }

    render() {
        let overlay = <div className="OverlayWrapper" style={{position:"fixed", top:0, left:0, right:0, bottom:0, width:"100%", height:"100%", overflowY: "scroll", display:(this.state.overlay === -1 ? "none" : "block")}}>
            <Overlay page={this.state.page} id={this.state.overlay} onOverlayXClick={() => this.handleOverlayXClick()} />
        </div>;
        let actual = <div className="NonOverlayWrapper">
            <Header onPageButtonClick={page => this.handlePageButtonClick(page)}/>
            <Content page={this.state.page} handlePostClick={newOverlay => this.handlePostClick(newOverlay)}/>
        </div>;

        document.body.style.overflow = this.state.overlay === -1 ? "visible" : "hidden";

        return (
            <div className="main">
                {overlay}
                {actual}
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));