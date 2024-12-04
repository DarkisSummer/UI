import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Events from './pages/Events';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import AdminPage from './pages/AdminPage';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events/:id" element={<EventPage />} />
                <Route path="/events" element={<Events />}/>
                <Route path="/admin" element={<AdminPage />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App