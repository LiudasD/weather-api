import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import '../Styles/InfoForm.css';
export default class InfoForm extends Component {
    render() {
        return (
            <Form className="Form" onSubmit={this.props.getWeather}>
                <Form.Group widths="equal">
                    <input type="text" name="city" placeholder="City..." />
                    <input type="text" name="country" placeholder="Country..." />
                    <Button className="medium ui teal" type="onSubmit">Get weather</Button>
                </Form.Group>
            </Form>
        )
    }
}