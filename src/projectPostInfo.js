export class ProjectPostInfo {
    constructor(title, description, thumbnailSrc) {
        this.title = title;
        this.description = description;
        this.thumbnailSrc = thumbnailSrc;
    }

    stringDate() {
        return BlogPostInfo.monthNames[this.month] + " " + this.day + ", " + this.year;
    }
}

export const projectPostInfoArray = [
    new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"),
    new ProjectPostInfo("Test Title", "Test Description", "src/img/BlenderDragon.png"),
];