import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import UpIcon from '@material-ui/icons/ArrowUpward';
import DownIcon from '@material-ui/icons/ArrowDownward';
import { patchArticleVote } from '../utils/api';

const ArticleVote = ({ votes, id }) => {
  console.log(votes, id);
  const [voteUpdate, setVoteUpdate] = useState(0);

  const incrementVote = () => {
    const plusOne = 1;
    setVoteUpdate((currVote) => currVote + plusOne);
    patchArticleVote(id, plusOne).catch(() => {
      setVoteUpdate(0);
    });
  };

  const decrementVote = () => {
    const minusOne = -1;
    setVoteUpdate((currVote) => currVote + minusOne);
    patchArticleVote(id, minusOne).catch(() => {
      setVoteUpdate(0);
    });
  };
  // ^ THIS NEEDS TO UPDATE DB SO VOTES PERSIST ON REFRESH //

  const incIsDisabled = voteUpdate > 0;
  const decIsDisabled = voteUpdate < 0;

  return (
    <div className="votes">
      <p>Votes: {votes + voteUpdate}</p>
      <Button
        disabled={incIsDisabled}
        startIcon={<UpIcon />}
        onClick={incrementVote}
      ></Button>
      <Button
        disabled={decIsDisabled}
        startIcon={<DownIcon />}
        onClick={decrementVote}
      ></Button>
    </div>
  );
};

export default ArticleVote;
