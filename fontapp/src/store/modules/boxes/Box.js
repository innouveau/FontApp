class Box {
    constructor({
        id = null,
        left= 0,
        top = 0,
        width = 300,
        height = 100,
        string = 'Lorem ipsum dolor sit amet'
    }) {
        this.id = id;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.string = string;
    }
}

export default Box;