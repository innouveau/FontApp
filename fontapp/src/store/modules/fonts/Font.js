class Font {
    constructor(font) {
        this.id = font.id;
        this.title = font.content[0];
        this.fileName = font.content[1];
        this.category = font.content[3];
        this.style = font.content[10];
        this.url = font.content[11];
        this.boldness = font.content[4];
        this.serifSize = font.content[5];
        this.width = font.content[6];
        this.roundness = font.content[7];
        this.ascender = font.content[8];
    }
}

export default Font;