import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useGames } from './hooks/useGames'
import { supabase } from './lib/supabase'

import AppTabs from './components/AppTabs'
import Dashboard from './pages/Dashboard'
import GameEntry from './pages/GameEntry.jsx'

export default function App() {
    const [players, setPlayers] = useState([])
    const [playerId, setPlayerId] = useState(null)

    const { games } = useGames(playerId)

    useEffect(() => {
        async function loadPlayers() {
            const { data, error } = await supabase
                .from('players')
                .select('*')
                .order('name')

            if (!error && data.length) {
                setPlayers(data)
                setPlayerId(data[0].id)
            }
        }

        loadPlayers()
    }, [])

    return (
        <BrowserRouter>
            <div className="app">
                <AppTabs />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Dashboard
                                players={players}
                                playerId={playerId}
                                setPlayerId={setPlayerId}
                                games={games}
                            />
                        }
                    />

                    <Route
                        path="/entry"
                        element={<GameEntry players={players} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
