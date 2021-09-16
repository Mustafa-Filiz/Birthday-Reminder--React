import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
    const [showItem, setShowItem] = useState(true);

    return (
        <main>
            <section className="container">
                <h3>{showItem ? data.length : '0'} birthdays today</h3>
                {showItem && data.map((item) => <List person={item} />)}
                <button onClick={() => setShowItem(!showItem)}>
                    {showItem ? 'Clear All' : 'View All'}
                </button>
            </section>
        </main>
    );
}

export default App;
