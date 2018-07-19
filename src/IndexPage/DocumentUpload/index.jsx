import React, { Component } from 'react';

class DocumentUpload extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isUploading: false,
      isSubmitting: false,
      errors: []
    };
  }

  render () {
    const { errors } = this.state;
    const submitText = !this.state.isSubmitting ? 'Upload' : 'Uploading...';
    return (
      <form className="upload__form">
        {
          errors.map((e, i) => <span key={i} className=''>{e}</span>)
        }
        
        <button className="btn btn--purple btn-full" type="submit">
          Select File
        </button>

        {this.state.isUploading && <span>Uploading...</span>}
        <div className='input--inline'>
          <label>Title: </label>
          <input type="text" />
        </div>

        <button className="btn btn--green btn-full" type="submit">
          {submitText}
        </button>
      </form>
    );
  }
}

export default DocumentUpload;
