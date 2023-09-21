import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['chart'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
	process.env.NODE_ENV !== 'production' && logger,
	thunk,
].filter(Boolean);

const composeEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);
// sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
