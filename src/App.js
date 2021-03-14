import Layout from './components/Layout'
import Bio from './components/Bio'
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Bio />
        <Tabs />
      </Layout>
    </div>
  )
}

export default App
