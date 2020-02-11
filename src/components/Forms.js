import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';





class FormPage extends Component { 



  render(){

   

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="col-lg-12 col-md-12 ">
      <form OnSubmit ="submit" >
        <p className="h5 text-center mb-4">Applying{this.props.JobName}</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right"  />
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"success="right" />
          <MDBInput label="Applying For Post" icon="tag" group type="text" validate error="wrong" success="right" />
            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
          <MDBInput label="Contact No" icon="phone" group type="text" validate error="wrong" success="right" />
            <MDBInput type="textarea" rows="2" label="Your Qualification" icon="pencil-alt" />

        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary" type="submit" value="submit"> 
            Submit
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}
}

export default FormPage;