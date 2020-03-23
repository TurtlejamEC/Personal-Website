export class BlogPostInfo {
    constructor(day, month, year, title, description, thumbnailSrc) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
    }

    stringDate() {
        return BlogPostInfo.monthNames[this.month] + " " + this.day + ", " + this.year;
    }
}

BlogPostInfo.monthNames = [
    "0th month lol", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

export const blogPostInfoArray = [
    new BlogPostInfo(18, 3, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 4, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 5, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 6, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 7, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 8, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new BlogPostInfo(18, 9, 2020, "Test Title", "Test Description", "src/img/BlenderDragon.png"),
];