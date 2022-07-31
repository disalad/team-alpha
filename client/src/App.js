import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProjectsContextProvider from './context/ProjectsContext';

function App() {
    return (
        <BrowserRouter>
            <ProjectsContextProvider>
                <Layout>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                    </Routes>
                </Layout>
            </ProjectsContextProvider>
        </BrowserRouter>
    );
}

export default App;
