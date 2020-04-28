import React from 'react';

const AppScreen = React.lazy(() =>
    import('./components/home/appscreen/index'));
const Camera = React.lazy(() =>
    import('./components/app/camera/index'));
const Mail = React.lazy(() =>
    import('./components/app/mail/index'));
const Messages = React.lazy(() =>
    import('./components/app/messages/index'));
const Notes = React.lazy(() =>
    import('./components/app/notes/index'));
const Bank = React.lazy(() =>
    import('./components/app/bank/index'));
const Phone = React.lazy(() =>
    import('./components/app/phone/index'));

const routes = [
    { path: '/', exact: true, component: AppScreen },
    { path: '/app/camera', exact: true, component: Camera },
    { path: '/app/mail', exact: true, component: Mail },
    { path: '/app/messages', component: Messages },
    { path: '/app/notes', component: Notes },
    { path: '/app/bank', exact: true, component: Bank },
    { path: '/app/phone', component: Phone }
]

export default routes;