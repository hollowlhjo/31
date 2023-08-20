import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: '' };

  componentDidCatch(error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <div>Помилка: {this.state.errorMessage}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;