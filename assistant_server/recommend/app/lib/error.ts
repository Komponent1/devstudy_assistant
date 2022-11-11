/* eslint-disable no-console */
const unknnownError = (err: any, keyword: string) => {
  console.error('ERROR LOG(unknown)', err);
  throw ({
    code: 500,
    msg: keyword,
  });
};
const paramError = (err: any) => {
  console.log('ERROR LOG(PARAM)', err);
  throw ({
    code: 400,
    msg: 'No Correct Paramter',
  });
};
const dbError = (err: any) => {
  console.log('ERROR LOG(DB)', err);
  throw ({
    code: 500,
    msg: 'Error In Db',
  });
};
const authError = (err: any) => {
  console.log('ERROR LOG(AUTH)', err);
  throw ({
    code: 401,
    msg: 'No Authorization',
  });
};
const refError = (err: any) => {
  console.log('ERROR LOG(REF)', err);
  throw ({
    code: 412,
    msg: 'Already Data In',
  });
};

export default {
  paramError, dbError, authError, refError, unknnownError,
};
