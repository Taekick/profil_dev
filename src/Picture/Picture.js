import React from "react";

const Picture = () => {
  return (
    <>
      <img src='moi.jpg' alt='Alexandre' />
      <div class='links'>
        <a
          className='picto linkedin'
          href='http://www.linkedin.com/pub/alexandre-ly/61/368/894'
          title='LinkedIn'
        >
          LinkedIn
        </a>
        <a className='picto mail' href='mailto:aalexandre.ly@gmail.com'>
          E-mail
        </a>
      </div>
    </>
  );
};

export default Picture;
