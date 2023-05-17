import React from 'react';
// import AnjumanITI from './AnjumanITI';
import ITIbuilding from '../Assets/ITI_images/ITI-building.jpg';
import ITIbuilding1 from '../Assets/ITI_images/ITIbuilding1.jpg';
import pic1 from '../Assets/ITI_images/Parle-visit.jpg';
import pic2 from '../Assets/ITI_images/AnjumanITI.jpg';
import pic3 from '../Assets/ITI_images/Projector-based-study.jpg';
import pic4 from '../Assets/ITI_images/Tools.jpg';
import pic5 from '../Assets/ITI_images/With-students.jpg';
import pic6 from '../Assets/ITI_images/With-students1.jpg';
import Slider from './Slider';

const pictures = [
  ITIbuilding,
  ITIbuilding1,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
];
const ItiPics = () => {
  return (
    <>
      <h1 className="align-center text-center text-3xl font-bold bg-yellow-300 border-double border-4 border-indigo-600 rounded-lg py-2">
        Anjuman ITI khamgaon
      </h1>
      <div className="flex-col flex items-center">
        {/* <AnjumanITI pictures={pictures} /> */}
        <Slider images={pictures} />
      </div>
    </>
  );
};

export default ItiPics;
