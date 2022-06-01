import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import MorePost from "../../components/MorePost/MorePost";
import ModalImage from "../../components/ModalImgPost/modal-image";

import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

import Comment from "../../components/Comment/Comment";

import "./detailPost.scss";
var totalPage = 0;
const DetailPost = () => {

  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    top: 60%;
    left: 52%;
    transform: translate(-60%, -52%);
  `;

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  
  const [postUser,setPostUser]= useState(null);
  const accessToken = localStorage.getItem('accessToken');
  const [pageCount, setPageCount] = useState(0)
    const [page,setpage] = useState ({
         "index" : 0,
         "size": 1
    })

   
    const scrollToEnd = () =>{
      // setdemo(demo + 1)
      const size = page.size +6;
      setpage({size: size, index: 0})
      console.log(size)
     }
     window.onscroll = function(){
       if(window.innerHeight + document.documentElement.scrollTop >
         document.documentElement.offsetHeight
         ){
           scrollToEnd()
           setPageCount(totalPage)
            
         }
     }
{  console.log(  document.documentElement.offsetHeight)}
  
    useEffect(async ()=>{
    const paging = page
    console.log(paging)
    await fetch("http://viuni.tk/post/all/me",{
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
            totalPage = result.content.length
            
          })
          // setLoading(true);
          // setTimeout(() => {
          //   setLoading(false);
          // }, 1000);

  }, [pageCount]);
    
  return (
    <>
    {loading ? (
       <FadeLoader
       color={"#36BBD7"}
       speedMultiplier={2}
       css={override}
       loading={loading}
       size={30}
     />
      ) : (
        <div className="card-post">
        {postUser != null ?
        Object.entries(postUser.content).map((arr,i) =>  <div className="content-post">
          <div className="post-avatar">
          <img
            src={arr[1].author.avatar_image != null ? arr[1].author.avatar_image.link_image : null}
            alt=""
          />
            <div className="post-avatar_profile">
              {/* -----------header------------ */}
              <div className="avatar_profile-header">
                <img
                 src={arr[1].author.avatar_image != null ? arr[1].author.avatar_image.link_image : null}
                 alt=""
                />
                <button>
                  <span>Following</span>
                </button>
              </div>
              <div className="avatar_profile-boby">
                <h3>{arr[1].author.last_name} {arr[1].author.first_name}</h3>
                {/* <a href="">@HaoTran</a> */}
                <p>Cuộc sống áp lực</p>
                <div className="profile-body-fow">
                  <button>
                    {" "}
                    <a href="">1k Following</a>
                  </button>
                  <button>
                    <a href="">2k Followers</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="post-info">
            <div className="post-info_header">
              <div className="post-name">
              <h4>{arr[1].author.last_name} {arr[1].author.first_name}</h4>
                <p>@HaoTran</p>
                <p>22h</p>
              </div>
  
              <OutsideClickHandler
                onOutsideClick={() => {
                  setIsOpen(false);
                }}
              >
                <div className="post-more">
                  <div className="post-more_Content">
                    <button onClick={toggling}>
                      <i class="fas fa-ellipsis-h"></i>
                    </button>
                    {isOpen && <MorePost idPost={arr[1].id}/>}
                  </div>
                </div>
              </OutsideClickHandler>
            </div>
            <div className="post-content">
              <div className="post-content-title">
              <p>{arr[1].content}</p>
        
              </div>
  
              <div className="post-content-img">
                <ModalImage
                   src={arr[1].images[0] != null ? arr[1].images[0].link_image : null}
                  // alt={PostModal}
                  ratio={arr[1].images[0] != null ? `5:5` : ``}
                />
                {/* <img
                        src="https://images.unsplash.com/photo-1640622304293-ec9c89c6bac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                      /> */}
              </div>
            </div>
  
            <div className="post-interactive">
              <img src="" alt="" />
              <div className="post-interactive_icon">
                <Comment dataFromParent={arr[1].id}/>
              </div>
            </div>
          </div>
  
  
        </div>) : null
  }
      </div>
     )}
    </>
  );
  
};

export default DetailPost;
