import esbuild, { minify } from 'rollup-plugin-esbuild';

const name = 'beautify-url';

const bundle = config => ({
    plugins: [esbuild(), minify()],
    input: 'src/index.ts',
    external: id => !/^[./]/.test(id),
    ...config,
});

export default [
    bundle({
        output: [
            {
                file: `dist/${name}.iife.min.js`,
                name: 'window',
                extend: true,
                format: 'iife',
            },
        ],
    }),
    bundle({
        output: [
            {
                file: `dist/${name}.cjs`,
                format: 'cjs',
            },
        ],
    }),
];