import React from "react";
 
import { AreaChart, LineChart, PieChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"> <h1> custom visualizer </h1>
 
<Grid>
   
<GridItem columnSpan={6}>
    <h1>AreaChart</h1>
    <AreaChart
            accountId={4438263}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2M3xJTkZSQXxOQXw3OTc2Mzk0NTQwNTkwNTU2Njc2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
 
<GridItem columnSpan={6}>
  <h1>LineChart</h1>
    <LineChart
            accountId={4438263}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2M3xJTkZSQXxOQXw3OTc2Mzk0NTQwNTkwNTU2Njc2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
  <h1>PieChart</h1>
<PieChart
            accountId={4438263}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2M3xJTkZSQXxOQXw3OTc2Mzk0NTQwNTkwNTU2Njc2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>

</GridItem>

</Grid>
 
 
 
   
    </div>
  );
};
 
export default index;