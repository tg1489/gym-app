import React from 'react';
import '../css/Hero.css';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <>
      <header className='h-100 min-vh-100 d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <motion.div
              className='col-md-6 d-flex flex-column justify-content-start align-items-center align-items-sm-start'
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className='hero-subtitle text-light text-center text-sm-start text-uppercase'>
                Build your body
              </h2>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};
