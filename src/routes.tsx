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
const Contacts = React.lazy(() =>
    import('./components/app/contacts/index'))
const Calculator = React.lazy(() =>
    import('./components/app/calculator/index'));
const Call = React.lazy(() =>
    import('./components/home/call/index'));
const Settings = React.lazy(() =>
    import  ('./components/app/settings/index'));

const routes = [
    { path: '/', exact: true, component: AppScreen },
    { path: '/call', component: Call },
    { path: '/app/camera', exact: true, component: Camera },
    { path: '/app/mail', exact: true, component: Mail },
    { path: '/app/messages', component: Messages },
    { path: '/app/notes', component: Notes },
    { path: '/app/bank', exact: true, component: Bank },
    { path: '/app/contacts', component: Contacts },
    { path: '/app/phone', component: Phone },
    { path: '/app/settings', exact: true, component: Settings },
    { path: '/app/calculator', exact: true, component: Calculator }
]

export default routes;