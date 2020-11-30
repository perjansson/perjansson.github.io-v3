module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'yarn start:ci',
      url: ['http://localhost:5000'],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.98 }],
        'categories:accessibility': ['error', { minScore: 0.98 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
