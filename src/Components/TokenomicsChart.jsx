import React from 'react'
import { ResponsivePie } from '@nivo/pie'


const TokenomicsChart = ({data}) => {
  return (
    <div style={{ height:"230px", width:"120%" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 20, bottom: 80, left: 20 }}
        valueFormat=" >-"
        startAngle={-180}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={16}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
    />
    </div>
  )
}

export default TokenomicsChart
