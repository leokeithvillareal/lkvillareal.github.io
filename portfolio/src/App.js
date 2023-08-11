import { Experience } from './components/experience/Index';
import { Home } from './components/home/Index';
import { About } from './components/about/Index';
import { Portfolio } from './components/portfolio/Index';

function App() {
    console.log("portfolio v2.1 ")
    return (
        <>
            <Home />
            <About />
            <Portfolio />
            <Experience />
        </>
    );
}

export default App;
