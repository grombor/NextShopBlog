import React, {useEffect, useState} from 'react';
import styles from './DragAndDropImagesImporterStyles.module.css';
import {Button} from './Button';

function DragAndDropImagesImporter({ filesArray, cleanSignal }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  useEffect(() => setSelectedFiles([]), [cleanSignal]);

  useEffect(() => filesArray(selectedFiles), [selectedFiles]);
  const handleFileSelect = (event) => {
    const files = event.target.files;
    const selectedFilesArr = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      selectedFilesArr.push(files[i]);
    }

    setSelectedFiles(selectedFilesArr);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const selectedFilesArr = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      selectedFilesArr.push(files[i]);
    }

    setSelectedFiles(selectedFilesArr);
    setIsDraggingOver(false);
  };

  const handleRemoveFile = (index) => {
    const selectedFilesArr = [...selectedFiles];
    selectedFilesArr.splice(index, 1);
    setSelectedFiles(selectedFilesArr);
  };

  return (
    <div>
      <div
        // className={isDraggingOver ? "drop-zone dragging-over" : "drop-zone"}
        className={`dragging-over is-fullwidth ${styles.draggingOver}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          margin: '10px',
          border: '2px solid #082333',
          borderCollapse: 'separate',
          borderSpacing: 0,
          borderRadius: '4px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <p className="is-uppercase" style={{ margin: '5px' }}>
          Przeciągnij zdjęcia
        </p>
        <input
          type="file"
          onChange={handleFileSelect}
          multiple
          style={{ display: 'none' }}
        />
        <div className={`preview ${styles.preview}`}>
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className={`preview-item ${styles.previewItem}`}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className={`img ${styles.img}`}
              />
              <Button
                size="small"
                type="danger"
                onClick={() => handleRemoveFile(index)}
              >
                Usuń
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DragAndDropImagesImporter;
