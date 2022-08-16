import { Header } from './features'
import { Main } from './features/main'
import { CommonRoutes } from './routes'

function App() {
    return (
        <div>
            <Header />
            <div className="mt-[68px] py-6 px-4 bg-gray-50 min-h-screen">
                <Main />
            </div>
        </div>
    )
}

export default App
