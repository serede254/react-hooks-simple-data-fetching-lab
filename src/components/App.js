// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setIsLoading(true); // Set loading state to true
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImageUrl(data.message);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); 
      }
    };

    fetchDogImage(); 

  }, []); 

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;