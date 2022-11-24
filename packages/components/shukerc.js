import { defineConfig, writeFileSync } from '@baberat/shuke'

export default defineConfig({
    esm: {
        ignores: ['**/src/**/demo/**', '**/src/**/demo'],
    },
    cjs: {
        ignores: ['**/src/**/demo/**', '**/src/**/demo'],
    },
    styleImport(path, fileName) {
        if (fileName.match(/(\/|\\)style(\/|\\)index\.(js|ts)/)) {
            return path
        }
        return path.replace(/.scss|.less|.sass/, '.css')
    },
    file(fileName, data) {
        if (fileName.match(/(\/|\\)style(\/|\\)index\.js/)) {
            const content = data
                .replace(/\/style\/?'/g, "/style/css'")
                .replace(/\/style\/?"/g, '/style/css"')
                .replace(/\/style\/index\/?'/g, "/style/css'")
                .replace(/\/style\/index\/?"/g, '/style/css"')
                .replace(/\.scss/g, '.css')
            const newFile = fileName.replace(/index\.js/, 'css.js')
            writeFileSync(newFile, content)
        }
    },
})
