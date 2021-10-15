import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import For from "@components/common/For"
import { routeConfig } from "@/route.config"
function App() {
  return (
    <BrowserRouter>
      <For 
        Parent={props => <Switch {...props} />}
        items={Object.keys(routeConfig)}
        renderItem={(routeKey, index) => {
          const Component = routeConfig[routeKey].component;
          return (
            <Route 
              path={routeConfig[routeKey].route}
              exact={routeConfig[routeKey].exact}
              key={index}
              render={props => {
                const updatedProps = {
                  ...props,
                  ...routeConfig[routeKey].props
                }
                return (
                  <Component {...updatedProps} />
                )
              }}
            />
          )
        }}
      />
    </BrowserRouter>
  )
}

export default App
