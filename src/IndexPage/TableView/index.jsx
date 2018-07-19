import React, { Component } from 'react';

class UploadedDocumentsTable extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isUpdating: false
    };
  }

  tableBody () {
    const { documents, documentToRename, activeTable, attributes } = this.props;
    const { isUpdating } = this.state;
    return documents.map((uploadedDoc, i) => {
/* eslint-disable */
      // documentToRename will be the id as string，while uploadDoc.id is an integer
      if (uploadedDoc.id == documentToRename && activeTable) {
/* eslint-enable */
        return (
          <tr className=''>
            <td className=''>
              <label className="">Name:</label>
              <input
                type="text"
                ref={(input) => (this.fileName = input)}
                disabled={isUpdating}
              />
            </td>

            {attributes.length > 1 && (<td></td>)}

            <td>
              <div className="">
                <button className=''disabled={isUpdating}>Cancel</button>
                <button className=''disabled={isUpdating}>Save</button>
              </div>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={i}>
            {
              attributes.map((attribute, j) => {
                return (
                  <td key={j}>
                    <span className=''>
                      {uploadedDoc[attribute]}
                    </span>
                  </td>
                );
              })
            }
          </tr>
        );
      }
    });
  }

  renderContent () {
    const { documents, isSearching } = this.props;

    if (documents.length > 0) {
      return (
        <div>
          <table className='table'>
            <tbody>{ this.tableBody() }</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className=''>
          { isSearching
            ? <div className="">
                <h3 className='empty__heading'>No Documents Found</h3>
                <span className='empty__text mb-0'>{'No documents match your search.'}</span>
              </div>
            : <div className="">
                <h3 className='empty__heading'>{'No documents yet.'}</h3>
                <span className='empty__text mb-0'>
                  {"When you've added some documents, they'll show up here."}
                </span>
              </div>
          }
        </div>
      );
    }
  }

  render () {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

export default UploadedDocumentsTable;
