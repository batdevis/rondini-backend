'use strict';

const axios = require('axios');

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log('[Deploy] beforeCreate DEPLOY_TARGET', process.env.DEPLOY_TARGET);
      if (process.env.DEPLOY_TARGET != 'production') {
        return;
      }
      //data.name = 'Some fixed name';
      const baseUrl = `https://gitlab.com/api/v4/projects/${process.env.GITLAB_PROJECT_ID}`;
      const url = `${baseUrl}/trigger/pipeline?ref=${process.env.GITLAB_TRIGGER_BRANCH}&token=${process.env.GITLAB_TRIGGER_TOKEN}`;
      const headers = {
        'Private-Token': process.env.GITLAB_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      console.debug(`[Deploy] beforeCreate post ${url} {headers: ${headers}}`);
      axios.post(url, {}, {headers: headers})
        .then((result) => {
          console.log('[Deploy] beforeCreate result', result.status)}
        )
        .catch((e) => {
          if (e.response) {
            console.error(`[Deploy] beforeCreate error status ${e.response.status}, response`, e.response.data);
          } else {
            console.error('[Deploy] beforeCreate error without response');
          }
        });
    }
  }
};
