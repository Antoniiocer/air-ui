import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'esm',
	},
	plugins: [
		resolve(),
		commonjs(),
		typescript(),
		babel({ babelHelpers: 'bundled' }),
		scss({ output: 'dist/bundle.css' }),
	],
};