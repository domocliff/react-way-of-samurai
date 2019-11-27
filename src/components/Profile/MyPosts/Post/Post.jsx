import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://img1.freepng.ru/20171221/lwq/will-smith-face-png-image-5a3b7bd6002154.8885737715138477660005.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;