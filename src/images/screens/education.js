import data from './data.json'

function Education() {


      var arr = ['Headache',"Tenderness","Cramps","Fatigue","Bloating","Acne","Nausea","Backpain"]
    return (
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',backgroundColor:'black',color:'white'}}>
        <h1>Education</h1>
        </div>
        
        <div>
        <iframe className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/DBe7-PHRav8?autoplay=0`}
          style={{border:'1px solid black',margin:'20px 20px',display: 'flex',  flexWrap:'wrap',justifyContent:'center', alignItems:'center', height: '40vh',borderWidth:'2px',width:'90%'}}>
        </iframe>

        <div style={{margin:'50px 20px',display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
        <h3>About 1-2 weeks before menstrual bleeding begins, women typically begin to experience physical and emotional changes. Premenstrual syndrome (PMS) symptoms affect 90% of women at some point during their reproductive lives. Some women experience the signs and symptoms of PMS more severely than others.
        Many uncomfortable or unpleasant period signs and symptoms, including as cramps and sore breasts, are caused by changing hormone levels. The extent to which brain chemicals are involved is likewise unknown.
        Three to four days following the start of bleeding, period symptoms and indicators typically disappear.          
        </h3>      
        </div>
        <div>
        
        </div>
        <iframe className='video'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://youtube.com/embed/cjbgZwgdY7Q`}
          style={{border:'1px solid black',margin:'20px 20px',display: 'flex',  flexWrap:'wrap',justifyContent:'center', alignItems:'center', height: '40vh',borderWidth:'2px',width:'90%'}}>
        </iframe>
        <img width={400} height={300} src="https://ciplamed-library.com/sites/default/files/Slide28_93.JPG" alt="BigCo Inc. logo"/>
        <div>
        <br></br>
          <a className="my-button" href='/symptoms' style={{marginLeft:'0px'}}>Having any troubles? ----></a>
        </div>
        </div>
        <br></br>
        
    </div>
    );
  }
  
  export default Education;
  