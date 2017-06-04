class Foo {
    constructor() {
        console.log( this.baz() );
    }

    baz() {
        return 'default';
    }
}

class Bar extends Foo {
    baz() {
        return 'Wow';
    }
}

new Bar();

