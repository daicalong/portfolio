(function (app) {
  app.value('personalInfoValue',
    {
      siteName: 'Hatomi',
      phone: '+980-875-1007',
      email: 'hatomi.design@gmail.com',
      socialMedia: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hpnguyen52/',
          icon: 'fig-linkedin',
        },
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/user/HPNguyen52',
          icon: 'fig-bed',
        },
        {
          name: 'Vimeo',
          url: 'https://vimeo.com/user16262642',
          icon: 'fig-cpu',
        }
      ]
    }
  );
})(window.app);