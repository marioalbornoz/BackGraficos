import { Router } from 'express';
import { getResevas } from '../controllers/reservas.controller';

const router = Router();


router.get('/',       getResevas );
// router.get('/:id',    getUsuario );
// router.post('/',      postUsuario );
// router.put('/:id',    putUsuario );
// router.delete('/:id', deleteUsuario );



export default router;