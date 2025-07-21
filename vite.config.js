import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  base: './',
  server: {
    cors: false
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    modulePreload: false,
    crossOriginIsolation: false,
    cssCodeSplit: true
  },
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      return filename
    }
  },
  plugins: [
    {
      name: 'remove-crossorigin-and-fix-images',
      writeBundle(options, bundle) {
        Object.keys(bundle).forEach(fileName => {
          const filePath = path.join(options.dir, fileName)

          if (fileName.endsWith('.html')) {
            let html = fs.readFileSync(filePath, 'utf-8')

            // Удаляем crossorigin атрибуты из script и link тегов
            html = html.replace(/\s+crossorigin(?:="[^"]*")?/gi, '')

            // Удаляем type="module" атрибуты из script тегов
            html = html.replace(/\s+type="module"/gi, '')

            // Исправляем пути к изображениям в инлайн стилях
            // Меняем /img/ на ./img/ для корректной работы с базовым путем
            html = html.replace(/url\((['"]?)\/img\//g, 'url($1./img/')

            fs.writeFileSync(filePath, html)
          }

          if (fileName.endsWith('.css')) {
            let css = fs.readFileSync(filePath, 'utf-8')

            // Исправляем пути к изображениям в CSS файлах
            // Меняем /img/ или img/ на ../img/ для корректной работы из папки assets/
            css = css.replace(/url\((['"]?)(?:\/)?img\//g, 'url($1../img/')

            fs.writeFileSync(filePath, css)
          }
        })
      }
    },
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'src/main.js',
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'Seculart - Главная страница проекта',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'admin_projects.html',
          template: 'admin_projects.html',
          injectOptions: {
            data: {
              title: 'admin_projects',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'admin_project_approve_reject.html',
          template: 'admin_project_approve_reject.html',
          injectOptions: {
            data: {
              title: 'admin_project_approve_reject',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'admin_project_block_unblock_delete.html',
          template: 'admin_project_block_unblock_delete.html',
          injectOptions: {
            data: {
              title: 'admin_project_block_unblock_delete',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'admin_user_block_delete.html',
          template: 'admin_user_block_delete.html',
          injectOptions: {
            data: {
              title: 'admin_user_block_delete',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'admin_user_unblock_proven.html',
          template: 'admin_user_unblock_proven.html',
          injectOptions: {
            data: {
              title: 'admin_user_unblock_proven',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
        {
          entry: 'src/main.js',
          filename: 'user_projects.html',
          template: 'user_projects.html',
          injectOptions: {
            data: {
              title: 'user_projects',
            },
            ejsOptions: {
              views: [process.cwd()],
            },
          },
        },
      ],
    }),
  ],
  // Настраиваем корневую папку для поиска инклудов
  root: process.cwd()
}) 