import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <main>
        <Header />

        <section className={styles.content}>
          <div className={styles.taskInfoContainer}></div>
        </section>
      </main>
    </>
  )
}

export default App
