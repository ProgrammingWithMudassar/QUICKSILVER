import React from 'react'
import { ResponsiveRadialBar } from '@nivo/radial-bar'

const MyResponsiveRadialBar = ({ data,h }) => {
    return (
        <div style={{ height: h }}>
            <ResponsiveRadialBar
                data={data}
                padding={0.15}
                cornerRadius={2}
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                colors={{ scheme: 'set2' }}
                enableTracks={false}
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                circularAxisOuter={null}
                labelsTextColor={{ from: 'color', modifiers: [] }}
                animate={false}
                legends={[]}
            />
        </div>
    )
}

export default MyResponsiveRadialBar;