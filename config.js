module.exports = {
  PLATFORM: 'refispring',
  PORT: 18888,
  PLATFORM_NAME: 'ReFi Spring',
  PLATFORM_LEGAL_ADDRESS: 'TBD, Portugal',
  DEFAULT_TITLE: 'ReFi Spring',
  DEFAULT_DESCRIPTION: '',
  SEMANTIC_URL: 'https://refispring.closer.earth',
  TEAM_EMAIL: 'team@refispring.com',
  START_TIME: '2022-02-09T21:00:00.000Z',
  EXPOSE_STORE: true,
  API_URL: 'https://api.oasa.co',
  CDN_URL: 'https://cdn.oasa.co/photo/',
  LOG_REQUESTS: false,
  CACHE_DURATION: 300000, // 5min
  STRIPE_TEST_KEY: 'pk_test_51Gv17cGtt5D0VKR2Gt2RUVIDfrHRGJTfMSwRFpdbF5B4VfZ2zFOxM62ckAj4aQN5q6mDexpjZAqQKLpKdmwcnQfJ00sJwfbVWK',
  STRIPE_PUB_KEY: 'pk_live_YxOUUf7iOvQj104TG4JyWMAE003w80ISH6',
  LOGO_HEADER: '/images/logo-v1.png',
  // LOGO_FOOTER: '/images/logo.svg',
  REGISTRATION_MODE: 'open',
  TELEGRAM_URL: 'https://t.me/joinchat/vaCo1pdemyZiYjIy',
  DISCORD_URL: 'https://discord.gg/EBvsbnSZMC',
  TWITTER_URL: "https://twitter.com/ReFiDAOist",
  FEATURES: {
    events: true,
    booking: false
  },
  SIGNUP_FIELDS: [
    {
      name: 'work',
      label: 'What you are working on?',
      placeholder: 'A #ReFi event focused on xxx in xxx'
    }
  ],
  EN: {
    signup_title: 'Let\'s ReFi',
    signup_body: 'Join a community developing a regenerative future using web3',
    signup_success: 'Thank you, our community curator will reach out for an intro call.'
  }
}
