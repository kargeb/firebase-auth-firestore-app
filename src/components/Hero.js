import React, { useEffect } from 'react';
import { auth } from '../fbaseConfig';

const Hero = () => {
  useEffect(() => {
    console.log('jestem w useffect');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('JEST ZALOGOANY', user);
      } else {
        console.log('NIE JEST ZALGOWANY');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <section className="hero is-primary mt-4" style={{ height: '100%' }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Primary title</h1>
          <h2 className="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
