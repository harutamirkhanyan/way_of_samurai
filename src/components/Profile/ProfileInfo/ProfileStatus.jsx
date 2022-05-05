import React from "react";

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode(){
    this.setState({editMode:true});
  }

  deActivateEditMode(){
    this.setState({editMode:false});
    this.props.updateStatus(this.state.status);
  }
  onStatusChange=(e)=>{
      
    this.setState({
      status: e.currentTarget.value
    })
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{(this.props.status || 'No status')}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            {console.log(this.state.status, 'state')}
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;



