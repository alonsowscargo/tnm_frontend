import React, { Component } from 'react';
import jsPDF from 'jspdf';

const input = '<h1>PRUEBA DE SISTEMAS</h1><div style="page-break-after: always;"></div><h1>PRUEBA DE SISTEMAS</h1>';
const pdf = new jsPDF({ unit: "px", format: "letter", userUnit: "px" });
pdf.html(input, { html2canvas: { scale: 0.57 } }).then(() => {
  pdf.save("test.pdf");
});