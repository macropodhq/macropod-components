function attachHoverState(component) {
  return {
    onMouseEnter: (e) => component.setState({hover: true}),
    onMouseLeave: (e) => component.setState({hover: false}),
  };
}

module.exports = attachHoverState;