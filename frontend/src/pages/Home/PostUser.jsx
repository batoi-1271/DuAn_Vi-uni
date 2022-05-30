import React, {useState } from "react";
import "./home.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
function PostUser () {
  const privicys = [
    { id: 1, name: 'Everyone' },
    { id: 2, name: 'Friends' },
    { id: 3, name: 'Only me' }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
   const [data,setData] = useState()
  //  const [images,setImage] = useState()
   const onOptionClicked = (value) =>  () => {
     setSelectedOption(value);
    setIsOpen(false);

  };
  const setParams = (event)=>{
    setData({[event.target.name] : event.target.value})
}


const[content,setContent]=useState('')



const  fetchs = (urls,headers) => {
  fetch(urls,headers)
          . then(response => { 
              console.log(response)
          })
          .catch(error => {
              console.log('error',error)
            
          });
}
 const  sendData = async () =>{
  // console.log(data)
  // RequestUpload();
  const file = document.getElementById("file");
  const formData = new FormData();
  for (let index = 0; index < file.files.length; index++) {
      formData.append('files', file.files[index]);  
  }
     if(file.files[0] != null){
      var postFileData = {
          method: "POST",
          headers:{
              'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
              //  "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryDZNoUooBnBqrBPqT"
          },
          body: formData
      };
      await  fetch("http://localhost:80/upload",postFileData)
      .then(response => {
         
              if(response.ok){
                  return response.json()
              }
              throw Error(response.status)
          
      })
      .then(result => {
     
   
         const images=  [result[0].id];
         console.log(images)
     const privacy = selectedOption != null ? selectedOption.id : 1
     
       const post={content,privacy,images}
     
   
  
    var  postData = {
      method: "POST",
      headers:{
          'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
          "Content-Type":"application/json"
         
      },
    
       body:JSON.stringify(post)
  };
  fetchs("http://localhost:80/post",postData)



      })
      .catch(error => {
          console.log('error',error)
                  
      });
     
     }else{
      const privacy = selectedOption != null ? selectedOption.id : 1
     
      const post={content,privacy}
      var  postData = {
        method: "POST",
        headers:{
            'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
            "Content-Type":"application/json"
           
        },
      
         body:JSON.stringify(post)
    };
    fetchs("http://localhost:80/post",postData)
     }
    


}

// const renData = () => {
//   const Privecy = selectedOption != null ? selectedOption.id : 1 
//   const student={content,Privecy}
//   console.log(student)
// }

  return (
    <section>
      <form action="">
        <div className="postUser" id="postUser">
          <div className="avatar">
            

            <Link to="./profile">
              <img
                alt="Dương Ngô Tùng"
                src="https://pbs.twimg.com/profile_images/1472366803342925826/R9TYcoFx_bigger.jpg"
              />
            </Link>
          </div>
          <div className="contentPost">
            <div className="contentPost__user">
            <textarea type="text" placeholder="What's happening?" name = "content"   onChange={(e)=>setContent(e.target.value)} 
             />
            </div>

            <OutsideClickHandler
              onOutsideClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="privacy">
                <div className="select" onClick={toggling}>
                {selectedOption ? selectedOption.name + ' can reply' : 'Everyone'}
                </div>
                {isOpen && (
                  <div className="dropContainerPrivate">
                    <div className="dropList">
                      <div className="title">
                        <h4>Who can reply?</h4>
                        <p>
                          Choose who can reply to this Tweet. Anyone mentioned
                          can always reply.
                        </p>
                      </div>
                      {privicys.map((privicy) => (
                    <div
                      className="items"
                      onClick=  {onOptionClicked(privicy)}
                      key={privicy.id}
                      
                    >
                  {privicy.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </OutsideClickHandler>
          </div>
        </div>
        <div className="iconPost">
          <div className="content">
            <div className="icon">
              {/* <a href="">
              <i class="fas fa-image"></i>
            </a> */}
                <input type="file" id = "file" multiple />
            <a href="">
              <i class="fas fa-map-marker-alt"></i>
            </a>
        
            <a href="">
            <i class="far fa-laugh"></i>
            </a>
            </div>
            <div className="btnPost">
             {/* <input type="button" name="" id="" variant="contained" value="send"   onClick = {sendData}/> */}
            {/* <input type="button" name="" id="" variant="contained" value="send"  onClick={renData}/> */}
            <button type="button" onClick={sendData}  variant="contained" >Post</button>
            {/* <Button variant="contained"  onClick = {sendData}>Post </Button> */}
            </div>
          </div>
        </div>
      </form>
    
    
    </section>
    
  );
};

export default PostUser;
