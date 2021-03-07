class Font {
    constructor(font, id) {
        this.id = id;
        this.title = font[0];
        this.fileName = font[1];
        this.relativeFontSize = font[2];
        this.category = font[3];
        this.url = font[11];
        this.boldness = font[4];
        this.serifSize = font[5];
        this.width = font[6];
        this.roundness = font[7];
        this.ascender = font[8];
        this.weight = font[9];
        this.style = font[10];
        this.source = font[12];
        this.loaded = false;
    }
}

export default Font;