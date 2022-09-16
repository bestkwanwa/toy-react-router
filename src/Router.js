import React, { useEffect, useState } from 'react';

export default function Router({ routes }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        // history back or forward.
        window.addEventListener('popstate', onLocationChange);
        return () => window.removeEventListener('popstate', onLocationChange)
    }, [])

    return routes.find(({ path, component }) => path === currentPath)?.component
}

export function navigate(href) {
    // pushState won't trigger a popstate event, only change url.
    window.history.pushState({}, "", href);
    // trigger a popstate event manually.
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
}

export function Link({ className, href, children }) {
    const onClick = (event) => {
        // with meta in mac or ctrl in windows, it will open a new tab after clicking <a>.
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // prevent default action of <a>.
        event.preventDefault();
        // handle change of route.
        navigate(href)
    };
    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};