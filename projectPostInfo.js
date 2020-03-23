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

export var projectPostInfoArray = [new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"), new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"), new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"), new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"), new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png")];