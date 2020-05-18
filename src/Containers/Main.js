import React, { Component } from 'react';
import logo from './contact.png';
import Input from '../Components/UI/Input/Input'
import Button from '../Components/UI/Button/Button'
import classes from './Main.css';

class Main extends Component {

      state = {
        userForm: {
          name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Full Name'
            },
            value: ''
          },
          
          email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email Address'
            },
            value: '',
          },
          
          contact: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Contact Number'
            },
            value: '',
          }
        },
        add: {
          value: 'Add'
        }
      }
      
      inputChangedHandler = (event, inputId) => {
        const updateForm ={
            ...this.state.userForm
        };
        const updateElement = {
            ...updateForm[inputId]
        };
        updateElement.value = event.target.value;
        updateForm[inputId] = updateElement;
        this.setState({userForm: updateForm});
      }

      buttonClickedHandler = () => {
        const updateForm ={
            ...this.state.update
        };
    
      }

      render() {
        const formUserList = [];
        for (let key in this.state.userForm) {
            formUserList.push({
                id: key,
                config: this.state.userForm[key]
            });
        }
        let form = (
            <div className={classes.Main}>
                {formUserList.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button 
                  btnType="Success"
                  clicked={this.buttonClickedHandler}>
                    {this.state.add.value}
                </Button>
            </div>
        );

        return (
        <div>
            <div className="Header">
            <header className="App-header">
              <img src={logo} className="Header-logo" alt="logo" />
              <h1 className="Header-title">Contact List Application</h1>
            </header> 
            </div>
            <div className="Main">
              {form}
            </div>
        </div>
          
          
        );
      }
}

export default Main;