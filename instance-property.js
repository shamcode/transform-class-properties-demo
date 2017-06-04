class Foo {
    constructor() {
        console.log( this.baz );
    }

    baz = 'default';
}

class Bar extends Foo {
    baz = 'Wow';
}

new Bar();

