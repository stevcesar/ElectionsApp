import {ResponsivePie} from "@nivo/pie"
import {useTheme,Box } from "@mui/material";
import { useKpiStore } from "../hooks/useKpiStore";
import { colorTokens } from "../theme";
export const BreakdownChart =(type)=>{
    const {kpis} = useKpiStore();
    const theme = useTheme();
    const colors = [
        colorTokens.primary[500],
        colorTokens.primary[100],
        colorTokens.primary[300],
        colorTokens.primary[400],
      ];
    const data = kpis.filter(({ _id: { election} })=> election==="Presidente")
    let i = 0;
    const formattedData = data.map(({_id,totalVotes})=>({
        id: `${_id.candidate.firstName} ${_id.candidate.lastName}`,
        label: `${_id.candidate.firstName} ${_id.candidate.lastName}`,
        value: totalVotes,
        color: colors[i++]
    }))
    return(
        <Box
            height="400px"
            width={undefined}
            minHeight="325px"
            minWidth= "325px"
            position="relative"
            padding={2}
        >
            <ResponsivePie 
                data={formattedData}
                theme={{
                    axis: {
                        domain: {
                            line:{
                                stroke: theme.palette.primary,
                            },
                        },
                        legend: {
                            text: {
                                fill: theme.palette.primary,
                            },
                        },
                        ticks: {
                            line: {
                                stroke: theme.palette.primary,
                                strokeWidth: 1,
                            },
                            text: {
                                fill: theme.palette.primary
                            },
                        },
                    },
                    legends:{
                        text:{
                            fill: theme.palette.primary,
                        },
                    },
                    tooltip:{
                        container:{
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.background.alt
                        },
                    },
                }}
                colors={{datum: "data.color"}}
                margin={{top: 10, right: 100, bottom: 100, left:100}}
                sortByValue={true}
                innerRadius={0.45}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsTextColor={theme.palette.primary.dark}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      justify: true,
                      translateX: 0,
                      translateY: 50,
                      itemsSpacing: 20,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: theme.palette.primary.light,
                      itemDirection: "left-to-right",
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: theme.palette.primary.dark,
                          },
                        },
                      ],
                    },
                  ]}
            />
        </Box>
    )
}