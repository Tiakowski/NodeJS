var pdf = require("html-pdf")

class PDFWriter{
    static Write(filename, html){
        pdf.create(html,{}).toFile(filename, (err) => {});
    }
}

module.exports = PDFWriter;