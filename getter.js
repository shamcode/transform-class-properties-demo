class Foo {
    constructor() {
        console.log( this.baz );
    }

    get baz() {
        return 'default';
    }
}

class Bar extends Foo {
    get baz() {
        return 'Wow';
    }
}

new Bar();

