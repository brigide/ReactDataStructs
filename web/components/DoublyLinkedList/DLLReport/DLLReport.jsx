import React, {useState} from 'react';
import StrucutreModal from '../../StructureModal/StructureModal';

import pdfFile from './DLLReport.pdf';

import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default ({onClose}) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }


    return <StrucutreModal structureName="Doubly Linked List" onClose={() => onClose()}>

        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} />
        </Document>

        <div className="pages-area" 
            style={{display: 'flex', justifyContent: 'space-between'}}>
            
            <p style={{backgroundColor: "#deddd9", borderRadius: 5, padding: 5}} 
                onClick={() => setPageNumber(pageNumber - 1 > 0 ? pageNumber - 1 : 1 )}>
                    <FiArrowLeft/> Previous Page
            </p>
            
            <p style={{backgroundColor: "#deddd9", borderRadius: 5, padding: 5}} 
                onClick={() => setPageNumber(pageNumber + 1 < numPages ? pageNumber+1 : numPages)}>
                    Next Page <FiArrowRight/>
            </p>
        </div>

        <p>Page {pageNumber} of {numPages}</p>

    </StrucutreModal>
}
