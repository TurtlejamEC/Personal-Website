import React from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';
import { createBrowserHistory } from 'history';

// interface CustomRouterProps {
//     history: BrowserHistory;
// }

// export default function CustomRouter ( {history, ...props}: CustomRouterProps) {
//   const [state, setState] = React.useState({
//     action: history.action,
//     location: history.location
//   });

//   React.useLayoutEffect(() => history.listen(setState), [history]);

//   return (
//     <Router
//       {...props}
//       location={state.location}
//       navigationType={state.action}
//       navigator={history}
//     />
//   );
// };

export interface CustomRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
  browserHistory: BrowserHistory;
}

export default function CustomRouter({
    basename,
    children,
    window,
    browserHistory
  }: CustomRouterProps) {
    // let historyRef = React.useRef<BrowserHistory>();
    // if (historyRef.current == null) {
    //   historyRef.current = createBrowserHistory({ window });
    // }
  
    // let history = historyRef.current;
    let history = browserHistory
    let [state, setState] = React.useState({
      action: history.action,
      location: history.location,
    });
  
    React.useLayoutEffect(() => history.listen(setState), [history]);
  
    return (
      <Router
        basename={basename}
        children={children}
        location={state.location}
        navigationType={state.action}
        navigator={history}
      />
    );
  }