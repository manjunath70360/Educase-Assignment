import { FaArrowLeft } from "react-icons/fa";

import { IoCameraOutline } from "react-icons/io5";

import { Component } from "react";

import "./index.css"

class Profile extends Component{
    state = {selectedFile:null, photoURL:'', username:'', fullName:'', email:'', phoneNum:''}

    handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          this.setState({
            selectedFile: file,
            photoURL: URL.createObjectURL(file),
          });
        }
      };

onclickArrow = ()=>{
    this.props.history.push('/home')
}

onChangeUsername = (event)=>{
    this.setState({username:event.target.value})
}

onChangeFullname = (event)=>{
    this.setState({fullName:event.target.value})
}

onChangeEmail = (event)=>{
    this.setState({email:event.target.value})
}

onChangePhone = (event)=>{
    this.setState({phoneNum:event.target.value})
}

      triggerFileInput = () => {
        this.fileInput.click();
      };

    render(){
        const { photoURL } = this.state;

        return(
              <>  
              <div className="profile-container">
                    <div className="header-con">
                    <button className="arrow-btn" onClick={this.onclickArrow} type="button"><FaArrowLeft size={22}/></button>
                    <div className="head"><h1 className="header">Fill your Profile</h1></div>
                </div>   

                    <div className="photo-selector">
                        
                        {photoURL ? (
                        <div className="upload" onClick={this.triggerFileInput}>
                            <div className="photo-frame" >
                            <img src={photoURL} alt="Selected" className="photo" />
                            
                        </div>
                        <button type="button" className="cam-btns">
                        <IoCameraOutline size={22} className="cam-icon"/>
                        </button>
                        </div>
                        ) : (
                        <div className="upload-prompt" onClick={this.triggerFileInput}>
                            <button type="button" className="cam-btn">
                            <IoCameraOutline size={22} className="cam-icon"/>
                            </button>
                        </div>
                        )}
                        <input
                        type="file"
                        accept="image/*"
                        onChange={this.handleFileChange}
                        style={{ display: 'none' }}
                        ref={(input) => (this.fileInput = input)}
                        />
                    </div>


                  
                    <form className="form">
                     <div className="form-data"> 
                        <label className="form-name">Username <span className='span'>*</span></label>
                        <input className="input" type="text" onClick={this.onChangeUsername}/>
                        <label className="form-name">Full Name <span className='span'>*</span></label>
                        <input className="input" type="text" onClick={this.onChangeFullname}/>
                        <label className="form-name">Email Address <span className='span'>*</span></label>
                        <input className="input" type="text" onClick={this.onChangeEmail}/>
                        <label className="form-name">Phone Number <span className='span'>*</span></label>
                        <input className="input" type="text" onClick={this.onChangePhone}/>
                    </div>    
                    <button type="submit" className="next-btn" onClick={this.onclickArrow}>Next</button>
                    </form>
                </div>
                <div className="suitable">
    <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1716213021/no_laptop_q64jzs.avif" className="pc-img" alt="no pc" />
    <h1 className="mobile">Best Suited for Mobile</h1>
  </div>
                </>

        )
    }
}

export default Profile