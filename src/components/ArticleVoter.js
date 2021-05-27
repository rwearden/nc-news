import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ThumbUp, ThumbDown } from '@material-ui/icons';

import { patchArticleVote } from '../utils/api';

const ArticleVoter = ({ votes, id }) => {
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

  const incIsDisabled = voteUpdate > 0;
  const decIsDisabled = voteUpdate < 0;

  return (
    <div className="votes">
      <p>Votes: {votes + voteUpdate}</p>
      <Button
        disabled={incIsDisabled}
        startIcon={<ThumbUp />}
        onClick={incrementVote}
      ></Button>
      <Button
        disabled={decIsDisabled}
        startIcon={<ThumbDown />}
        onClick={decrementVote}
      ></Button>
    </div>
  );
};

export default ArticleVoter;
