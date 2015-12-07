const React = require('React');
const {div} = React.DOM;

class Scene {
    constructor() {
        this.components = [];
    }

    addComponent(component) {
        component.on('dead', () => this.removeComponent(component));
        this.components.push(component);
    }
    removeComponent(component) {
        const index = this.components.indexOf(component);
        this.components.splice(index, 1);
    }

    update(delta, timestamp) {
        this.components.forEach(cmp => cmp.update(delta, timestamp));
    }

    render() {
        return (
            <div>implement render</div>
        );
    }
}


module.exports = Scene;
