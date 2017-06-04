class Foo {
    constructor() {
        console.log( Foo.baz );
    }

    static baz = 'default';
}

class Bar extends Foo {
    static baz = 'Wow';
}

new Bar();

