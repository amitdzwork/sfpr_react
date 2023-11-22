import MaterialTable from "material-table";
import axios from "axios";
import { useQuery } from "react-query";




const FacilityList = () => {
  const api = "https://sffacilitiesapi.azurewebsites.net/api/facilities"
  const {  data, isLoading } = useQuery("facilities", () =>
  axios.get(api).then(
      (resp) => resp.data)    
  );

  const columns = [  
        { field: 'facilityname', title: 'Name', defaultSort:'asc', filtering:true,filterPlaceholder:'Filter by Name' },
        { field: 'facilitytype', title: 'Type', filtering:true, filterPlaceholder:'Filter by Type'},        
        { field: 'city',title: 'City', filtering: true, filterPlaceholder:'Filter by City'},
        { field: 'zipcode',title: 'Zipcode', filtering: true, filterPlaceholder:'Filter by Zipcode' },
        { field: 'address',title: 'Address', sorting:false, filtering: false  },
        { field: 'squarefeet',title: 'Square Feet', filtering: false },
        { field: 'perimeter',title: 'Perimeter', filtering: false } ,
        { field: 'acres',title: 'Acres', filtering: false } ,
        { field: 'latitude',title: 'Latitude', filtering: false } ,
        { field: 'longitude',title: 'Longitude', filtering: false } 
      ]
    
      if (isLoading) {
        return <h4 style={{ color: 'red' }}>Loading data...</h4>
      }
    return (
        <div className="tabwrap">      
          <MaterialTable 
            title=""            
            columns={columns}      
            data={data}       
            components={{
              OverlayLoading: props => (<div>Loading..</div>)
            }}
            state={{ isLoading: true }}
            localization={{
              pagination: {
                labelRowsPerPage: '',
                labelDisplayedRows:'{from}-{to} of {count}',
                border:'25px'
              }              
            }}
            options={{
              tableLayout:"auto",              
              pageSize: 20,
              paginationPosition:"both",
              paginationType:"stepped",
              showFirstLastPageButtons:true,                 
              searchAutoFocus:true,
              toolbar:true,
              actionsColumnIndex:-1,
              addRowPosition:"first",
              loadingType:"linear",
              isLoading:true,
              style:{
                backgroundColor:'#E9F4F9',
                border:'solid 1px black'                
              },              
              rowStyle: (rowData, index) => {            
                if (index % 2) {
                    return {backgroundColor: "#f2f2f2"}
                }
              },                 
              actionsCellStyle:{
                backgroundColor:'#BFE5F7',
              },
              headerStyle: {
                borderStyle:'groove',
                backgroundColor:'#BFE5F7',
               
                fontWeight:'bold'                
              },
              filtering:true                                                  
            }}                  
    ></MaterialTable>
        </div>
    )
}

export default FacilityList;