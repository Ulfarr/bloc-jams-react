import React from 'react';

const Landing = () => (
  <section className="Landing">
       <h1 className="hero-title">Music is the vehicle of our imagination!</h1>
    
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Customize your playlists</h2>
        <p className="point-description">Chose what you want to hear!</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;