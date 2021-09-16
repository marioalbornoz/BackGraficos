"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservas_controller_1 = require("../controllers/reservas.controller");
const router = express_1.Router();
router.get('/', reservas_controller_1.getResevas);
// router.get('/:id',    getUsuario );
// router.post('/',      postUsuario );
// router.put('/:id',    putUsuario );
// router.delete('/:id', deleteUsuario );
exports.default = router;
//# sourceMappingURL=reservas.routes.js.map