import './App.css';
import Dashboard from "./components/Dashboard";
import Page from "./components/Page";

function App() {
    return (
        <main>
            <section className="glass">
                <Dashboard/>
                <Page/>
            </section>
        </main>
    );
}

export default App;
