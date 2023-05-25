import {Router} from 'express';
import multer from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';


import uploadConfig from './config/Multer';

const router = Router();

const upload = multer(uploadConfig.upload("./temp"))

// Rotas do Usuario
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetailUserController().handle)

// rotas de categorias
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)


// Rotas de produtos
router.post('/product', isAuthenticated,upload.single('file'), new CreateProductController().handle)
router.get('/category/products', isAuthenticated, new ListByCategoryController().handle)

// rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)


export {router};