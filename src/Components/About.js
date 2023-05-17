import React from 'react';
// import logo from '../Assets/AnjumanImg/Logo.jpg';
const About = () => {
  return (
    <>
      {/* <div className="flex align-center justify-center">
        <img
          src={logo}
          alt="corrupt"
          height={100}
          width={100}
          className="rounded-full m-1"
        />
        <h1 className=" mt-8 ml-2 text-3xl font-bold">About Anjuman</h1>
      </div>
      <div>
        <p className="mx-4 mt-4">
          Anjuman Mufidul Islam is a non-governmental organization (NGO). The
          registration number of the organization is 30-07-1923. It was
          established in the year 1923. Anjuman Mufidul Islam works in the area
          of Children, Education & Literacy, Minority Issues, Science &
          Technology, Sports, Vocational Training, Women Development &
          Empowerment, etc. The organization works towards the promotion of
          sustainable development. The organization operates in Maharashtra,
          India.
        </p>
        <br />
        <p className="pb-4 mx-4">
          👨‍⚕️ Dr Waquarul Haq Khan ☎️: 9822221432, 07263-252208
          <br />
          Anjuman Mufidul Islam Anjuman Campus, Nandura Road, KHAMGAON, PIN. 444
          303, Nandura, , Maharashtra, India
        </p>
      </div> */}

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full block md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
              <div className="bg-indigo-600 h-40 w-40 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-4xl font-bold">W</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                Dr WAQUAR UL HAQ KHAN
              </h2>
              <p className="text-gray-700 text-center">
                President of Anjuman Mufidul Islam Anjuman Campus.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
              <div className="bg-indigo-600 h-40 w-40 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-4xl font-bold">T</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center">
                Mr.Tufail Ahmad Khan
              </h2>
              <p className="text-gray-700 text-center">
                Secretary of Anjuman Mufidul Islam Anjuman Campus.
              </p>
            </div>
          </div>{' '}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold mb-2">Our History</h3>
            <p className="text-gray-700 max-w-xl mx-auto mb-8">
              Anjuman Mufidul Islam is a non-governmental organization (NGO).
              The registration number of the organization is 30-07-1923. It was
              established in the year 1923. Anjuman Mufidul Islam works in the
              area of Children, Education & Literacy, Minority Issues, Science &
              Technology, Sports, Vocational Training, Women Development &
              Empowerment, etc. The organization works towards the promotion of
              sustainable development. The organization operates in Maharashtra,
              India.
            </p>
            <a
              href="/"
              className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
