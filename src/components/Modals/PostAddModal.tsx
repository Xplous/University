import {useRef, useState} from "react";

const PostAddModal = ({setNewPost,setOpenModal}) => {
    const userRef = useRef(null);
    const titleRef = useRef(null);
    const bodyRef = useRef(null);
    const handelClick = () => {
        setNewPost([{id: 0, userName: userRef.current.value,title: titleRef.current.value, body: bodyRef.current.value}])
        setOpenModal(false)
    }
    return (
        <div className='w-[100vw] h-[100vh] bg-opacity-40 bg-black fixed z-20 flex justify-center items-center'>
            <div className='bg-gray-200 flex flex-col space-y-5 text-black px-5 pb-5'>
                <h1 className='text-center text-2xl mt-2'>Создать слайд</h1>
                <label>
                    <h1 className='text-xs mt-2'>Автор</h1>
                    <input ref={userRef} className='w-[200px] h-6 bg-gray-200 border-black border rounded '/>
                </label>
                <label>
                    <h1 className='text-xs mt-2'>Заголовок</h1>
                    <input ref={titleRef} className='w-[600px] h-6 bg-gray-200 border-black border rounded'/>
                </label>
                <label>
                    <h1 className='text-xs mt-2'>Текстовое поле</h1>
                    <textarea ref={bodyRef} className='w-[600px] min-h-40 h-40 bg-gray-200 border-black border rounded align-text-top'/>
                </label>
                <button onClick={handelClick} className='px-2 h-[40px] flex justify-center items-center border rounded cursor-pointer z-10 border-black'>
                    Отправить
                </button>
            </div>
        </div>
    );
};
export default PostAddModal;