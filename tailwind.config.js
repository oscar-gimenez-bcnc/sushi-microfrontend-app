module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto']
      }
    }
  },
  /* TODO: Get this classes dinamically */
  safelist: [
    'container mx-auto alert alert-info alert-warning alert-error m-2 py-1 py-3 py-4 px-4 whitespace-nowrap text-left text-gray-500 text-xs text-sm border-b cursor-pointer leading-4 leading-5 avatar mask mask-squircle h-12 w-12 modal modal-box modal-backdrop divider divider-primary flex items-center justify-end justify-between gap-2 text-sm badge badge-ghost badge-xs p-2 overflow-x-auto table table-md bg-white tooltip btn btn-xs btn-primary btn-ghost btn-neutral text-center loading loading-spinner text-primary font-bold opacity-50 h-3 w-3 h-6 w-6'
  ],
  daisyui: {
    themes: ['light']
  },
  plugins: [require('daisyui')]
};
