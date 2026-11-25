import { defineConfig, UserConfig, ConfigEnv } from 'vite';
import path from 'path';

export default defineConfig((env: ConfigEnv): UserConfig => {
  let common: UserConfig = {
    server: {
      port: 5000,
    },
    root: './',
    // Use relative paths for GitHub Pages and local exhibition subfolders.
    base: env.command === 'build' ? './' : '/',
    publicDir: './public',
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@framework': path.resolve(__dirname, '../../../Framework/src'),
      }
    },
    build: {
      target: 'baseline-widely-available',
      assetsDir: 'assets',
      outDir: './dist',
      sourcemap: env.mode == 'development' ? true : false,
      rolldownOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          live2d: path.resolve(__dirname, 'LIVE2D.html'),
        },
      },
    },
  };
  return common;
});
