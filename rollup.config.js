import nodeResolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

export default [{
    input: 'index.js',
    output: {
        extend: true,
        file: 'dist/marchingsquares.js',
        format: 'iife',
        name: 'MarchingSquaresJS'
    },
    plugins: [nodeResolve()]
}, {
    input: 'index.js',
    output: {
        extend: true,
        file: 'dist/marchingsquares.min.js',
        format: 'iife',
        name: 'MarchingSquaresJS'
    },
    plugins: [nodeResolve(), uglify()]
}, {
    input: 'isobands.js',
    output: {
        extend: true,
        file: 'dist/marchingsquares-isobands.min.js',
        format: 'iife',
        name: 'IsoBands'
    },
    plugins: [nodeResolve(), uglify()]
}, {
    input: 'isocontours.js',
    output: {
        extend: true,
        file: 'dist/marchingsquares-isocontours.min.js',
        format: 'iife',
        name: 'IsoContours'
    },
    plugins: [nodeResolve(), uglify()]
}]
