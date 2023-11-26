import { useContext } from 'react';
import { RouterContext } from './index';

const Route = ({ path, exact, component: Component }) => {
    const { currentPath } = useContext(RouterContext);
    const shouldRender = exact ? currentPath === path : currentPath.startsWith(path);

    return shouldRender ? <Component /> : null;
};

const Switch = ({ children }) => {
    const routeChildren = children.filter(child => child.type.name === 'Route');
    const firstMatchedChild = routeChildren.find(route => route.props.path === window.location.pathname);

    return firstMatchedChild || null;
};

export { Route, Switch };