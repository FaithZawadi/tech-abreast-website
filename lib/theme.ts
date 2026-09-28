// Runs in <head> before the page paints, so there is no light→dark flash.
// Uses the visitor's saved choice, otherwise their device setting.
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`
