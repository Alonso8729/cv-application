import '../../styles/TemplateSection.css'
import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumePDF from '../ResumePdf';

export default function TemplateSection({
    onClear,
    onLoad,
    personalInfo,
    educationList,
    experienceList,
    skillsList,
}) {


    const handleDownload = async () => {
        const capture = document.querySelector('.resume-container');
        try {
            const canvas = await html2canvas(capture);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
            pdf.save('resume.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };


    return (
        <div className='template-ctn'>
            <div className="template-btns">
                <button onClick={onClear} className='clear-btn' type='button'>
                    <i className="fa-solid fa-trash"></i>Clear Resume
                </button>
                <button onClick={onLoad} className='example-btn' type="button">
                    Load Example
                </button>
                <div style={{ display: 'none' }}>
                    <ResumePDF
                        personalInfo={personalInfo}
                        educationList={educationList}
                        experienceList={experienceList}
                        skillsList={skillsList}
                    />
                </div>
                <button onClick={handleDownload} className='download-btn'>
                    <i className="fa-regular fa-file-pdf"></i>Download
                </button>
            </div>
        </div>
    );
}