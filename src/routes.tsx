import React from 'react';

const AppScreen = React.lazy(() =>
    import  ('./components/home/appscreen/index'));
const Camera = React.lazy(() =>
    import  ('./components/app/camera/index'));

const routes = [
    { path: '/', exact: true, component: AppScreen },
    { path: '/app/camera', exact: true, component: Camera },
]

export default routes;
