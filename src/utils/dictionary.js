import oxfordDic from "oxford-dictionary-api";

const dictionary = new oxfordDic(
  process.env.REACT_APP_OXFORD_APP_ID,
  process.env.REACT_APP_OXFORD_APP_KEY
);

export default dictionary;
