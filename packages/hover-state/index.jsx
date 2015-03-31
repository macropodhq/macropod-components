function attachHoverState(component) {
  return {
    onMouseEnter: () => component.setState({hover: true}),
    onMouseLeave: () => component.setState({hover: false}),
  };
}

module.exports = attachHoverState;
