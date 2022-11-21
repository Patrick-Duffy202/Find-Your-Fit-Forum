const multer = require('multer');
const storage = multer.diskStorage('./uploads');
const upload = multer({ storage: storage });
