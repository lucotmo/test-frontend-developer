import Menu from './components/Menu'
import Form from './components/Form'

import './styles.css'

export const App = () => {
  return (
    <>
      <header className="header">
        <Menu />
      </header>
      <main className="main">
        <Form />
      </main>
    </>
  )
}
