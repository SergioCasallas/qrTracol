const QRCode = require("qrcode");

exports.createQR = async (req, res) => {
  const { url } = req.body;

  const generateQR = (text) => {
    try {
      return QRCode.toDataURL(text);
    } catch (e) {
      console.log(e);
    }
  };

  const QR = await generateQR(url);
  res.json({ mensaje: `${await QR}` });
};
