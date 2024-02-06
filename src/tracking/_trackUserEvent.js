import sql from "../db.js";

export default (args, { pathname, ip }) => sql`
  INSERT INTO user_event (event, ip)
  VALUES (${pathname}, ${ip})
`;
