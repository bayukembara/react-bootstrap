// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import React from 'react';

function compose() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  function postBlog(e) {
    e.preventDefault();

    alert(title + " " + details);
  }

  return (
    <>
      <div className="container">
        <div className="py-5 px-5 d-flex justify-content-center">
          <div className="col-md-6">
            <form onSubmit={postBlog}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Details</label>
                <textarea name="details" id="details" className='form-control' placeholder='Text is here' onChange={(e) => setDetails(e.target.value)}></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Publish</button>
            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default compose