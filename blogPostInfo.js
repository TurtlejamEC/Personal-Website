var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var BlogPostInfo = function () {
    function BlogPostInfo(day, month, year, title, description, thumbnailSrc) {
        _classCallCheck(this, BlogPostInfo);

        this.day = day;
        this.month = month;
        this.year = year;
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
    }

    _createClass(BlogPostInfo, [{
        key: "stringDate",
        value: function stringDate() {
            return BlogPostInfo.monthNames[this.month] + " " + this.day + ", " + this.year;
        }
    }]);

    return BlogPostInfo;
}();

BlogPostInfo.monthNames = ["0th month lol", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export var blogPostInfoArray = [new BlogPostInfo(18, 3, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 4, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 5, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 6, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 7, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 8, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"), new BlogPostInfo(18, 9, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png")];