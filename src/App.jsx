import { useEffect, useState } from 'react'
import AveragesChart from './components/AveragesChart'
import OrangePinsChart from './components/OrangePinsChart'
import MoneyTable from './components/MoneyTable'
import BowlerCharts from './components/BowlerCharts'

function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/stats.json')
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error('Failed to load stats:', err))
    }, [])

    if (!data) return <div style={{ color: '#F3F4F6', textAlign: 'center', padding: 50 }}>Loading stats...</div>

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#0f172a',
            minHeight: '100vh',
            padding: 20
        }}>
            <h1 style={{ color: '#F3F4F6', marginBottom: 40, textAlign: 'center' }}>
                Gutter Gang Bowling Stats 🎳
            </h1>

            <div style={{ width: '100%', maxWidth: 1000 }}>
                <BowlerCharts weeks={data.weeks} players={data.players} />
                <OrangePinsChart weeks={data.weeks} players={data.players} />
                <MoneyTable weeks={data.weeks} players={data.players} />
            </div>
        </div>
    )
}

export default App
