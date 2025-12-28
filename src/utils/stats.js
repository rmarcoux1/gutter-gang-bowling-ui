export function buildScoreDistribution(games) {
    const BUCKETS = [
        { label: '70–79', min: 70, max: 79 },
        { label: '80–89', min: 80, max: 89 },
        { label: '90–99', min: 90, max: 99 },
        { label: '100–109', min: 100, max: 109 },
        { label: '110–119', min: 110, max: 119 },
        { label: '120+', min: 120, max: Infinity },
    ]

    const distribution = BUCKETS.map(b => ({
        range: b.label,
        count: 0,
    }))

    for (const g of games) {
        const bucket = BUCKETS.find(
            b => g.total_score >= b.min && g.total_score <= b.max
        )
        if (bucket) {
            distribution.find(d => d.range === bucket.label).count++
        }
    }

    return distribution
}
