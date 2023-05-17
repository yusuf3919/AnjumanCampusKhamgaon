import React from 'react';
import Slider from './Slider';
import anj from '../Assets/AnjumanImg/0.png';
import pic1 from '../Assets/AnjumanImg/1.jpg';
import pic2 from '../Assets/AnjumanImg/2.jpg';
import pic3 from '../Assets/AnjumanImg/3.jpg';
import pic4 from '../Assets/AnjumanImg/4.jpg';
import pic5 from '../Assets/AnjumanImg/5.jpg';
import pic6 from '../Assets/AnjumanImg/6.jpg';
import pic7 from '../Assets/AnjumanImg/7.jpg';
import pic8 from '../Assets/AnjumanImg/8.jpg';
import pic9 from '../Assets/AnjumanImg/9.jpg';
import pic10 from '../Assets/AnjumanImg/10.jpg';
import pic11 from '../Assets/AnjumanImg/11.jpg';
import pic12 from '../Assets/AnjumanImg/12.jpg';
import pic13 from '../Assets/AnjumanImg/13.jpg';
import pic14 from '../Assets/AnjumanImg/14.jpg';
import pic15 from '../Assets/AnjumanImg/15.jpg';
import pic16 from '../Assets/AnjumanImg/16.jpg';
import pic17 from '../Assets/AnjumanImg/17.jpg';
import pic18 from '../Assets/AnjumanImg/18.jpg';
import pic19 from '../Assets/AnjumanImg/19.jpg';
import pic20 from '../Assets/AnjumanImg/20.jpg';
import pic21 from '../Assets/AnjumanImg/21.jpg';
import pic22 from '../Assets/AnjumanImg/22.jpg';
import pic23 from '../Assets/AnjumanImg/23.jpg';
import pic24 from '../Assets/AnjumanImg/24.jpg';
import pic25 from '../Assets/AnjumanImg/25.jpg';
import pic26 from '../Assets/AnjumanImg/26.jpg';
import pic27 from '../Assets/AnjumanImg/27.jpg';
import pic28 from '../Assets/AnjumanImg/28.jpg';

const images = [
  anj,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
  pic25,
  pic26,
  pic27,
  pic28,
];
const Home = () => {
  return (
    <>
      <h1 className="align-center text-center text-3xl font-bold bg-yellow-300 border-double border-4 border-indigo-600 rounded-lg py-2">
        Hundred Years Ceremony
      </h1>
      <div className="flex-col flex items-center">
        <Slider images={images} />
      </div>
    </>
  );
};
export default Home;
