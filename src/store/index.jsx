import { configureStore, createSerializableStateInvariantMiddleware, isPlain } from '@reduxjs/toolkit';
import coin from './coinSlice';
//import { Iterable } from 'immutable';

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
    Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
});

export const store = configureStore({
    reducer: {
        coin,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['TYPE'],
                ignoredActionPaths: ['property'],
                ignoredPaths: ['reducer.property'],
            },
        }).concat(serializableMiddleware),
});
