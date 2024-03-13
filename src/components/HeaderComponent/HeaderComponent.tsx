import {Link, useParams} from "react-router-dom";

export const HeaderComponent = ({setOpenModal}: {setOpenModal?: (arg: boolean) => void}) => {
    const params = useParams();
    return (
        <header className='w-full h-16'>
            <div className='w-full h-16 flex  items-center border-b bg-[#242424] fixed px-4'>
                {params.postId &&
                    <Link to={'/'} className='w-[40px] h-[40px] flex justify-center items-center border rounded cursor-pointer z-10'>
                        {'<'}
                    </Link>
                }
                {!params.postId && setOpenModal &&
                    <button onClick={() => setOpenModal(true)} className='px-2 h-[40px] flex justify-center items-center border rounded cursor-pointer z-10'>
                        Добавить пост
                    </button>
                }
                <h1 className='text-center absolute left-0 right-0 z-0'>XPLOUS</h1>
            </div>
        </header>
    );
};