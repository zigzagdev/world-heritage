module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    xxs: {max: '428'},
    sp: '428px', // スマホサイズを追加
    maxsp: { max: '427px' }, // maxも追加
    sptb: { min: '428px', max: '559px' }, // min-maxを追加

    tb: '600px', // タブレットサイズを追加
    maxtb: { max: '599px' },
    tbpc: { min: '600px', max: '1023px' },

    maxpc: { max: '1023px' },
    pc: '1024px',

    extend: {},
  },
  plugins: [],
}

