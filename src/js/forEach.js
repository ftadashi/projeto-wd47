Array.prototype.forEach = function(obj) {
    const elements = this;
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        obj(elements[i], i, this);
    }
};