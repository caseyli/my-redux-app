import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addPost, destroyPost, addComment, destroyComment } from './redux/actions';

function App(props) {
  function handleClick(e) {
    e.preventDefault();
    props.addPost();
  }

  function destroy(id) {
    props.destroyPost(id);
  }

  return (
    <div>
      <table>
        <tbody>    
          {
            props.posts && props.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.content}</td>
                <td><a href='#' onClick={(e) => { e.preventDefault(); destroy(post.id); }}>destroy</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <a href='#' onClick={handleClick}>Click here</a>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts.values,
  };
}

const mapDispatchToProps = {
  addPost,
  destroyPost,
  addComment,
  destroyComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
