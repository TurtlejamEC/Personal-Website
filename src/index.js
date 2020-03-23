import {blogOverlayContent} from "./blogPostOverlayContent.js";
import {projectOverlayContent} from "./projectPostOverlayContent.js";
import {BlogPostInfo, blogPostInfoArray} from "./blogPostInfo.js";
import {ProjectPostInfo, projectPostInfoArray} from "./projectPostInfo.js";


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
                    <p>Hey! I don’t know how you got here, but thanks for visiting! My name is Elias Cho, and I like to do a lot of things. On a broad level, my interests range in the areas of math, programming, music, and art. I guess in a way, they are all related.</p>
                    <ul>
                        <li style={{padding: "3% 0%"}}>
                            <img src="src/img/AboutMathProgramming.png" className="featherEdges" style={{float:"right", width:"30em", borderRadius:"2%", verticalAlign:"middle"}} />
                            <h2>Math/Programming</h2>
                            <p>I might as well put these two together since they are so closely related. I’ve always been interested in math and programming, so computer science is kind of like having both at the same time (and yes I do mean the mathematical branch). Graph theory is definitely my favorite topic in this. :D In my freetime, I usually spend time on competitive programming, developing some sort of project like a game or this website, or learning about something new in this field. I’ve recently taken up an interest in machine learning and data science. It’s another cool bridge between the two worlds! And I guess it can also lend itself to art too in terms of data visualization. And then maybe I can analyze audio data to make a bridge with music… oh boy.</p>
                            <p>You can check out my various projects in the projects page. And if I feel like it, I’ll update the blog on what I’m working on so you can check out what I’m currently doing. :)</p>
                        </li>
                        <li style={{padding: "3% 0%"}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6foJM5OuH2k" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="featherEdges" style={{float:"right", borderRadius:"2%", verticalAlign:"middle"}} />
                            <h2>Music</h2>
                            <p>Music has been the biggest part of my life. I started playing piano since I was 4 years old, and although I took a year or two of break in my beginner stages, I’m otherwise a somewhat serious pianist. I’ve done and won competitions every year up to this year, during which I did no competitions to focus on school and more technical aspects to prepare for college. I’ve made the decision to not become a concert pianist, but I’ll always keep music in my life! That is a promise.</p>
                            <p>I also love to compose and improvise (much more than practicing). Although all of my training has been classical, I’ve delved into the world of electronic music. I’ve used Ableton Live as my DAW for at least a few years now. have a Youtube channel where I upload my compositions and various things I feel like uploading. Feel free to check out my work! :D</p>
                        </li>
                        <li style={{padding: "1% 0%"}}>
                            <img src="src/img/BlenderDragon.png" className="featherEdges" style={{float:"right", width:"20em", borderRadius:"2%", verticalAlign:"middle"}} />
                            <h2>Art</h2>
                            <p>Honestly, I’m not good at drawing, but I wish I were. I haven’t practiced or learned nearly enough to become a traditional or digital artist. But I have my interests in 3D modeling, so I’ve worked with Blender a little bit. I use Blender mostly to make assets for my games, but I’ve also used Blender to make videos for my songs on Youtube, as well as other various animations for fun. Consequently, I’ve learned a little bit about color and composition along the way.</p>
                            <p>Along the lines of art, I do enjoy the creative process of worldbuilding and writing. I have many stories, worlds, and characters to share that I’ve built up over many years in my head. I hope to share them all with you someday!</p>
                            <p>Additionally, I’m somewhat interested in linguistics. I haven’t delved too deeply in it yet, but I’m working on creating my own language while working towards fluency with Spanish and Korean!</p>
                        </li>
                    </ul>
                </div>,
            "Music": <div className="content">music</div>,
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
            <img src="src/img/x.png" style={{display:"block", float:"right", width:"5em", borderRadius:"2%"}}
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