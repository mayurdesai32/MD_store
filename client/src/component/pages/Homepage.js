import React, { useState } from 'react';
import Landing from '../layout/Landing';
import Title from '../layout/Title';
import Card from '../layout/Card';
import Catlog from '../layout/Catlog';
import imge1 from '../image/image1.jpeg';
const Homepage = () => {
  const [category, setcategory] = useState([
    { title: 'men', imgUrl: 'https://picsum.photos/200/300' },
    { title: 'electronic', imgUrl: '' },
    { title: 'laptop', imgUrl: '' },
    { title: 'shoes', imgUrl: '' },
  ]);

  return (
    <div>
      <Landing />
      {/* feature category */}
      <div className='catelog container'>
        <Title title={'category'} />
        <div className='row'>
          {category.map((ele, index) => (
            <Catlog key={index} item={ele} />
          ))}

          {/* end */}
        </div>
      </div>
      <div className='feature-catelog container'>
        <Title title={'latest product'} />
        <div className='row'>
          {/*  */}
          <button className='dir-btn'>prev</button>
          <div className='col-5'>
            <Card />
          </div>
          {/*  */}
          {/*  */}
          <div className='col-5'>
            <Card />
          </div>
          {/*  */} {/*  */}
          <div className='col-5'>
            <Card />
          </div>
          {/*  */} {/*  */}
          <div className='col-5'>
            <Card />
          </div>
          {/*  */}
          <button className='dir-btn'>next</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
