import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
  const [newArticles, setNewArticles] = useState(articles);

  useEffect(() => {
    const sortByUpvotes = [...newArticles];
    sortByUpvotes.sort((a, b) => {
      return b.upvotes > a.upvotes ? 1 : -1;
    });
    setNewArticles(sortByUpvotes);
  }, []);

  const upvotedHandler = () => {
    const sortByUpvotes = [...newArticles];
    sortByUpvotes.sort((a, b) => {
      return b.upvotes > a.upvotes ? 1 : -1;
    });
    setNewArticles(sortByUpvotes);
  };

  const recentHandler = () => {
    const sortByDate = [...newArticles];
    sortByDate.sort((a, b) => {
      let na = new Date(a.date);
      let nb = new Date(b.date);
      return na > nb ? -1 : 1;
    });
    setNewArticles(sortByDate);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={upvotedHandler}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={recentHandler}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={newArticles} />
    </div>
  );
}

export default App;
