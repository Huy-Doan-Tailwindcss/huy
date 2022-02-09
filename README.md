# huy

npm init -y
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

@tailwind base;
@tailwind components;
@tailwind utilities;

"dev": "npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css",
"watch": "npx tailwindcss --postcss -i ./src/style.css -o ./css/style.css --watch",

content: [
"**/*.html"
],

npm run watch
