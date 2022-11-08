import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_YlI6E4Wnu',
  ClientId: '257cfbkr73um4v713kldpb3q16',
};
export default new CognitoUserPool(poolData);
