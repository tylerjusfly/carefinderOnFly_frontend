const ApiusageDocs = () => {
  return (
    <div>
      <div>
        <h3> Usage : </h3>
        <span> </span>
        <pre>
          {`
//to fetch All Hosipital data 'limit' -10 by default, page 1 by default
    await fetch('https://carefinder-back.onrender.com', {
        method : 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
                'Content-Type': 'application/json',
                x-api-key: 'your-api-key',
                }
            })
                `}

          {`
    // Fetch or search results with hospital name
    await fetch('https://carefinder-back.onrender.com/hospital/list?limit=30&hospitalName=deda', {
        method : 'GET',
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
                'Content-Type': 'application/json',
                x-api-key: 'your-api-key',
                }
            })
    `}
        </pre>
      </div>
    </div>
  );
};

export default ApiusageDocs;
