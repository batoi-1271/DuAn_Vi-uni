import React,{useEffect,useState} from 'react';
import Tooltip from '@mui/material/Tooltip';
import './post.scss';



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
   
    <div className="card-post"  >
      {postUser != null ? 
    Object.entries(postUser.content).map((arr,i) => <div className="content-post">
      <div className="post-avatar">
        <img
          src={arr[1].author.avatar_image.link_image}
          alt=""
        />
      </div>
      <div className="post-info">
        <div className="post-info-header">
          <div className="post-name">
            <h4>{arr[1].author.last_name} {arr[1].author.first_name}</h4>
            {/* <p>@DngNgTng1</p> */}
            <p>22h</p>
          </div>
          <div className="post-dot">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="post-content">
          <div className="post-content-title">
            <p>{arr[1].content}</p>
          </div>
          <div className="post-content-img">
            <img
              src={arr[1].images[0] != null ? arr[1].images[0].link_image : null}
              alt=""
            />
          </div>
        </div>
        <div className="post-interactive">
          <div className="post-interactive-icon">
            <Tooltip id="comment" title="Comment" arrow>
              <button>
                <i class="far fa-comment-dots"></i>
              </button>
            </Tooltip>
            <p>1</p>
          </div>
          <div className="post-interactive-icon">
            <Tooltip id="heart" title="Like" arrow>
              <button>
                <i class="fal fa-heart"></i>
              </button>
            </Tooltip>
            <p>1</p>
          </div>
          <div className="post-interactive-icon">
            <Tooltip title="Share" arrow>
              <button>
                <i class="far fa-share-square"></i>
              </button>
            </Tooltip>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>) : null
   
      }
  </div>

);
}

export default Post;