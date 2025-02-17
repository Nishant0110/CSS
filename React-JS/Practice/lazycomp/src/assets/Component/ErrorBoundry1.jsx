import react from "react";
class ErrorBoundry1 extends react.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    componentDidMount(error, errorInfo) {
        this.setState({ hasError: true })
    }
    render() {
        if (this.state.hasError) {
            return <h1>Failed to fetch</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundry1;