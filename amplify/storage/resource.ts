import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'amplifyTeamDrive',
    access: (allow) => ({
      'entities/{entity_id}/*': [
        allow.guest.to(['read', 'write']),
        allow.entity('identity').to(['read', 'write', 'delete'])
      ],
      'files/*': [
        allow.authenticated.to(['read','write']),
        allow.guest.to(['read', 'write'])
      ],
    })
  });