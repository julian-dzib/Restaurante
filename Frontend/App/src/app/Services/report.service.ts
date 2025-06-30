import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor() { }

  getReport(
    encabezado: string[],
    body: Array<any>,
    title: string,
    save?: boolean
  ) {
    //Tipo de documento que se va generar
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'letter',
    });
    //Formato de la tabla
    doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    autoTable(doc, {
      headStyles: {
        fillColor: [44, 62, 80],
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [251, 252, 252],
        cellWidth: 'auto',
        fontSize: 14,
      },
      bodyStyles: {
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [0, 0, 0],
        cellWidth: 'auto',
        fontSize: 12,
      },
      margin: { bottom: 10 },
      head: [encabezado],
      body: [body],
    });
    //Abrir en el navegador o imprimir el documento
    if (save) {
      const fecha = new Date();
      doc.save(
        fecha.getDate() +
        fecha.getMonth() +
        fecha.getFullYear() +
        fecha.getTime() +
        '.pdf'
      );
    } else {
      window.open(doc.output('bloburl'), '_blank', 'download=mi_pdf.pdf');
    }
  }

  getReport2(
    encabezado: string[],
    body: Array<any>,
    foot: Array<any>,
    title: string,
    save?: boolean
  ) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'letter',
    });

    //doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    //Formato de la tabla
    doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    autoTable(doc, {
      headStyles: {
        fillColor: [27, 79, 114],
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [255, 255, 255],
        cellWidth: 'auto',
        fontSize: 14,
      },
      bodyStyles: {
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [0, 0, 0],
        cellWidth: 'auto',
        fontSize: 12,
      },
      footStyles: {
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [189, 12, 42],
        cellWidth: 'auto',
        fontSize: 12,
      },
      head: [encabezado],
      body: body,
      foot: [foot],
    });
    //Abrir en el navegador o imprimir el documento
    if (save) {
      const fecha = new Date();
      doc.save(
        fecha.getDate() +
        fecha.getMonth() +
        fecha.getFullYear() +
        fecha.getTime() +
        '.pdf'
      );
    } else {
      window.open(doc.output('bloburl'), '_blank', 'download=mi_pdf.pdf');
    }
  }

  getReport3(
    encabezado: string[],
    body: Array<any>,
    foot: Array<any>,
    title: string,
    save?: boolean
  ) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'letter',
    });

    //doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    //Formato de la tabla
    doc.text(title, doc.internal.pageSize.width / 2, 25, { align: 'center' });
    autoTable(doc, {
      headStyles: {
        fillColor: [27, 79, 114],
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [255, 255, 255],
        cellWidth: 'auto',
        fontSize: 14,
      },
      bodyStyles: {
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [0, 0, 0],
        cellWidth: 'auto',
        fontSize: 12,
      },
      footStyles: {
        font: 'helvetica',
        fontStyle: 'bold',
        textColor: [189, 12, 42],
        cellWidth: 'auto',
        fontSize: 12,
      },
      head: [encabezado],
      body: body,
      foot: [foot],
    });
    //Abrir en el navegador o imprimir el documento
    if (save) {
      const fecha = new Date();
      doc.save(
        fecha.getDate() +
        fecha.getMonth() +
        fecha.getFullYear() +
        fecha.getTime() +
        '.pdf'
      );
    } else {
      window.open(doc.output('bloburl'), '_blank', 'download=mi_pdf.pdf');
    }
  }
}
