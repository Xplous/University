import './App.css'
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent.tsx";
import {BodyComponent} from "./components/BodyComponent/BodyComponent.tsx";
import GetData from "./utils/GetData.ts";
import {useEffect, useState} from "react";
import PostAddModal from "./components/Modals/PostAddModal.tsx";

function App() {
  const [isLoading, toggleLoading] = useState(false)
  const PostsData = GetData({toggleLoading});
  const [newPost, setNewPost] = useState([]);
  const [data, setData] = useState([])
  const [openModal, setOpenModal] = useState(false)
  if (isLoading) {
      return (
          <div className='w-full h-[100vh] flex flex-col'>
              <HeaderComponent setOpenModal={setOpenModal}/>
              <div className='h-full flex justify-center items-center'>
                  <span className='loader'/>
              </div>
          </div>
      )
  }
    return (
    <>
      <div className='w-full h-full flex flex-col'>
          {openModal && <PostAddModal setNewPost={setNewPost} setOpenModal={setOpenModal}/>}
          <HeaderComponent setOpenModal={setOpenModal}/>
          <BodyComponent PostsData={PostsData} newPost={newPost}/>
      </div>
    </>
  )
}

export default App
