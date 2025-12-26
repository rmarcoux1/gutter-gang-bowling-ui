import StatCard from '../components/StatCard'
import ScoreTrend from '../components/ScoreTrend'
import ScoreDistribution from "../components/ScoreDistribution.jsx";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="stats-row">
                <StatCard label="Average (Last 10)" value="103" />
                <StatCard label="High Game" value="145" />
                <StatCard label="High Series" value="385" />
            </div>

            {/*<div className="grid-2">*/}
            {/*    <div className="panel">*/}
            {/*        <h3>Score Trend</h3>*/}
            {/*        <ScoreTrend data={last10Scores} />*/}
            {/*    </div>*/}

            {/*    <div className="panel">*/}
            {/*        <h3>Score Distribution</h3>*/}
            {/*        <ScoreDistribution data={scoreDistribution} />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
