import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { ERROR } from '../lib';
import db from '../model/connect';

type Query = { code: string };
const getToken = async (code: string) => {
  try {
    const { access_token } = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    ).then((res) => res.data);

    return access_token;
  } catch (err) {
    ERROR.unknownError(err, 'github auth error');
  }
};
const getUserDataFromGithub = async (access_token: string) => {
  try {
    const { login, avatar_url, html_url } = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/vnd.github+json',
      },
    }).then((res) => res.data);

    return { login, avatar_url, html_url };
  } catch (err) {
    ERROR.unknownError(err, 'github request error');
  }
};
const checkUserIsIN = async (id: string) => {
  try {
    await db.none('SELECT id FROM users WHERE id = $1', [id]);
    return true;
  } catch (err) {
    if (err.code === 0) {
      return false;
    }
  }
};
const insertUserInDB = async (id: string) => {
  try {
    const {  } = await db.one(
      'INSERT INTO ', []
    );
  } catch(err) {

  }
}
const redirect = async (req: Request<{}, {}, {}, Query>, res: Response, next: NextFunction) => {
  try {
    const { code } = req.query;
    const access_token = await getToken(code);
    const { login, avatar_url, html_url } = await getUserDataFromGithub(access_token);

    return res.redirect('assistant://myapp.com');
  } catch (err) {
    next(err);
  }
};

export default redirect;
