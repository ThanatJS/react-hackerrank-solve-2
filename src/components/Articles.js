import React, { useState } from 'react';

function Articles({ articles }) {
  console.log(articles);
  return (
    <div className="card w-50 mx-auto" >
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((i, key) => {
              return (
                <tr data-testid="article" key={key}>
                  <td data-testid="article-title">{i.title}</td>
                  <td data-testid="article-upvotes">{i.upvotes}</td>
                  <td data-testid="article-date">{i.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
