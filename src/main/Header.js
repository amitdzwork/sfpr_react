

const SFHeader = () => {  
    return (   
      <header>
             <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <div className="sfHeader jumbotron bg-cover text-white">
            <div className="container py-5 text-center">
                <h1 className="display-5 font-weight-bold">San Francisco Parks & Recreation Facilities</h1>               
            </div>
        </div>
        
      
            <h2 className="h3 font-weight-bold py-2">Dataset provided by DataSF (data.sfgov.org)</h2>
            <div className="row">
                <div className="col-lg-10">
                    <p className="font-italic text-muted">Facilities maintained by the San Francisco Recreation and Parks Department. A facility in this dataset represents a structural or physical amenity within a property's boundaries.</p>                    
                </div>
            </div>

      </header>
    )
}
export default SFHeader;