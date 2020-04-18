var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var ProjectPostInfo = function () {
    function ProjectPostInfo(title, description, thumbnailSrc) {
        _classCallCheck(this, ProjectPostInfo);

        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
    }

    _createClass(ProjectPostInfo, [{
        key: "stringDate",
        value: function stringDate() {
            return BlogPostInfo.monthNames[this.month] + " " + this.day + ", " + this.year;
        }
    }]);

    return ProjectPostInfo;
}();

export var projectPostInfoArray = [{
    "title": "Modeling the Propagation of True/Fake News on Twitter",
    "description": "Research conducted on the propagation of fake news on Twitter. How quickly does fake news spread? How does it fare against true news?",
    "thumbnailSrc": "src/img/Projects/TwitterDataCollection/TwitterDataCollectionThumbnail.png"
}, {
    "title": "Rhythm Bullet Hell",
    "description": "A game project made in approximately 12 hours at a 24 hour hackathon. Inspired by Just Shapes and Beats, this is a bullet hell game where obstacles are synchronized to music.",
    "thumbnailSrc": "src/img/Projects/RhythmBulletHellThumbnail.png"
}, {
    "title": "Mystery Dungeon Tactics",
    "description": "A turn-based strategy game inspired by the Pokemon Mystery Dungeon series and Final Fantasy Tactics games, mixing turn-based tactics, dungeon-crawling/roguelike, and RPG elements.",
    "thumbnailSrc": "src/img/BlenderDragon.png"
}, {
    "title": "Competitive Programming",
    "description": "Technically not a project, but a discussion of my adventures in competitive programming and computer science.",
    "thumbnailSrc": "src/img/Projects/CompetitiveProgrammingThumbnail.png"
}, {
    "title": "BCA Bus Map",
    "description": "A webapp that allows one to see the location of their bus ride home after the long school day.",
    "thumbnailSrc": "src/img/Projects/BCABusMapThumbnail.png"
}, {
    "title": "Trojan.Ransom.BCA",
    "description": "A \"fun\" application disguised as the video game Fortnite that encrypts your files. Inspired by WannaCry, this was an experiment in creating our own malware.",
    "thumbnailSrc": "src/img/Projects/TrojanRansomBCAThumbnail.png"
}, {
    "title": "CAS",
    "description": "A brief adventure into the world of CAS (Computer Algebra System) software and the data structures and algorithms used to accomplish such tasks.",
    "thumbnailSrc": "src/img/Projects/CASThumbnail.png"
}];