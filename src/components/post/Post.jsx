import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img  src="images/post1.PNG" className="postImage"></img>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">React </span>
            <span className="postCat">Laravel</span>
        </div>
        <span className="postTitle"> Learn to More about Web</span>
        <span className="postDate"> 1 hour ago</span>
      </div> 
      <p className="postDesc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, corporis totam recusandae velit
         dolor autem dolores omnis soluta quasi quidem quod exercitationem cum aut cupiditate accusamus a 
         ut illo tempora</p>
    </div>
  )
}
