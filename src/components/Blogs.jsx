import React, { useContext } from 'react';
import Spinner from './Spinner';
import { AppContext } from '../context/AppContext';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[600px] py-3 flex flex-col gap-y-7 '>
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className='font-bold text-xl'>{post.title}</p>
            <p className='text-[13px]'>
              By <span className='font-bold italic'>{post.author}</span> on <span className='font-bold'>{post.category}</span>
            </p>
            <p >Posted on <span className='font-bold text-[11px]'>{post.date} </span></p>
            <br/>
            <p className='text-sm mt-[12px]'>{post.content}</p>
            <div className='flex gap-x-3'>
              {post.tags.map((tag, index) => (
                <span key={index} className='underline text-blue-500 font-bold text-[8px] '>{` #${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
