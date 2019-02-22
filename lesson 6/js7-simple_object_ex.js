const rectangle = {
    "width": 5,
    "height": 5,
    "perimeter": function() {
        return (this.width + this.height) * 2;
    },
    "area": function() {
        return this.width * this.height;
    }
};

const circle = {
    "radius": 5,
    "perimeter": function() {
        return Math.PI * this.radius * 2;
    },
    "area": function() {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(rectangle.area());