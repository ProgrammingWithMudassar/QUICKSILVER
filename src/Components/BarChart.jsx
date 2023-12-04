import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


const BarChart = ({data}) => {
  return (
    <div style={{ height:"200px"}}>
       <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 20, bottom: 50, left: 30 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}

    />
    </div>
  )
}

export default BarChart
