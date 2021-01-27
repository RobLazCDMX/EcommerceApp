import React, {Component} from 'react';
import './ContactUs.css';


class ContactUs extends Component {
  constructor() {
      super();
      this.state = {
          input: {},
          errors: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;

      this.setState({
          input
      });
  }

  handleSubmit(event) {
      event.preventDefault();

      if (this.validate()) {
          console.log(this.state);

          let input = {};
          input["firstName"] = "";
          input["lastName"] = "";
          input["email"] = "";
          input["comment"] = "";
          input["Bname"] = "";
          input["Baddress"] = "";
          input["Bphone"] = "";
          input["ContactPer"] = "";
          this.setState({ input: input });

          alert('The Form has submited');
      }
  }

  validate() {
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      if (!input["firstName"]) {
          isValid = false;
          errors["firstName"] = "Please enter your name.";
      }

      if (!input["lastName"]) {
        isValid = false;
        errors["lastName"] = "Please enter your last name.";
    }

      if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email.";
      }

      if (typeof input["email"] !== "undefined") {

          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
          }
      }

      if (!input["comment"]) {
          isValid = false;
          errors["comment"] = "Please enter your comment.";
      }

      // if (!input["Bname"]) {
      //   isValid = false;
      //   errors["Bname"] = "Please enter your Bname.";
      // }

      // if (!input["Baddress"]) {
      //   isValid = false;
      //   errors["Baddress"] = "Please enter your Baddress.";
      // }

      // if (!input["Bphone"]) {
      //   isValid = false;
      //   errors["Bphone"] = "Please enter your Bphone.";
      // }

      // if (!input["ContactPer"]) {
      //   isValid = false;
      //   errors["ContactPer"] = "Please enter your ContactPer.";
      // }

      this.setState({
          errors: errors
      });

      return isValid;
  }
  render() {
    return ( 
        <form  onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input 
            value={this.state.input.firstName}
            onChange={this.handleChange}
            type="text" id="firstName" 
            placeholder="First Name" 
            name="firstName"
            autoFocus  />
            <br/>
             <span style={{color: "red"}}>{this.state.errors.firstName}</span> 
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={this.state.input.lastName}
            onChange={this.handleChange} />
            <br/>
            <span style={{color: "red"}}>{this.state.errors.lastName}</span> 
        </div> 
        <div>   
            <label htmlFor="businessName">Business Name</label>
            <input type="text" name="Bname" id="businessName" placeholder="Business Name" 
            value={this.state.input.Bname}
            onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor="businessAddress">Business Address</label>
            <input type="text" name="Baddress" id="businessAddress" placeholder="Business Address" value={this.state.input.Baddress}
            onChange={this.handleChange} />
        </div>
        <div>
            <label htmlFor="businessPhone">Business Phone</label>
            <input type="tel" name="Bphone" id="businessPhone" placeholder="123-456-7890"  value={this.state.input.Bphone}
            onChange={this.handleChange}  />
        </div>
        <div>
            <label htmlFor="contactPerson">Contact Person</label>
            <input type="text" name="ContactPer" id="contactPerson" placeholder="Contact Person" value={this.state.input.ContactPer}
            onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor="comment">Comments or Questions</label>
            <textarea name="comment" id="comments" cols="30" rows="10"  value={this.state.input.comment}
             onChange={this.handleChange}></textarea>
            <br/>
            <span style={{color: "red"}}>{this.state.errors.comment}</span>

        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="Email" placeholder="Email" value={this.state.input.email}
            onChange={this.handleChange} />
            <br/>
              <span style={{color: "red"}}>{this.state.errors.email}</span>
        </div>    
        <div>
            <input type="submit" defaultValue="Submit" id="inputButton"/>
        </div>
    </form>
    );
  }
            
}
 
export default ContactUs; 