const QRCode = require("qrcode");

exports.createQR = async (req, res) => {
  const { url, numeroTRA, codigoVerificacion } = req.body;

  const urlParams = `${url}/${numeroTRA}/${codigoVerificacion}`;

  const generateQR = (text) => {
    try {
      // return QRCode.toDataURL(text);
      return QRCode.toDataURL(text);
    } catch (e) {
      console.log(e);
    }
  };

  const QR = await generateQR(urlParams);
  const QRSlice = await QR.slice(22);
  res.send(`${await QRSlice}`);
};
