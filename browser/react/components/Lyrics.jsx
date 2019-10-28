import React from 'react';

export default function ({setArtist, setSong, handleSubmit, artistQuery, songQuery, text}) {

  const artistChange = e => {
    setArtist(e.target.value);
  };

  const songChange = e => {
    setSong(e.target.value);
  };

  return (
    <div id="lyrics">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text" 
            value={artistQuery}
            placeholder="Artist"
            onChange={artistChange}
          />
          <input 
            type="text" 
            value={songQuery}
            placeholder="Song"
            onChange={songChange}
          />
        </div>
        <pre>{text || 'Search above!'}</pre>
        <button type="submit">Search for Lyrics</button>
      </form>
    </div>
  );

}