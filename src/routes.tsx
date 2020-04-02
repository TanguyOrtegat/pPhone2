import React from 'react';

const AppScreen = React.lazy(() =>
    import  ('./components/home/appscreen/index'));
const Camera = React.lazy(() =>
    import  ('./components/app/camera/index'));
const Mail = React.lazy(() =>
    import  ('./components/app/mail/index'));
const Messages = React.lazy(() =>
    import  ('./components/app/messages/index'));

const routes = [
    { path: '/', exact: true, component: AppScreen },
    { path: '/app/camera', exact: true, component: Camera },
    { path: '/app/mail', exact: true, component: Mail },
    { path: '/app/messages', exact: true, component: Messages },
]

export default routes;
