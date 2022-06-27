import React from 'react';
import SliderMainZero from '../components/SliderMainZero';
import FeatureBox from '../components/FeatureBox';

const hometwo= () => (
  <div>
      <section className="jumbotron no-bg bg-gray">
         <SliderMainZero/>
      </section>
      <section className='container-fluid bg-white'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>UpLoad and encrypt your Files</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className='container'>
          <FeatureBox/>
        </div>
      </section>


  </div>
);
export default hometwo;