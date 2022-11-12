GRANT ALL PRIVILEGES ON DATABASE assistant TO seolim;

\c assistant;

CREATE TABLE users(
  id        VARCHAR(100)  NOT NULL  PRIMARY KEY,
  src       TEXT          NOT NULL,
  github    VARCHAR(100)  NOT NULL,
  email     VARCHAR(100)  NOT NULL
);