import data from './data.json';

function Exercise() {

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');
  const arr = id.split(',')
  var k;

    return (
      <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',backgroundColor:'black',color:'white'}}>
        <h1>Try Out These Exercises</h1>
        </div>
        
        <div style={{margin:'20px 20px',display: 'flex',  flexWrap:'wrap',justifyContent:'center', alignItems:'center', height: '40vh',borderWidth:'2px'}}>
        <a href="./products">Click Here to view and buy some online Products</a>
          {
            arr.map((e)=>
            {
              var d = "https://youtube.com/embed/" + data[e]['Video']
              return(
                <iframe className='video'
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src= {d}
              style={{border:'1px solid black',margin:'20px 20px',display: 'flex',  flexWrap:'wrap',justifyContent:'center', alignItems:'center', height: '40vh',borderWidth:'2px',width:'90%'}}>
              </iframe>
              )
            })
          }
        </div>
        
    </div>
    );
  }
export default Exercise;
  