// External dependencies
import React, { Component } from 'react';
// Shared components
import Loading from './Loading';

// Uploaded Document components
import UploadedDocumentSearch from './Search';
import UploadedDocumentsTable from './TableView';
import DocumentUpload from './DocumentUpload';

class UploadedDocumentsPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      documents: [
        {
          id: 1,
          facility_id: 1,
          created_by_user_id: 1,
          attachment_file_name: 'Document 1',
          attachment_content_type: 'image',
          attachment_file_size: 123,
          attachment_updated_at_string: '5-10-2018'
        },
        {
          id: 2,
          facility_id: 1,
          created_by_user_id: 1,
          attachment_file_name: 'Document 2',
          attachment_content_type: 'doc',
          attachment_file_size: 123,
          attachment_updated_at_string: '5-11-2018'
        },
        {
          id: 3,
          facility_id: 1,
          created_by_user_id: 1,
          attachment_file_name: 'Document 3',
          attachment_content_type: 'folder',
          attachment_file_size: 123,
          attachment_updated_at_string: '5-12-2018'
        }
      ],
      isLoading: false,
      isDownloading: false,
      isSearching: false,
      newFileName: '',
      documentToRename: '',
      activeTable: ''
    };
  }

  render () {
    return (
      <div className="page__wrapper">
        <div className="">
          <div className='upload__header'>
            <h3 className="page__title">Upload a Document</h3>
            <DocumentUpload />
          </div>

          <div className="page__content">
            <div className="section__wrapper section--recent-uploads">
              <h4 className="section__header">Recent Uploads</h4>
              { this.state.isLoading && !this.state.isSearching
                  ? <Loading />
                  : <UploadedDocumentsTable
                    tableType='recent'
                    attributes={['attachment_updated_at_string', 'attachment_file_name']}
                    tableHeadings={['Upload Date', 'Document Name', 'Actions']}
                    isSearching={this.state.isSearching}
                    documents={this.state.documents}
                    documentToRename={this.state.documentToRename}
                    activeTable={this.state.activeTable === 'recent'}
                  />
              }
            </div>
          </div>
        </div>

        <div className="page__content">
          <div className="section__wrapper">
            <div className="section__header-wrap">
              <h4 className="section__header">{'Documents Library'}</h4>
              <UploadedDocumentSearch />
            </div>
            { this.state.isLoading
                ? <Loading />
                : <UploadedDocumentsTable
                  tableType= 'all'
                  attributes={['attachment_file_name']}
                  tableHeadings={['Document Name', 'Actions']}
                  isSearching={this.state.isSearching}
                  documents={this.state.documents}
                  documentToRename={this.state.documentToRename}
                  activeTable={this.state.activeTable === 'all'}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default UploadedDocumentsPage;
