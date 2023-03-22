import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
}