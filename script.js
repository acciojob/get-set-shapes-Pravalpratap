//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Method to calculate and return the area of the rectangle
    getArea() {
        return this._width * this._height;
    }
}
class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}

	 getPerimeter() {
        return 4 * this.width; // Perimeter of square: 4 * side
    }
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
