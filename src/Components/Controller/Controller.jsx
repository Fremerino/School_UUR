import { useState, useEffect } from "react";

function Controller() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost/my-app/src/Model/Main.php")
        .then((response) => {
          console.log('Raw response:', response);
          // Zobrazíme surový text odpovědi pro debugging
          return response.text().then(text => {
            console.log('Raw text:', text);
            // Pokud je text prázdný, vyhodíme chybu
            if (!text) throw new Error('No data received');
            // Zkusíme text naparsovat jako JSON
            try {
              return JSON.parse(text);
            } catch (e) {
              console.error('JSON parse error:', e);
              throw new Error(`Failed to parse JSON: ${text}`);
            }
          });
        })
        .then((data) => {
          console.log('Parsed data:', data);
          setData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error.message);
        });
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;
    
    return (
      <div>
        <p>Organization: {data.organization}</p>
        <p>Founder: {data.founder}</p>
        <p>Employee: {data.employee}</p>
      </div>
    );
}

export default Controller;