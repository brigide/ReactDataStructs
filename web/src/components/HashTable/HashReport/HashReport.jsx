import React, {useState} from 'react';
import StrucutreModal from '../../Modal/Modal';

import pdfFile from './HashReport.pdf';

import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default ({onClose}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }


    return <StrucutreModal modalTitle="Hash Table" onClose={() => onClose()}>

        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} />
        </Document>

        <div className="pages-area" 
            style={{display: 'flex', justifyContent: 'space-between'}}>
            
            <button  className="page-button" disabled={!(pageNumber - 1 > 0)} onClick={() => setPageNumber(pageNumber - 1)}>
                <FiArrowLeft/> Previous Page
            </button>
            
            <button className="page-button" disabled={!(pageNumber + 1 <= numPages)} onClick={() => setPageNumber(pageNumber + 1)}>
                Next Page <FiArrowRight/>
            </button>

        </div>

        <p>Page {pageNumber} of {numPages}</p>

    </StrucutreModal>
}
