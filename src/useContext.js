import React, { createContext, useState, useEffect, useContext } from 'react';

const ApiDataContext = createContext();

const ApiDataList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider value={apiData}>
      <ApiDataListContent />
    </ApiDataContext.Provider>
  );
};

const ApiDataListContent = () => {
  const apiData = useContext(ApiDataContext);

  return (
    <ul>
      {apiData.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ApiDataList;