import React, { Component } from 'react';
import './tag.css';

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tagsData: '',
          getTagData: []
        };
      }
    render() {
        return (
            <div>
                <div className='tags-container'>
                     <div className="">
                        <strong>Add Tags:</strong>
                        </div>
                        <div className="">
                        <input type="text" value={this.state.tagsData} onChange={(e) => { this._tagDataChange(e)}}  />
                        <button onClick={this._saveTagData} >+ Add</button>
                    </div>
                    <div>
                        <p>Tags: </p>
                        <ul>
                        {this.state.getTagData.map((item, index) => (
                            <li>{item.tag} 
                            <span key={index} onClick={() => this.removeTag(index)}>X</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                   
              </div>
            </div>
        );
    }

    _tagDataChange(tagValue) { 
        let _tagCopy = {...this.state}
        _tagCopy.tagsData = tagValue.target.value;
        this.setState(_tagCopy);
      }
    
      _saveTagData = () =>{
        let newTagData = this.state.tagsData
    
        let pushNewTagData = this.state.getTagData;
        pushNewTagData.push({ tag: newTagData});
    
        let pushTagsData = { ...this.state }
        pushTagsData.getTagData = pushNewTagData
        this.setState(pushTagsData)
    
        let removeInputData = { ...this.state}
        removeInputData.tagsData = '';
        this.setState(removeInputData);
      }
    
      /* final tag data sent*/
      _finalTagData = () => {
        let getTagData =  this.state.getTagData;
        console.log(getTagData);
      }
    
      removeTag = (index) => {
        let removeTagData = {...this.state}
        removeTagData.getTagData.splice(index, 1);
        this.setState(removeTagData)
      }
}

export default Tags;