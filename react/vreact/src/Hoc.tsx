/* 路由懒加载HOC */
export default function AsyncRouter(loadRouter) {
    return class Content extends React.Component {
      state = {Component: null}
      componentDidMount() {
        if (this.state.Component) return
        loadRouter()
          .then(module => module.default)
          .then(Component => this.setState({Component},
           ))
      }
      render() {
        const {Component} = this.state
        return Component ? <Component {
        ...this.props
        }
        /> : null
      }
    }
  }