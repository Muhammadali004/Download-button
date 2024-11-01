import React from 'react';
import DownloadButton from './components/DownloadButton/DownloadButton';

const App = () => {
  // Путь к файлу в папке public
  const pdfUrl = `${process.env.PUBLIC_URL}/Maqola.pdf`;

  return (
    <div>
      <h1>Скачать PDF</h1>
      <DownloadButton fileUrl={pdfUrl} fileName="Maqola.pdf" />
    </div>
  );
};

export default App;