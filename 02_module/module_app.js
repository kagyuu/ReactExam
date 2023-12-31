export class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return rectArea(this.width, this.height);
    }
};

export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return circleArea(this.radius);
    }
}

const rectArea = (height, widht) => {
    return height * widht;
}

const circleArea = (radius) => {
    return Math.PI * (radius ** 2)
}