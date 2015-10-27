// from https://github.com/Khan/react-components/blob/bb1c2c5053074e8421244f2f862684f47b856455/js/layered-component-mixin.jsx

import React from 'react';

const LayeredComponentMixin = {
    componentDidMount: function() {
        this._layer = document.createElement('div');
        document.body.appendChild(this._layer);
        this._renderLayer();
    },

    componentDidUpdate: function() {
        this._renderLayer();
    },

    componentWillUnmount: function() {
        this._unrenderLayer();
        document.body.removeChild(this._layer);
    },

    _renderLayer: function() {
        var layerElement = this.renderLayer();
        if (layerElement === null) {
            React.render(<noscript />, this._layer);
        } else {
            React.render(layerElement, this._layer);
        }

        if (this.layerDidMount) {
            this.layerDidMount(this._layer);
        }
    },

    _unrenderLayer: function() {
        if (this.layerWillUnmount) {
            this.layerWillUnmount(this._layer);
        }

        React.unmountComponentAtNode(this._layer);
    }
};

module.exports = LayeredComponentMixin;
