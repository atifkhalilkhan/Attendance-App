import { MasterContainer } from 'basuite'
import './App.css'
import AppRouter from './config/appRouter'
import { Provider } from 'react-redux'
import store from './config/redux/store'

function App() {

  return (<MasterContainer colorPrimary='#030712'>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MasterContainer>)
}

export default App
