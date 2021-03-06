import React from 'react';
import { Query } from 'react-apollo';

import { GET_RECIPE } from '../../queries';
import LikeRecipe from './LikeRecipe';

const RecipePage = ({ match: { params } }) => {
  const { _id } = params;

  return (
    <Query query={GET_RECIPE} variables={{ _id }}>
      {({ data, loading }) => {
        if (loading) return <div>Loading...</div>;
        return (
          <div className="App">
            <h2>{data.getRecipe.name}</h2>
            <p>Category: {data.getRecipe.category}</p>
            <p>Description: {data.getRecipe.description}</p>
            <p>
              Instructions:{' '}
              <label
                dangerouslySetInnerHTML={{
                  __html: data.getRecipe.instructions
                }}
              />
            </p>
            <p>Likes: {data.getRecipe.likes}</p>
            <p>Created by: {data.getRecipe.username || 'Anonimus'}</p>
            <LikeRecipe likes={data.getRecipe.likes} _id={_id} />
          </div>
        );
      }}
    </Query>
  );
};

export default RecipePage;
