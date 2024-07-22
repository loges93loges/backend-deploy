function generateCertificate() {
    
    const name = prompt('Enter the name:');
    const course = prompt('Enter the course:');
    const date = prompt('Enter the date:');
    const standard = prompt('Enter the standard:');


    document.getElementById('cert-name').textContent = name;
    document.getElementById('cert-course').textContent = course;
    document.getElementById('cert-date').textContent = date;
    document.getElementById('standard').textContent = standard;

    html2canvas(document.getElementById('certificate'), {
        onrendered: function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('certificate.pdf');
        }
    });
}