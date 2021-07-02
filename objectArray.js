const web = {
  name: 'lauri-web',
  links: {
    link: 'www.pagina-web.com'
  },
  social: {
    yt: {
      link: 'youtube.com/lauriweb',
      name: 'lauriweb'
    },
    ig: '@lauri_web_'
  }
}

const { link, name } = web.social.yt;
console.log(name);