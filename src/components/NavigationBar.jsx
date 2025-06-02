import React from 'react';
import '../css/NavigationBar.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export const NavigationBar = () => {
  return (
    <Navbar expand='lg' className='position-absolute w-100 z-2'>
      <Container>
        <motion.a
          className='navbar-brand text-light'
          href='./'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FontAwesomeIcon
            className='me-2'
            icon={faDumbbell}
            size='xl'
            style={{ color: '#b197fc' }}
          />
        </motion.a>
      </Container>
    </Navbar>
  );
};
