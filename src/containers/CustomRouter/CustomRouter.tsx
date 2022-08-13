import React from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';

interface CustomRouterProps {
    history: BrowserHistory;
}

export default function CustomRouter ( {history, ...props}: CustomRouterProps) {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};