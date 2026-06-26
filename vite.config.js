import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MyAneesPackage',
      fileName: (format) => `my-anees-package.${format}.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@ckeditor/ckeditor5-react',
        'ckeditor5',
        'ckeditor5/ckeditor5.css',
        'mathlive',
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/fontawesome-svg-core'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ckeditor/ckeditor5-react': 'CKEditorReact',
          'ckeditor5': 'CKEditor',
          'mathlive': 'MathLive',
          '@fortawesome/react-fontawesome': 'FontAwesomeIcon',
          '@fortawesome/free-solid-svg-icons': 'FontAwesomeSolidIcons',
          '@fortawesome/fontawesome-svg-core': 'FontAwesomeCore'
        }
      }
    }
  }
});
