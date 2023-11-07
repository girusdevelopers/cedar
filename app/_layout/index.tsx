'use client';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const phoneNumber = 'whatsapp://send?phone=+919398080622';

  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <div className="App">
        <FloatingWhatsApp
          phoneNumber={phoneNumber}
          accountName="Admin"
          allowEsc={false} 
          allowClickAway={false} 
          notification
          notificationSound
          placeholder="Hello"
        />
      </div>
    </React.Fragment>
  );
};

export default Layout;







