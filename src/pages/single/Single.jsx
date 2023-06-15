import React from './single.css'
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
      {/*single page */}
      <SinglePost />
      <Sidebar />
    </div>
  )
}
