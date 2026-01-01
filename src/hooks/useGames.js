import { useState, useEffect } from "react";
import { supabase} from "../lib/supabase.js";

export function useGames(playerId) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!playerId) return

        async function loadGames() {
            setLoading(true)

            const {data, error} = await supabase
                .from('games')
                .select(`
                id, 
                date,
                total_score,
                orange_pins,
                money_owed,
                strike_count,
                spare_count,
                ten_count
                `)
                .eq('player_id', playerId)
                .order('date', {ascending: true})

            if (!error) setGames(data)
            setLoading(false)
        }

        loadGames()
    }, [playerId])

        return { games, loading }
}