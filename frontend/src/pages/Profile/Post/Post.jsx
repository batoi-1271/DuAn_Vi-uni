import React from "react";

import './post.scss'
import DetailPost from "../../../components/DetailPost/DetailPost";



var totalPage = 0;
const Post = () => {
const [postUser,setPostUser]= useState(null);
const accessToken = localStorage.getItem('accessToken');
const [pageCount, setPageCount] = useState(0)
 const [paging, setpaging] = useState()
  const [page,setpage] = useState ({
       "index" : 0,
       "size": 3
  })
  const scrollToEnd = () =>{
    // setdemo(demo + 1)
    const size = page.size +1;
    setpage({size: size, index: 0})
      
   }
   window.onscroll = function(){
     if(window.innerHeight + document.documentElement.scrollTop >=
       document.documentElement.offsetHeight
       ){
         scrollToEnd()
         setPageCount(totalPage)
       }
   }


  useEffect(async ()=>{
  const paging = page
  console.log(paging)
await fetch("http://localhost:80/post/all/me",{
      method: "POST",  
       headers:{
        'Authorization': 'Bearer ' + accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(paging),
   
    })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            throw Error(response.status)
        })
        .then((result) => {
          // if(result != null && postUser == null){
    
          //   setPostUser(result)
          //   console.log("res: ", result);
  
          // }
          setPostUser(result)
          console.log("count: ", result.content.length);
          totalPage = result.content.length
          
        })

      
}, [pageCount]);

 //console.log(postUser)

// if (postUser != null){
//   Object.entries(postUser.content).map((arr,i) =>  console.log(arr[1].images))
// }


  return (
    <div className="card-post">
      <DetailPost/>
    </div>
  );
}

export default Post;