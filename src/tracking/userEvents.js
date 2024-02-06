import sql from "../db.js";

export default (args, context) => sql`
  SELECT *
  FROM user_event
  ORDER BY created_at DESC
`;
