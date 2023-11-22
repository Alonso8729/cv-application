import '../styles/ViewMode.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function ViewMode({ handleView, isViewMode }) {
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
        <div className='view-container'>
            <i onClick={handleView} className={`view-icon fa-regular fa-eye${isViewMode ? '-slash' : ''}`}></i>
            <i onClick={handleDownload} className={`download-icon fa-regular fa-file-pdf ${isViewMode? '':'hide'}`}></i>
        </div>
    )
}